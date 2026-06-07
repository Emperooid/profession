import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const subjectLabels = {
      general: "General Enquiry",
      work: "Job Opportunity",
      collab: "Collaboration",
      freelance: "Freelance Project",
      other: "Other",
    };

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] ${subjectLabels[subject] ?? "New Message"} from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0f0f0f;color:#e5e5e5;border-radius:12px;">
          <h2 style="color:#00ff99;margin-bottom:4px;">New message from your portfolio</h2>
          <p style="color:#888;font-size:13px;margin-top:0;">via awosikaemmanueldefirst.vercel.app</p>
          <hr style="border:none;border-top:1px solid #222;margin:20px 0;" />
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:8px 0;color:#888;width:100px;">Name</td><td style="padding:8px 0;color:#e5e5e5;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#888;">Email</td><td style="padding:8px 0;color:#e5e5e5;"><a href="mailto:${email}" style="color:#00ff99;">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding:8px 0;color:#888;">Phone</td><td style="padding:8px 0;color:#e5e5e5;">${phone}</td></tr>` : ""}
            <tr><td style="padding:8px 0;color:#888;">Subject</td><td style="padding:8px 0;color:#e5e5e5;">${subjectLabels[subject] ?? subject}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #222;margin:20px 0;" />
          <p style="color:#888;font-size:12px;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px;">Message</p>
          <p style="color:#e5e5e5;font-size:14px;line-height:1.7;white-space:pre-wrap;">${message}</p>
          <hr style="border:none;border-top:1px solid #222;margin:20px 0;" />
          <p style="color:#555;font-size:11px;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json({ error: "Failed to send message." }, { status: 500 });
  }
}

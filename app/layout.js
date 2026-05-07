import { JetBrains_Mono, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

//pages
import FireFliesBackground from "@/subpages/FireFliesBackground";
import Header from "@/subpages/Header";
import PageAnimation from "@/subpages/PageAnimation";
import StairsAnimation from "@/subpages/StairsAnimation";


const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100","200","300","400","500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Emmanuel Awosika - Software Engineer Portfolio",
  description: "Software Engineer & Creative Problem Solver. I craft digital experiences that combine beautiful design with robust functionality.",
  keywords: ["Emmanuel Awosika", "software Engineer", "React", "Next.js", "Javascript", "Portfolio"],
  authors: [{ name: "Emmanuel Awosika" }],
  creator: "Emmanuel Awosika",
  icons: {
    icon: "/me.png",
    shortcut: "/me.png",
    apple: "/me.png",
  },
  openGraph: {
    title: "Emmanuel Awosika - software Engineer Portfolio",
    description: "software Engineer & Creative Problem Solver. I craft digital experiences that combine beautiful design with robust functionality.",
    type: "website",
    locale: "en_US",
    siteName: "Emmanuel Awosika Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Awosika - software Engineer Portfolio",
    description: "software Engineer & Creative Problem Solver. I craft digital experiences that combine beautiful design with robust functionality.",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} ${geistMono.variable} antialiased`}
      >
        {/* {children} */}
        <Header />
        <FireFliesBackground />
        <StairsAnimation />
        <PageAnimation>
          {children}
        </PageAnimation>
         <Analytics />
         <SpeedInsights />

      </body>
    </html>
  );
}

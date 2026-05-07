import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

// Replace placeholder "#" hrefs with your real profile URLs
const socials = [
  { icon: <FaGithub />,   path: "https://github.com/Emperooid",              label: "GitHub" },
  { icon: <FaLinkedin />, path: "https://linkedin.com/in/emmanuel-awosika",  label: "LinkedIn" },
  { icon: <FaTwitter />,  path: "https://twitter.com/emperooid",             label: "Twitter" },
  { icon: <FaInstagram />,path: "#",                                          label: "Instagram" },
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item) => (
        <Link
          key={item.label}
          href={item.path}
          aria-label={item.label}
          target={item.path !== "#" ? "_blank" : undefined}
          rel={item.path !== "#" ? "noopener noreferrer" : undefined}
          className={iconStyles}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default Socials

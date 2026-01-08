import { icons } from "lucide-react";
import Link from "next/link";
import {FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa';

const socials =[
    {icons: <FaGithub />, path:""},
    {icons: <FaLinkedin />, path:""},
    {icons: <FaTwitter />, path:""},
    {icons: <FaInstagram />, path:""},
    {icons: <FaYoutube />, path:""}
]



const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((items, index) => {
        return(
        <Link key={index} href={items.path} className={iconStyles}>
          {items.icons}
        </Link>
        );
    })}
      
    </div>
  );
};

export default Socials

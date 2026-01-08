"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Links =[
    {
        name:"Home",
        path : "/",
    },
     {
        name:"Services",
        path : "/services",
    },
     {
        name:"Resume",
        path : "/resume",
    },
     {
        name:"Work",
        path : "/work",
    },
     {
        name:"Contact",
        path : "/contact",
    },
];

const Nav = () => {
    const pathname = usePathname();
  return (
   <nav className='flex items-center gap-8'>
    {Links.map((link,index) => {
    return <Link key={index} href={link.path}
    className={`${link.path === pathname && 'text-accent border-b-2 border-accent'} capitalize font-medium hover:text-accent transition-all duration-300`}
    >{link.name}</Link>
})}
   </nav>
  )
}

export default Nav;

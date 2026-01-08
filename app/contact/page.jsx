"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React from "react"

import { motion } from "framer-motion"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectLabel, SelectGroup} from "@/components/ui/select";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";
import { Icon } from "lucide-react"
 
const info  = [
  {
    Icon :<FaPhoneAlt />,
    title: "Phone",
    description: "(+234) 814 364 0561"
  },
  {
    Icon :<FaEnvelope />,
    title: "Email",
    description: "awosikaemmanueldefirst@gmail.com"
  },
  { Icon :<FaMapMarkerAlt />,
    title: "Location",
    description: "Lagos, Nigeria"
  },
]


const Contact = () => {
  return (
    <motion.section
     initial={{ opacity: 0 }}
      animate={{ opacity: 1, 
        transition: { duration: 0.5 , ease: "easeInOut", delay: 2.4 }, }}
      className=  "py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h -[54%] order-2 xl:order-none">
            <form action="">form</form>
          </div>
          <div className="flex-1 flex items-center xl:;justify-end order-1 xl:order-none mb-8 xl:mb-0">Info</div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact

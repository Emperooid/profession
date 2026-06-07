
"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select"
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const info = [
  {
    Icon: <FaPhoneAlt className="text-xl text-accent transition-colors duration-300" />,
    title: "Phone",
    description: "+234 814 364 0561",
    link: "tel:+2348143640561"
  },
  {
    Icon: <FaEnvelope className="text-xl text-accent transition-colors duration-300" />,
    title: "Email",
    description: "awosikaemmanueldefirst@gmail.com",
    link: "mailto:awosikaemmanueldefirst@gmail.com"
  },
  {
    Icon: <FaMapMarkerAlt className="text-xl text-accent transition-colors duration-300" />,
    title: "Location",
    description: "Lagos, Nigeria",
    link: "https://maps.google.com/?q=Lagos,Nigeria"
  },
]

const socialLinks = [
  {
    Icon: <FaGithub className="text-xl" />,
    label: "GitHub",
    url: "https://github.com/Emperooid"
  },
  {
    Icon: <FaLinkedin className="text-xl" />,
    label: "LinkedIn", 
    url: "https://linkedin.com/in/emmanuel-awosika"
  },
  {
    Icon: <FaTwitter className="text-xl" />,
    label: "Twitter",
    url: "https://twitter.com/emperooid"
  }
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: ""
  })
  const [status, setStatus] = useState("idle") // idle | sending | success | error
  const [error, setError] = useState("")

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  const validatePhone = (phone) => /^[\+]?[0-9\s\-\(\)]{10,}$/.test(phone.trim())

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setError("") // Clear error when user starts typing
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    
    const { name, email, phone, message } = formData
    
    // Validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all required fields.")
      return
    }
    if (!validateEmail(email)) {
      setError("Please provide a valid email address.")
      return
    }
    if (phone && !validatePhone(phone)) {
      setError("Please provide a valid phone number.")
      return
    }

    setStatus("sending")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Failed to send message.")
      }

      setStatus("success")
      setFormData({ name: "", email: "", phone: "", subject: "general", message: "" })
      setTimeout(() => setStatus("idle"), 4000)
    } catch (err) {
      setStatus("error")
      setError(err.message || "Failed to send message. Please try again later.")
      setTimeout(() => setStatus("idle"), 4000)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, ease: "easeInOut", delay: 0.2 },
      }}
      className="min-h-screen flex items-start py-8 xl:py-0 xl:items-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto">
            Let&apos;s collaborate and bring your ideas to life.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
          {/* Contact Info Section */}
          <motion.div 
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold">
                Let&apos;s Talk About Your Project
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Send me a message and I&apos;ll respond as soon as possible.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-3">
              {info.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-300 hover:bg-white/10 group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                        {item.Icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-white text-sm group-hover:text-accent transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-white/70 text-xs truncate">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-lg font-semibold mb-3">Connect With Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  >
                    {social.Icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="w-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 md:p-6">
              <h3 className="text-xl font-semibold mb-4 text-center lg:text-left">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div 
                    className="space-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <label className="text-xs font-medium text-white/90 block">
                      Full Name *
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your name"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-accent transition-colors h-10 text-sm"
                      required
                    />
                  </motion.div>

                  <motion.div 
                    className="space-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <label className="text-xs font-medium text-white/90 block">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@example.com"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-accent transition-colors h-10 text-sm"
                      required
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div 
                    className="space-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <label className="text-xs font-medium text-white/90 block">
                      Phone (Optional)
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+234 123 456 7890"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-accent transition-colors h-10 text-sm"
                    />
                  </motion.div>

                  <motion.div 
                    className="space-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <label className="text-xs font-medium text-white/90 block">
                      Subject
                    </label>
                    <Select 
                      value={formData.subject} 
                      onValueChange={(value) => handleInputChange("subject", value)}
                    >
                      <SelectTrigger className="bg-white/5 border-white/20 text-white h-10 focus:border-accent text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-primary border-white/20">
                        <SelectGroup>
                          <SelectLabel className="text-white/70">Choose subject</SelectLabel>
                          <SelectItem value="general" className="text-white hover:bg-white/10 text-sm">General</SelectItem>
                          <SelectItem value="work" className="text-white hover:bg-white/10 text-sm">Job</SelectItem>
                          <SelectItem value="collab" className="text-white hover:bg-white/10 text-sm">Collaboration</SelectItem>
                          <SelectItem value="freelance" className="text-white hover:bg-white/10 text-sm">Freelance</SelectItem>
                          <SelectItem value="other" className="text-white hover:bg-white/10 text-sm">Other</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </motion.div>
                </div>

                <motion.div 
                  className="space-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <label className="text-xs font-medium text-white/90 block">
                    Message *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-accent transition-colors resize-none text-sm"
                    required
                  />
                </motion.div>

                {error && (
                  <motion.div 
                    className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {error}
                  </motion.div>
                )}

                <motion.div 
                  className="flex flex-col sm:flex-row items-center gap-3 pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <Button 
                    type="submit" 
                    disabled={status === "sending"}
                    className="w-full sm:w-auto h-10 px-6 bg-accent hover:bg-accent/90 text-primary font-semibold rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm"
                  >
                    {status === "sending" ? (
                      <>
                        <div className="w-3 h-3 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane className="text-xs" />
                      </>
                    )}
                  </Button>
                  
                  {status === "success" && (
                    <motion.div 
                      className="text-green-400 text-xs font-medium"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                    >
                      ✓ Message sent!
                    </motion.div>
                  )}
                  
                  {status === "error" && (
                    <motion.div 
                      className="text-red-400 text-xs font-medium"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                    >
                      ✗ Failed to send
                    </motion.div>
                  )}
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact

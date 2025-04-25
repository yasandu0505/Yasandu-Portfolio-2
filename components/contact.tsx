"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon, SendIcon } from "lucide-react"
import Link from "next/link"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = "service_yhrbfsw"
      const templateId = "template_uyo9src"
      const publicKey = "pEEOSLXPM24Ko5syi"

      // Send the email using EmailJS
      const result = await emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey)

      console.log("Email sent successfully:", result.text)

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })

      // Reset the form
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Failed to send email:", error)
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-[10%] left-[10%] h-[20rem] w-[20rem] rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <Badge className="bg-purple-600 hover:bg-purple-700">Contact</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Have a project in mind or want to chat? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid w-full gap-6 md:grid-cols-2 lg:gap-12">
          <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-purple-100 dark:border-purple-900/50">
                <CardContent className="p-6">
                  <div className="grid gap-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/20">
                        <MailIcon className="h-5 w-5 text-purple-500" />
                      </div>
                      
                      <div className="text-left">
                      <h3 className="font-medium">Email</h3>
                        <p className="text-sm text-muted-foreground">
                          <Link href="mailto:yasanduyaka2005@gmail.com" className="hover:underline">
                            yasanduyaka2005@gmail.com
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/20">
                        <PhoneIcon className="h-5 w-5 text-purple-500" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-sm text-muted-foreground">
                          <Link href="tel:+94761915021" className="hover:underline">
                            +94 76 191 5021
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/20">
                        <MapPinIcon className="h-5 w-5 text-purple-500" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-medium">Location</h3>
                        <p className="text-sm text-muted-foreground">Dehiwala, SriLanka</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/20">
                        <GithubIcon className="h-5 w-5 text-purple-500" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-medium">GitHub</h3>
                        <p className="text-sm text-muted-foreground">
                          <Link
                            href="https://github.com/yasandu0505"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            github.com/yasandu0505
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/20">
                        <LinkedinIcon className="h-5 w-5 text-purple-500" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-medium">LinkedIn</h3>
                        <p className="text-sm text-muted-foreground">
                          <Link
                            href="https://linkedin.com/in/yasandu-imanjith-17b760278"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            linkedin.com/in/yasandu-imanjith-17b760278
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="grid gap-6 text-left">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[150px]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-purple-600 text-white hover:bg-purple-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <SendIcon className="h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDownIcon, ArrowRightIcon } from "lucide-react"

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] left-[20%] h-[40rem] w-[40rem] rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute -bottom-[10%] right-[20%] h-[30rem] w-[30rem] rounded-full bg-purple-700/10 blur-3xl" />
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden opacity-20">
        <div className="h-[200%] w-[200%] rotate-45 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 bg-clip-text text-transparent">
                Yasandu Imanjith
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-muted-foreground md:text-2xl">
              Building innovative solutions with modern technologies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button size="lg" className="group bg-purple-600 text-white hover:bg-purple-700" onClick={scrollToProjects}>
              View Projects
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToContact}>
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <Button
              variant="ghost"
              size="icon"
              className="animate-bounce rounded-full"
              onClick={() => {
                const aboutSection = document.querySelector("#about")
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              <ArrowDownIcon className="h-6 w-6" />
              <span className="sr-only">Scroll down</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

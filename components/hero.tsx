"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDownIcon, ArrowRightIcon } from "lucide-react"
import { useEffect, useState } from "react"
import AnimatedBackground from "./animated-background"
import TechIcons from "./tech-icons"
import TypewriterEffect from "./typewriter-effect"

export default function Hero() {
  const [showScrollButton, setShowScrollButton] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Get the height of the hero section
      const heroSection = document.getElementById("hero")
      if (!heroSection) return

      const heroHeight = heroSection.offsetHeight

      // Hide the button when scrolled past 30% of the hero section
      if (window.scrollY > heroHeight * 0.3) {
        setShowScrollButton(false)
      } else {
        setShowScrollButton(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  const taglines = [
    "Building innovative solutions with modern technologies",
    "Crafting elegant code for complex problems",
    "Turning ideas into powerful applications",
    "Creating seamless digital experiences",
  ]

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden py-20"
    >
      {/* CSS-based animated background */}
      <AnimatedBackground />

      {/* Floating tech icons */}
      <TechIcons />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 bg-clip-text text-transparent">
                Yasandu Imanjith
              </span>
            </h1>
            <TypewriterEffect
              text={taglines}
              className="mx-auto h-8 max-w-[700px] text-xl text-muted-foreground md:h-10 md:text-2xl"
              typingSpeed={70}
              deletingSpeed={30}
              delayBetweenTexts={2000}
            />
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
        </div>
      </div>

      {/* Scroll down button with conditional rendering */}
      {showScrollButton && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10"
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
      )}
    </section>
  )
}

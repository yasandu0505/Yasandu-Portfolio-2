"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedElement {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export default function AnimatedBackground() {
  const [elements, setElements] = useState<AnimatedElement[]>([])

  useEffect(() => {
    // Generate elements based on screen size
    const count = window.innerWidth < 768 ? 15 : 25
    const generatedElements = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }))

    setElements(generatedElements)

    // Regenerate on resize
    const handleResize = () => {
      const newCount = window.innerWidth < 768 ? 15 : 25
      const newElements = Array.from({ length: newCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
      }))
      setElements(newElements)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated circles */}
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute rounded-full bg-purple-500/10"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            width: `${el.size}px`,
            height: `${el.size}px`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: el.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: el.delay,
          }}
        />
      ))}

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.purple.500/5)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.purple.500/5)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Gradient overlays */}
      <div className="absolute -top-[10%] left-[20%] h-[40rem] w-[40rem] rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute -bottom-[10%] right-[20%] h-[30rem] w-[30rem] rounded-full bg-purple-700/10 blur-3xl" />
    </div>
  )
}

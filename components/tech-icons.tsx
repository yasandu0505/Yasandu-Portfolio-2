"use client"

import type React from "react"

import { motion } from "framer-motion"
import { CodeIcon, DatabaseIcon, GlobeIcon, LayoutIcon, ServerIcon, SettingsIcon } from "lucide-react"
import { useEffect, useState } from "react"

const icons = [
  { Icon: CodeIcon, delay: 0 },
  { Icon: DatabaseIcon, delay: 1 },
  { Icon: GlobeIcon, delay: 2 },
  { Icon: LayoutIcon, delay: 3 },
  { Icon: ServerIcon, delay: 4 },
  { Icon: SettingsIcon, delay: 5 },
]

export default function TechIcons() {
  // Use state to store the generated positions
  const [iconElements, setIconElements] = useState<React.ReactNode[]>([])

  // Generate the icons only on the client side
  useEffect(() => {
    const generatedIcons = [...icons, ...icons].map(({ Icon, delay }, index) => {
      const size = Math.random() * 30 + (index < 6 ? 20 : 15)
      const left = Math.random() * 80 + 10
      const top = Math.random() * 80 + 10

      return (
        <motion.div
          key={index}
          className="absolute text-purple-500/20"
          style={{
            left: `${left}%`,
            top: `${top}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            rotate: [0, index < 6 ? 360 : -360],
            scale: [1, index < 6 ? 1.2 : 0.8, index < 6 ? 0.8 : 1.2, 1],
          }}
          transition={{
            duration: 20 + index * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: delay * (index < 6 ? 2 : 1.5),
          }}
        >
          <Icon size={size} />
        </motion.div>
      )
    })

    setIconElements(generatedIcons)
  }, [])

  return <div className="absolute inset-0 z-5 overflow-hidden">{iconElements}</div>
}

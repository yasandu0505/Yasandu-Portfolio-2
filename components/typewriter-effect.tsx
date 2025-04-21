"use client"

import { useState, useEffect } from "react"

interface TypewriterEffectProps {
  text: string | string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenTexts?: number
}

export default function TypewriterEffect({
  text,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
}: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  // Convert single string to array for consistent handling
  const textArray = Array.isArray(text) ? text : [text]

  useEffect(() => {
    if (textArray.length === 0) return

    let timeout: NodeJS.Timeout

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false)
        setIsDeleting(true)
      }, delayBetweenTexts)
      return () => clearTimeout(timeout)
    }

    const currentText = textArray[currentIndex]

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % textArray.length)
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length - 1))
        }, deletingSpeed)
      }
    } else {
      if (displayText === currentText) {
        // If there's only one text, don't delete it
        if (textArray.length === 1) return

        setIsWaiting(true)
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1))
        }, typingSpeed)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, isWaiting, textArray, typingSpeed, deletingSpeed, delayBetweenTexts])

  return (
    <div className={className}>
      <span>{displayText}</span>
      <span className="animate-pulse">|</span>
    </div>
  )
}

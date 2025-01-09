'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedTextProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function AnimatedText({ children, delay = 0, className }: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.48, 0.15, 0.25, 0.96],
      }}
      className={className ?? "text-4xl font-bold text-white mb-4"}
    >
      {children}
    </motion.div>
  )
}


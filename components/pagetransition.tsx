"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ y: -100, opacity: 0 }}   // starts above screen
        animate={{ y: 0, opacity: 1 }}      // slides into place
        exit={{ y: 100, opacity: 0 }}       // slides down when leaving
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{ delay: 1.4, duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[998] flex items-center justify-center bg-black"
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative"
      >
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -inset-10 rounded-full bg-orange-500/30 blur-3xl"
        />

        <Image
          src="/logo.png"
          alt="Pizza Fire"
          width={160}
          height={160}
          priority
          className="relative"
        />
      </motion.div>
    </motion.div>
  );
}
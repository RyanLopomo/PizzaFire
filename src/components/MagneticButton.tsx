"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  href: string;
  className?: string;
};

export function MagneticButton({
  children,
  href,
  className,
}: MagneticButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover={{
        scale: 1.06,
        y: -2,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 18,
      }}
      className={className}
    >
      {children}
    </motion.a>
  );
}
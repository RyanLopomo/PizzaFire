"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 40 });

  const [isFire, setIsFire] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // determine if hovering an interactive element
      const target = e.target as Element | null;
      if (target) {
        setIsFire(Boolean(target.closest("[data-contact-cta]")));
      } else {
        setIsFire(false);
      }
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[1000] hidden lg:block"
    >
      <span className={isFire ? "cursor-fire" : "cursor-ring"} />
    </motion.div>
  );
}

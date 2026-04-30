"use client";

import { siteConfig } from "../data/site";
import { Camera, MessageCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  const { scrollY } = useScroll();

  const bgY = useTransform(scrollY, [0, 650], [0, 110]);
  const textY = useTransform(scrollY, [0, 650], [0, -45]);
  const smokeY = useTransform(scrollY, [0, 650], [0, 70]);
  const lineScale = useTransform(scrollY, [0, 300], [1, 0.75]);

  return (
    <section
      id="inicio"
      className="relative flex min-h-[720px] items-center overflow-hidden pt-20"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-110 bg-[url('/hero-bg.jpg')] bg-cover bg-center"
      />

      <motion.div
        style={{ y: smokeY }}
        className="absolute inset-0 bg-[url('/smoke.jpg')] bg-cover bg-center opacity-[0.16]"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(249,115,22,0.22),transparent_36%)]" />

      <motion.div
        style={{ scaleX: lineScale }}
        className="absolute left-0 top-[73px] h-px w-full origin-center bg-gradient-to-r from-transparent via-orange-400/35 to-transparent"
      />

      <div className="absolute left-20 top-[73px] hidden h-px w-24 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-70 lg:block" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-20">
        <motion.div style={{ y: textY }} className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4 text-xs font-black uppercase tracking-[0.48em] text-orange-400"
          >
            Forno. Fogo. Paixão.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-serif text-6xl leading-[0.92] md:text-8xl"
          >
            Pizza que{" "}
            <span className="block bg-gradient-to-r from-[#6f5730] via-[#f8c56b] to-orange-400 bg-clip-text text-transparent">
              acende!
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-7 h-px w-28 origin-left bg-gradient-to-r from-orange-500 via-amber-300 to-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-7 max-w-xl text-lg leading-8 text-white/65"
          >
            Massas artesanais, ingredientes selecionados e combinações criadas
            para explodir o seu paladar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <MagneticButton
              href={siteConfig.whatsapp}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 px-7 py-4 text-sm font-black uppercase tracking-wider text-white shadow-[0_0_36px_rgba(249,115,22,0.42)]"
            >
              <MessageCircle size={18} />
              Pedir no WhatsApp
            </MagneticButton>

            <MagneticButton
              href={siteConfig.instagram}
              className="flex items-center gap-2 rounded-xl border border-orange-400/40 bg-black/35 px-7 py-4 text-sm font-black uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/10"
            >
              <Camera size={18} />
              Nosso Instagram
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
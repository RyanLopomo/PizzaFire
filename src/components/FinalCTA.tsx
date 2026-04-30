"use client";

import { motion } from "framer-motion";
import { siteConfig } from "../data/site";

export function FinalCTA() {
  return (
    <section className="relative py-28 text-center overflow-hidden">
      {/* GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(249,115,22,0.2),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-3xl mx-auto px-5"
      >
        <h2 className="text-5xl font-serif leading-tight">
          Pronto pra provar a melhor pizza da sua vida?
        </h2>

        <p className="mt-6 text-white/60">
          Clique abaixo e peça agora no WhatsApp.
        </p>

        <a
          href={siteConfig.whatsapp}
          target="_blank"
          className="inline-block mt-8 bg-orange-500 px-8 py-5 rounded-xl text-sm uppercase font-bold tracking-wider shadow-[0_0_40px_rgba(249,115,22,0.5)] hover:scale-105 transition"
        >
          Pedir agora
        </a>
      </motion.div>
    </section>
  );
}
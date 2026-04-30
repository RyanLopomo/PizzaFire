"use client";

import Image from "next/image";
import { pizzas, siteConfig } from "../data/site";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { motion } from "framer-motion";

export function MenuHighlights() {
  return (
    <section
      id="cardapio"
      className="relative mx-auto max-w-7xl px-5 py-24 overflow-hidden"
    >
      {/* GLOW DE FUNDO */}
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

      {/* HEADER */}
      <Reveal>
        <div className="relative text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-orange-400">
            Destaques do cardápio
          </p>

          <h2 className="mt-3 font-serif text-5xl">
            As mais pedidas
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-white/55">
            Sabores selecionados para mostrar o melhor da Pizza Fire.
          </p>
        </div>
      </Reveal>

      {/* GRID */}
      <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {pizzas.map((pizza, index) => (
          <Reveal key={pizza.name} delay={index * 0.1}>
            <motion.article
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-2xl backdrop-blur-xl"
            >
              {/* OVERLAY GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-t from-orange-500/10 to-transparent" />

              {/* IMAGEM */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={pizza.image}
                  alt={pizza.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* GRADIENTE */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              {/* CONTEÚDO */}
              <div className="p-6">
                <h3 className="text-lg font-black uppercase tracking-tight">
                  {pizza.name}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-white/55">
                  {pizza.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-xl font-black text-orange-400">
                    {pizza.price}
                  </p>

                  <MagneticButton
                    href={siteConfig.whatsapp}
                    className="rounded-full border border-orange-400/40 px-4 py-2 text-xs font-black uppercase tracking-wider transition hover:bg-orange-500"
                  >
                    Pedir
                  </MagneticButton>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>

      {/* BOTÃO FINAL */}
      <Reveal delay={0.3}>
        <div className="relative mt-12 text-center">
          <MagneticButton
            href={siteConfig.whatsapp}
            className="inline-flex rounded-full border border-orange-400/50 px-8 py-4 text-sm font-black uppercase tracking-wider transition hover:bg-orange-500"
          >
            Ver cardápio completo
          </MagneticButton>
        </div>
      </Reveal>
    </section>
  );
}
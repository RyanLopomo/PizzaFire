"use client";

import Image from "next/image";
import { siteConfig } from "../data/site";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const { scrollY } = useScroll();
  const [open, setOpen] = useState(false);

  const bg = useTransform(
    scrollY,
    [0, 90],
    ["rgba(0,0,0,0.22)", "rgba(0,0,0,0.82)"]
  );

  const border = useTransform(
    scrollY,
    [0, 90],
    ["rgba(255,255,255,0.06)", "rgba(249,115,22,0.18)"]
  );

  return (
    <>
      <motion.header
        style={{
          backgroundColor: bg,
          borderColor: border,
        }}
        className="fixed left-0 top-0 z-50 w-full border-b backdrop-blur-2xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2">
          <a href="#inicio" className="group">
            <Image
              src="/logo.png"
              alt="Pizza Fire"
              width={76}
              height={76}
              priority
              className="h-14 w-auto transition duration-300 group-hover:scale-105"
            />
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative text-[11px] font-bold uppercase tracking-[0.22em] text-white/55 transition hover:text-orange-400"
              >
                {item.label}

                <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-orange-400 to-transparent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href={siteConfig.whatsapp}
            target="_blank"
            className="hidden rounded-full border border-orange-400/45 bg-black/20 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.18em] text-white transition hover:border-orange-400 hover:bg-orange-500/90 hover:shadow-[0_0_28px_rgba(249,115,22,0.35)] lg:block"
          >
            Fazer pedido
          </a>

          <button
            onClick={() => setOpen(true)}
            className="rounded-full border border-white/10 p-2 text-white lg:hidden"
            aria-label="Abrir menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      <MobileMenu isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
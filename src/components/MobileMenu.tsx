"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

export function MobileMenu({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl"
        >
          {/* BOTÃO FECHAR */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 text-white"
          >
            <X size={28} />
          </button>

          {/* LINKS */}
          <div className="flex h-full flex-col items-center justify-center gap-8 text-xl uppercase tracking-widest">
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={onClose}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-white/70 hover:text-orange-400 transition"
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
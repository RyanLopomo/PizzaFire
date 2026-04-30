"use client";

import { motion } from "framer-motion";
import { siteConfig } from "../data/site";
import { MessageCircle } from "lucide-react";

const savory = [
  ["A Moda da Casa", "Mussarela, presunto, ervilha, palmito, tomate picado e bacon.", "R$60", "R$40"],
  ["Alho e Óleo", "Mussarela, tomate e alho frito.", "R$50", "R$30"],
  ["Atum Fire", "Mussarela, atum, cebola, bacon e catupiry.", "R$62", "R$42"],
  ["Baiana", "Mussarela, calabresa, ovos, frango, cebola, milho e catupiry.", "R$62", "R$42"],
  ["Brócolis Especial", "Mussarela, brócolis, bacon, alho frito, catupiry ou cheddar.", "R$64", "R$44"],
  ["Calabresa Fire", "Mussarela, calabresa ralada, pimenta calabresa, ovos e cebola.", "R$62", "R$42"],
  ["Frango com Catupiry", "Mussarela, frango, cebola, bacon, catupiry ou cheddar.", "R$64", "R$44"],
  ["Pizza Fire", "Mussarela, calabresa, presunto, palmito, tomate, milho, ervilha, ovo, cebola, catupiry e bacon.", "R$62", "R$42"],
];

const countries = [
  ["Americana", "Mussarela, calabresa, presunto, tomate picado e bacon.", "R$60", "R$40"],
  ["Brasileirinha", "Mussarela, calabresa, milho, ervilha e cebola.", "R$62", "R$42"],
  ["Chilena", "Mussarela, frango, bacon, catupiry e tomate.", "R$62", "R$42"],
  ["Espanhola", "Mussarela, calabresa, presunto, milho, ervilha, ovos, cebola, catupiry e bacon.", "R$58", "R$40"],
  ["Francesa", "Mussarela, frango, ervilha, milho, catupiry e bacon.", "R$60", "R$40"],
  ["Portuguesa", "Mussarela, presunto, ovos, cebola e pimentão.", "R$58", "R$48"],
];

const sweets = [
  ["Brigadeiro", "Chocolate ao leite e granulado.", "R$55", "R$38"],
  ["Prestígio", "Chocolate ao leite e coco ralado.", "R$55", "R$38"],
  ["Sonho de Valsa", "Chocolate ao leite, Sonho de Valsa e leite ninho.", "R$55", "R$38"],
  ["Ouro Branco", "Chocolate ao leite, Ouro Branco e leite ninho.", "R$55", "R$38"],
  ["Óreo", "Chocolate ao leite, Oreo e leite ninho.", "R$55", "R$38"],
  ["Kit Kat", "Chocolate ao leite, KitKat e leite ninho.", "R$55", "R$38"],
  ["Ninho com Morango", "Creme de ninho e morango.", "R$55", "R$38"],
  ["Ovomaltine", "Creme crocante de Ovomaltine e gotas de chocolate.", "R$55", "R$38"],
];

const borders = [
  ["Catupiry", "R$12,00"],
  ["Cheddar", "R$12,00"],
  ["Cream Cheese", "R$14,00"],
  ["Aperitivo Parmesão", "R$10,00"],
  ["Calabresa com Catupiry", "R$20,00"],
  ["Frango com Catupiry", "R$20,00"],
  ["Chocolate ao Leite", "R$18,00"],
  ["Chocolate Branco", "R$18,00"],
];

function MenuCard({
  title,
  items,
}: {
  title: string;
  items: string[][];
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className="rounded-3xl border border-orange-400/25 bg-black/55 p-6 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
    >
      <h3 className="mb-6 border-b border-orange-400/20 pb-4 font-serif text-3xl text-[#f8c56b]">
        {title}
      </h3>

      <div className="space-y-5">
        {items.map((item) => (
          <div key={item[0]}>
            <div className="flex items-end justify-between gap-3">
              <h4 className="text-sm font-black uppercase tracking-[0.16em] text-orange-300">
                {item[0]}
              </h4>

              <div className="hidden flex-1 border-b border-dotted border-orange-400/25 md:block" />

              <div className="flex shrink-0 gap-3 text-sm font-black text-[#f8c56b]">
                <span>{item[2]}</span>
                <span className="text-white/25">|</span>
                <span>{item[3]}</span>
              </div>
            </div>

            <p className="mt-1 text-sm leading-5 text-white/55">{item[1]}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function PremiumMenu() {
  return (
    <section id="menu-premium" className="relative overflow-hidden px-5 py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.16),transparent_35%)]" />
      <div className="absolute inset-0 bg-[url('/smoke.jpg')] bg-cover bg-center opacity-10" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-400">
            Cardápio completo
          </p>
          <h2 className="mt-3 font-serif text-5xl md:text-6xl">
            Escolha seu sabor
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/55">
            Valores em tamanho normal e broto. Para pizzas meio a meio, prevalece o maior valor.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <MenuCard title="Pizzas Salgadas" items={savory} />
          <MenuCard title="Fire Países" items={countries} />
          <MenuCard title="Pizzas Doces" items={sweets} />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-orange-400/25 bg-black/55 p-6 backdrop-blur-xl">
            <h3 className="mb-6 font-serif text-3xl text-[#f8c56b]">
              Bordas Recheadas
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
              {borders.map(([name, price]) => (
                <div key={name} className="flex justify-between border-b border-orange-400/10 pb-3">
                  <span className="text-sm uppercase tracking-[0.15em] text-white/75">
                    {name}
                  </span>
                  <span className="font-black text-orange-300">{price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-orange-400/25 bg-orange-500/10 p-6 backdrop-blur-xl">
            <h3 className="mb-4 font-serif text-3xl text-[#f8c56b]">
              Importante
            </h3>

            <ul className="space-y-3 text-sm leading-6 text-white/70">
              <li>• Pizzas meio a meio prevalece o maior valor.</li>
              <li>• Todas as pizzas acompanham molho, azeitona com caroço e orégano.</li>
              <li>• Acréscimo de ingredientes será cobrado à parte.</li>
            </ul>

            <a
              href={siteConfig.whatsapp}
              target="_blank"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 px-6 py-4 text-sm font-black uppercase tracking-wider"
            >
              <MessageCircle size={18} />
              Pedir agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
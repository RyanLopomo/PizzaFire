import Image from "next/image";
import { siteConfig } from "../data/site";

export function About() {
  return (
    <section id="sobre" className="relative border-y border-white/10 bg-[#090909] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(249,115,22,0.12),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-orange-400">
            Sobre nós
          </p>

          <h2 className="mt-4 text-5xl font-serif leading-tight">
            Paixão que virou pizza.
          </h2>

          <p className="mt-6 text-lg text-white/65">
            A Pizza Fire nasceu da paixão por pizzas artesanais e do desejo de
            criar combinações únicas e marcantes.
          </p>

          <p className="mt-4 text-white/55">
            Cada detalhe é pensado para entregar uma experiência absurda.
          </p>

          <a
            href={siteConfig.whatsapp}
            target="_blank"
            className="mt-8 inline-block border border-orange-400/50 px-7 py-4 rounded-full text-sm uppercase hover:bg-orange-500 transition"
          >
            Fale Conosco
          </a>
        </div>

        <div className="relative h-[420px] rounded-3xl overflow-hidden border border-orange-400/20">
          <Image src="/pizza-box.jpg" alt="Pizza Box" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
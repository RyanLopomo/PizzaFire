import { Diamond, Flame, Pizza, Star } from "lucide-react";

const features = [
  {
    title: "Forno à lenha",
    text: "Sabor defumado que faz diferença.",
    icon: Flame,
  },
  {
    title: "Ingredientes premium",
    text: "Selecionamos apenas o melhor.",
    icon: Diamond,
  },
  {
    title: "Massa artesanal",
    text: "Fermentação natural todos os dias.",
    icon: Pizza,
  },
  {
    title: "Combinações únicas",
    text: "Receitas exclusivas da casa.",
    icon: Star,
  },
];

export function Features() {
  return (
    <section className="relative z-20 px-5 py-16">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-orange-400/25 bg-black/45 backdrop-blur-xl md:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="group relative border-b border-orange-400/10 p-7 md:border-b-0 md:border-r last:border-r-0"
            >
              <div className="mb-5 text-orange-400">
                <Icon size={42} strokeWidth={1.4} />
              </div>

              <h3 className="text-xs font-black uppercase tracking-[0.25em] text-white">
                {feature.title}
              </h3>

              <p className="mt-3 max-w-44 text-sm leading-6 text-white/55">
                {feature.text}
              </p>

              <div className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-orange-400 to-transparent transition duration-500 group-hover:scale-x-100" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
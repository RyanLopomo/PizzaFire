import { Star } from "lucide-react";

const feedbacks = [
  "Uma das melhores pizzas da região.",
  "Muito recheio e sabor absurdo.",
  "Entrega rápida e qualidade top.",
];

export function Feedbacks() {
  return (
    <section className="bg-[#080808] py-20 px-5 border-y border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-orange-400">
          Clientes
        </p>

        <h2 className="text-5xl font-serif mt-3">Feedbacks</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {feedbacks.map((text, i) => (
            <div key={i} className="p-6 rounded-2xl border border-orange-400/20 bg-white/[0.04]">
              <div className="flex justify-center text-orange-400 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-white/60">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
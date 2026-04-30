import Image from "next/image";
import { gallery, siteConfig } from "../data/site";
import { Camera } from "lucide-react";

export function Gallery() {
  return (
    <section id="galeria" className="mx-auto max-w-7xl px-5 py-24">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-orange-400">
          Instagram
        </p>
        <h2 className="text-5xl font-serif mt-3">Galeria</h2>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
        {gallery.map((img, i) => (
          <a
            key={i}
            href={siteConfig.instagram}
            target="_blank"
            className="relative h-44 overflow-hidden rounded-2xl border border-white/10 group"
          >
            <Image
              src={img}
              alt="Galeria"
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
          </a>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href={siteConfig.instagram}
          target="_blank"
          className="inline-flex items-center gap-2 border border-orange-400/50 px-6 py-3 rounded-full text-sm uppercase hover:bg-orange-500 transition"
        >
          <Camera size={16} />
          Ver Instagram
        </a>
      </div>
    </section>
  );
}
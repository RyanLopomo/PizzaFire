"use client";

import { useEffect, useState } from "react";
import { Camera } from "lucide-react";
import { siteConfig } from "../data/site";

type InstagramPost = {
  id: string;
  image?: string;
  link: string;
  caption?: string;
};

type InstagramResponse = { ok: boolean; posts?: InstagramPost[] };

export function Gallery() {
  const [posts, setPosts] = useState<InstagramPost[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/instagram", { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error("Instagram indisponível");
        return (await response.json()) as InstagramResponse;
      })
      .then((data) => {
        const validPosts = data.posts?.filter((post) => post.id && post.link) ?? [];
        setPosts(data.ok ? validPosts.slice(0, 3) : []);
      })
      .catch(() => {
        if (!controller.signal.aborted) setPosts([]);
      });

    return () => controller.abort();
  }, []);

  return (
    <section id="galeria" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-orange-400">Instagram</p>
        <h2 className="mt-3 font-serif text-5xl">Galeria</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/50">
          Um pouco do que sai do nosso forno, direto do Instagram.
        </p>
      </div>

      {posts === null ? (
        <div aria-label="Carregando publicações do Instagram" className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3 sm:items-center sm:gap-6">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className={`aspect-square animate-pulse rounded-2xl bg-white/[0.06] ${item === 1 ? "sm:scale-105" : "sm:scale-[0.88]"}`}
            />
          ))}
        </div>
      ) : posts.length ? (
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 items-center gap-5 sm:grid-cols-3 sm:gap-6">
          {posts.map((post, index) => {
            return (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir publicação ${index + 1} no Instagram`}
                className={`group relative block aspect-square overflow-hidden rounded-2xl bg-neutral-950 outline-none transition duration-500 hover:z-10 hover:scale-[1.025] focus-visible:ring-2 focus-visible:ring-orange-400 ${index === 0 ? "sm:col-start-2 sm:row-start-1 sm:scale-105 sm:hover:scale-[1.08]" : index === 1 ? "sm:col-start-1 sm:row-start-1 sm:scale-[0.88] sm:hover:scale-[0.92]" : "sm:col-start-3 sm:row-start-1 sm:scale-[0.88] sm:hover:scale-[0.92]"}`}
              >
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.caption?.trim() || "Publicação recente da Pizza Fire no Instagram"}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                ) : (
                  <span className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-neutral-900 to-black text-white/70">
                    <Camera className="text-orange-400" size={28} strokeWidth={1.5} />
                    <span className="text-xs uppercase tracking-[0.2em]">Ver publicação</span>
                  </span>
                )}
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute bottom-4 right-4 translate-y-2 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Camera size={15} /> Ver no Instagram
                </span>
              </a>
            );
          })}
        </div>
      ) : (
        <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center rounded-2xl px-6 py-12 text-center">
          <Camera className="text-orange-400" size={25} strokeWidth={1.5} />
          <p className="mt-4 text-sm leading-6 text-white/60">
            As publicações não estão disponíveis agora. Visite nosso perfil para acompanhar as novidades.
          </p>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-orange-400/50 px-6 py-3 text-xs uppercase tracking-wider transition-colors hover:bg-orange-500/15"
          >
            <Camera size={15} />
            Ver Instagram
          </a>
        </div>
      )}

      {posts?.length ? (
        <div className="mt-12 text-center">
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-orange-300"
          >
            <Camera size={16} />
            Acompanhe no Instagram
          </a>
        </div>
      ) : null}
    </section>
  );
}

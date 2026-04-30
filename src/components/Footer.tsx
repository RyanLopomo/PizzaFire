import Image from "next/image";
import { siteConfig } from "../data/site";
import { Clock, Phone, Camera, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="bg-black py-12 px-5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        <Image src="/logo.png" alt="Logo" width={100} height={100} />

        <div>
          <h3 className="text-orange-400 mb-4 text-sm uppercase">Contato</h3>
          <p className="flex gap-2 text-white/65">
            <Phone size={16} /> {siteConfig.phone1}
          </p>
          <p className="mt-2 flex gap-2 text-white/65">
            <Phone size={16} /> {siteConfig.phone2}
          </p>
        </div>

        <div>
          <h3 className="text-orange-400 mb-4 text-sm uppercase">Horários</h3>
          {siteConfig.hours.map((h) => (
            <p key={h} className="flex gap-2 text-white/65 mt-2">
              <Clock size={16} /> {h}
            </p>
          ))}
        </div>

        <div>
          <h3 className="text-orange-400 mb-4 text-sm uppercase">Redes</h3>
          <div className="flex gap-4">
            <a href={siteConfig.instagram} target="_blank">
              <Camera />
            </a>
            <a href={siteConfig.whatsapp} target="_blank">
              <MessageCircle />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center mt-10 text-white/40 text-sm">
        © 2025 Pizza Fire
      </p>
    </footer>
  );
}
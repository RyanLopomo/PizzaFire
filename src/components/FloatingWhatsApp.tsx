import { MessageCircle } from "lucide-react";
import { siteConfig } from "../data/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.whatsapp}
      target="_blank"
      className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:scale-110 transition"
    >
      <MessageCircle size={28} />
    </a>
  );
}
import React from 'react';
import { createWhatsAppLink } from '../utils/whatsapp';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside className="fixed bottom-6 right-6 z-40 flex items-center gap-2 group">
      {/* Tooltip */}
      <span className="hidden md:inline-block bg-[#221f1d]/95 backdrop-blur-md text-[#e9e1dd] text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-[#f3be6a]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        ¿Mesa o evento? Escríbenos
      </span>

      {/* Floating Button */}
      <a
        href={createWhatsAppLink("Hola, quisiera más información sobre D' Leon Gourmet")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir a WhatsApp +57 321 538 0515"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.6),0_0_16px_rgba(37,211,102,0.5)] transform hover:scale-110 active:scale-95 transition-all duration-300 relative animate-whatsapp-pulse"
      >
        <MessageSquare className="w-7 h-7 text-white fill-white" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#f3be6a] rounded-full animate-ping" />
      </a>
    </aside>
  );
};

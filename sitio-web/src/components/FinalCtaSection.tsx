import React from 'react';
import { CalendarCheck } from 'lucide-react';
import { ScreenTab } from './Navbar';

interface FinalCtaSectionProps {
  onNavigate: (tab: ScreenTab) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onNavigate }) => {
  return (
    <section className="w-full bg-[#100e0c] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-[#4f4538]/20">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(243,190,106,0.15)_0%,_transparent_75%)]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <span className="text-xs uppercase tracking-[0.25em] text-[#f3be6a] font-semibold mb-3">
          Reserva Inmediata
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl text-[#e9e1dd] mb-6 max-w-2xl font-bold leading-tight">
          ¿Listo para vivir una experiencia gourmet?
        </h2>

        <p className="text-base sm:text-lg text-[#d3c4b2] mb-10 max-w-xl font-light leading-relaxed">
          Asegura un momento culinario memorable en Aguachica. Tu mesa o evento está a solo un clic o mensaje de distancia.
        </p>

        <button
          onClick={() => onNavigate('reserva')}
          className="inline-flex items-center justify-center gap-3 bg-[#E8B85A] hover:bg-[#f0bf60] text-[#161311] font-bold text-base sm:text-lg px-12 py-5 rounded-full shadow-[0_0_36px_rgba(232,184,90,0.5)] hover:shadow-[0_0_54px_rgba(232,184,90,0.8)] transition-all transform hover:scale-105 active:scale-95"
        >
          <CalendarCheck className="w-6 h-6 text-[#161311]" />
          <span>Reservar ahora</span>
        </button>
      </div>
    </section>
  );
};

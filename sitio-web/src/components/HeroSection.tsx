import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MessageSquare, Calendar, Sparkles, UtensilsCrossed, HeartHandshake } from 'lucide-react';
import { ScreenTab } from './Navbar';

interface HeroSectionProps {
  onNavigate: (tab: ScreenTab) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#100e0c]">
      {/* Background Visual Layers */}
      <div className="absolute inset-0 z-0">
        <img
          src={RESTAURANT_INFO.heroImage}
          alt="Plato Gourmet D' Leon"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform filter brightness-75 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#100e0c] via-[#100e0c]/85 to-[#100e0c]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(243,190,106,0.18)_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center mt-4 sm:mt-6">
        
        {/* Tag / Pretitle */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2d2927]/80 border border-[#f3be6a]/30 backdrop-blur-md shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-[#f3be6a] animate-ping" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f3be6a]">
            COCINA GOURMET
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#e9e1dd] leading-tight max-w-4xl tracking-tight font-bold">
          Sabores gourmet que hacen{' '}
          <span className="text-[#f3be6a] italic font-serif">inolvidable</span> cada momento
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-[#d3c4b2] max-w-2xl mt-4 sm:mt-6 mb-8 sm:mb-10 font-light leading-relaxed">
          Restaurante y catering para todo tipo de eventos en Aguachica, Cesar
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
          <button
            onClick={() => onNavigate('reserva')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#f3be6a] hover:bg-[#f0bf60] text-[#432c00] font-semibold text-base px-8 py-4 rounded-full shadow-[0_0_28px_rgba(243,190,106,0.45)] hover:shadow-[0_0_40px_rgba(243,190,106,0.7)] transition-all transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <Calendar className="w-5 h-5 text-[#432c00]" />
            <span>Reservar mi mesa</span>
          </button>

          <button
            onClick={() => onNavigate('eventos')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#2d2927]/80 hover:bg-[#383431] text-[#f3be6a] border border-[#f3be6a]/30 font-semibold text-base px-8 py-4 rounded-full backdrop-blur-md shadow-md transition-all transform hover:scale-[1.02]"
          >
            <Sparkles className="w-5 h-5 text-[#f3be6a]" />
            <span>Cotizar mi evento</span>
          </button>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-[#4f4538]/20 w-full max-w-3xl flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2 px-3 py-1 text-[#d3c4b2] text-sm font-medium">
            <UtensilsCrossed className="w-4 h-4 text-[#f3be6a]" />
            <span>Sabor gourmet</span>
          </div>

          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#4f4538]" />

          <div className="flex items-center gap-2 px-3 py-1 text-[#d3c4b2] text-sm font-medium">
            <Sparkles className="w-4 h-4 text-[#f3be6a]" />
            <span>Ambiente acogedor</span>
          </div>

          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#4f4538]" />

          <div className="flex items-center gap-2 px-3 py-1 text-[#d3c4b2] text-sm font-medium">
            <HeartHandshake className="w-4 h-4 text-[#f3be6a]" />
            <span>Eventos a tu medida</span>
          </div>
        </div>

      </div>
    </section>
  );
};

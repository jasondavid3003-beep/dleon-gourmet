import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { CheckCircle, Sparkles } from 'lucide-react';
import { ScreenTab } from './Navbar';

interface CateringSectionProps {
  onNavigate: (tab: ScreenTab) => void;
}

export const CateringSection: React.FC<CateringSectionProps> = ({ onNavigate }) => {
  const events = [
    {
      title: 'Quinceañeros',
      image: RESTAURANT_INFO.waiterImage,
      description: 'Celebraciones inolvidables con decoración cuidada, menús juveniles y de gala, y atención impecable en cada mesa.',
      feature: 'Menú buffet o servido a la mesa',
    },
    {
      title: 'Fiestas privadas',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2rERWMGABMG6tP-W1RTkVOp6fhwzKN9chtosjra55K6Gxy0N7hDniUi24zZkLQXKxf-U80RGv8oQhd9tYaF08zpWMkamuTkxo2-OKOL0a-VJS7u4TzPZVHebLwjaBCNEcpLK7D6TnwrjsEvzM80PVWGwWeBSVFOnm_OhYNUv-9sAfewa-O4fZ268NxMWYyqB3_6veWbkcoHKWr-ZJ-RrWCoftLmYfs1HIjf0Oxkec0GRiMctHDtFC',
      description: 'Aniversarios, cumpleaños y reuniones familiares con salón reservado en exclusiva o servicio gourmet en tu locación.',
      feature: 'Salón climatizado y reservado',
    },
    {
      title: 'Eventos de empresas',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASLfU_DloaD5-bnaFHwTJvH5ab_iJsH0uSrwLHj8krGYXcEC7djt79sUF9bsoKh6Ot0NQTmCkXoYWjCjng2ny6a_xTl18YRLZnN6QljgUwb7zEGeCptyqjfzumwiY5meiqevkFW9bb38FV--xhc3z9OaO3JbAYDuefj0h1jtzkDPBtpFSLa3i3LdGyWDfYfpGNCoAkZ7xJRhaJ9tfThn279GerL8rWXMD1Ua47FDXwIVAdPHOfdNqv',
      description: 'Desayunos ejecutivos, cenas de fin de año, agasajos y cócteles corporativos con la sobriedad y distinción que tu marca merece.',
      feature: 'Facturación formal & protocolo',
    },
  ];

  return (
    <section className="w-full bg-[#1e1b19] py-20 px-4 sm:px-6 lg:px-8 relative border-t border-[#4f4538]/20" id="eventos">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#f3be6a] font-semibold">
            Catering Exclusivo
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#e9e1dd] font-bold mt-2 mb-4">
            Tu evento, con sabor gourmet
          </h2>
          <p className="text-sm sm:text-base text-[#d3c4b2] leading-relaxed">
            Atendemos todo tipo de eventos: quinceañeros, fiestas privadas y eventos de empresas con la más alta distinción gastronómica.
          </p>
        </div>

        {/* 3 Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {events.map((ev, index) => (
            <div
              key={index}
              className="bg-[#221f1d] rounded-2xl overflow-hidden border border-[#4f4538]/30 shadow-xl group hover:border-[#f3be6a]/40 hover:shadow-[0_20px_40px_rgba(243,190,106,0.15)] transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#221f1d] via-[#221f1d]/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-serif text-2xl font-bold text-[#e9e1dd]">
                    {ev.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs sm:text-sm text-[#d3c4b2] mb-6 leading-relaxed">
                  {ev.description}
                </p>
                <div className="flex items-center gap-2 text-[#f3be6a] text-xs font-semibold uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4 text-[#f3be6a]" />
                  <span>{ev.feature}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button to Event Quoter */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('eventos')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#f3be6a] hover:bg-[#f0bf60] text-[#432c00] font-bold text-sm sm:text-base px-10 py-4 rounded-full shadow-[0_0_32px_rgba(243,190,106,0.4)] hover:shadow-[0_0_48px_rgba(243,190,106,0.6)] transition-all transform hover:scale-[1.03] active:scale-95"
          >
            <Sparkles className="w-5 h-5" />
            <span>Abrir cotizador de eventos interactivo</span>
          </button>
        </div>

      </div>
    </section>
  );
};

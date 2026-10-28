import React from 'react';
import { Utensils, Armchair, Sparkles, MessageSquare } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Utensils,
      title: 'Sabor gourmet',
      description: 'Ingredientes de primera selección y recetas de autor que elevan los estándares del paladar.',
    },
    {
      icon: Armchair,
      title: 'Ambiente acogedor',
      description: 'Espacios diseñados con calidez vegetal, iluminación nocturna íntima y máximo confort.',
    },
    {
      icon: Sparkles,
      title: 'Eventos a tu medida',
      description: 'Montajes personalizados y paquetes de catering adaptados a la magnitud de tu celebración.',
    },
    {
      icon: MessageSquare,
      title: 'Atención por WhatsApp',
      description: 'Respuesta inmediata, confirmación de cupo y cotización personalizada sin complicaciones.',
    },
  ];

  return (
    <section className="w-full bg-[#100e0c] py-20 px-4 sm:px-6 lg:px-8 relative border-t border-[#4f4538]/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#f3be6a] font-semibold">
            Nuestra Promesa
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#e9e1dd] font-bold mt-2 mb-4">
            Por qué elegirnos
          </h2>
          <p className="text-sm sm:text-base text-[#d3c4b2] leading-relaxed">
            Brindamos una experiencia gastronómica inigualable donde la alta cocina, la hospitalidad de Aguachica y los detalles de confort se unen en cada visita.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#221f1d] p-8 rounded-2xl border border-[#4f4538]/30 shadow-xl flex flex-col items-center text-center group hover:bg-[#2d2927] hover:border-[#f3be6a]/40 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#383431] flex items-center justify-center text-[#f3be6a] mb-6 group-hover:scale-110 group-hover:bg-[#b8893b] group-hover:text-[#432c00] transition-all shadow-md">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#e9e1dd] mb-3 font-serif">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#d3c4b2] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

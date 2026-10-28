import React from 'react';
import { MessageSquare, Calendar, CheckCircle2 } from 'lucide-react';
import { ScreenTab } from './Navbar';

interface ThreeStepsSectionProps {
  onNavigate: (tab: ScreenTab) => void;
}

export const ThreeStepsSection: React.FC<ThreeStepsSectionProps> = ({ onNavigate }) => {
  const steps = [
    {
      step: '01',
      title: 'Elige tu fecha o escríbenos',
      description: 'Completa nuestro formulario web interactivo o abre conversación directa con nuestro equipo en WhatsApp.',
      icon: MessageSquare,
    },
    {
      step: '02',
      title: 'Indica comensales y ocasión',
      description: 'Selecciona hora de almuerzo o cena, número de personas y si celebras un cumpleaños, cita o reunión.',
      icon: Calendar,
    },
    {
      step: '03',
      title: 'Te confirmamos tu mesa',
      description: 'Recibe confirmación inmediata con tu código de reserva para asegurar tu lugar exclusivo en el Hotel D\'Leon.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="w-full bg-[#161311] py-20 px-4 sm:px-6 lg:px-8 relative border-t border-[#4f4538]/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#f3be6a] font-semibold">
            Simple & Ágil
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#e9e1dd] font-bold mt-2 mb-4">
            Cómo reservar en 3 pasos
          </h2>
          <p className="text-sm sm:text-base text-[#d3c4b2] leading-relaxed">
            Garantizamos tu mesa o servicio de catering en pocos minutos desde la app o por WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="relative bg-[#221f1d] p-8 rounded-2xl border border-[#4f4538]/30 shadow-lg flex flex-col items-start overflow-hidden group hover:border-[#f3be6a]/40 transition-all"
              >
                <span className="font-serif text-6xl text-[#f3be6a]/15 font-bold absolute -top-2 right-4 select-none pointer-events-none group-hover:text-[#f3be6a]/25 transition-colors">
                  {st.step}
                </span>

                <div className="w-12 h-12 rounded-full bg-[#f3be6a]/15 text-[#f3be6a] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>

                <span className="text-xs font-semibold uppercase tracking-widest text-[#f3be6a] mb-1">
                  Paso {i + 1}
                </span>

                <h3 className="font-serif text-xl font-bold text-[#e9e1dd] mb-3">
                  {st.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#d3c4b2] leading-relaxed">
                  {st.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('reserva')}
            className="inline-flex items-center gap-2 bg-[#2d2927] hover:bg-[#383431] text-[#f3be6a] border border-[#f3be6a]/40 text-sm font-semibold px-6 py-3 rounded-full transition-all"
          >
            <span>Ir directamente al formulario de reserva de mesa</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

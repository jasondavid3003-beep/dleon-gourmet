import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/restaurantData';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#161311] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#4f4538]/20" id="faq">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#f3be6a] font-semibold">
            Dudas Comunes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#e9e1dd] font-bold mt-2 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-sm sm:text-base text-[#d3c4b2] leading-relaxed">
            Todo lo que necesitas saber antes de tu visita o contratación de eventos gourmet.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-4 mb-12">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#221f1d] rounded-2xl border border-[#4f4538]/30 overflow-hidden transition-all shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-[#2d2927]/60 transition-colors"
                >
                  <span className="text-base sm:text-lg text-[#e9e1dd] font-semibold pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#f3be6a] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-[#d3c4b2] text-sm sm:text-base leading-relaxed border-t border-[#4f4538]/20 pt-4 bg-[#1e1b19]/40">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Tengo otra pregunta CTA */}
        <div className="text-center">
          <a
            href={createWhatsAppLink("Hola, tengo una pregunta sobre D' Leon Gourmet que no encontré en las preguntas frecuentes.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#2d2927] hover:bg-[#383431] text-[#f3be6a] border border-[#f3be6a]/30 text-sm font-semibold px-8 py-3.5 rounded-full shadow-md transition-all transform hover:scale-[1.02]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Tengo otra pregunta</span>
          </a>
        </div>

      </div>
    </section>
  );
};

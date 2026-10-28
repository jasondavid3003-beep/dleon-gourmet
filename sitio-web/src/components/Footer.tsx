import React, { useMemo } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { createWhatsAppLink } from '../utils/whatsapp';
import { MapPin, Clock, MessageSquare, Phone, Mail } from 'lucide-react';
import { ScreenTab } from './Navbar';

interface FooterProps {
  onNavigate: (tab: ScreenTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  // Determine if currently open based on Colombia time (UTC-5)
  const isOpenNow = useMemo(() => {
    try {
      const now = new Date();
      // Format to Colombia local time
      const colTimeStr = now.toLocaleString('en-US', { timeZone: 'America/Bogota' });
      const colDate = new Date(colTimeStr);
      const day = colDate.getDay(); // 0: Sunday, 6: Saturday
      const hour = colDate.getHours();
      const min = colDate.getMinutes();
      const timeNum = hour + min / 60;

      // Weekends & Holidays (Saturday=6, Sunday=0)
      if (day === 0 || day === 6) {
        return timeNum >= 11.5 && timeNum <= 21.75;
      } else {
        // Weekdays: 11:30am - 1:45pm OR 6:00pm - 9:45pm
        const isLunch = timeNum >= 11.5 && timeNum <= 13.75;
        const isDinner = timeNum >= 18.0 && timeNum <= 21.75;
        return isLunch || isDinner;
      }
    } catch {
      return true;
    }
  }, []);

  return (
    <footer className="w-full bg-[#100e0c] pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#4f4538]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          {/* Col 1: Logo & Description */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#221f1d] border border-[#f3be6a]/40 flex items-center justify-center p-1">
                <img
                  src={RESTAURANT_INFO.logoUrl}
                  alt="D' Leon"
                  className="w-full h-full object-contain filter invert contrast-200"
                />
              </div>
              <span className="font-serif text-2xl font-bold text-[#f3be6a]">
                D' Leon Gourmet
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-[#d3c4b2] leading-relaxed mt-2">
              Restaurante de alta cocina contemporánea y servicio de catering de autor para eventos exclusivos en Aguachica, Cesar.
            </p>

            {/* Live Open / Closed Status Badge */}
            <div className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 rounded-full bg-[#221f1d] border border-[#4f4538]/40 w-fit">
              <span
                className={`w-2 h-2 rounded-full ${
                  isOpenNow ? 'bg-[#25D366] animate-pulse' : 'bg-[#e8b85a]'
                }`}
              />
              <span className="text-[11px] font-semibold text-[#e9e1dd]">
                {isOpenNow ? 'Abierto en este momento' : 'Cerrado ahora (Revisa horarios)'}
              </span>
            </div>
          </div>

          {/* Col 2: Horarios exactos */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-[#f3be6a]" />
              <span className="font-serif text-lg font-bold text-[#e9e1dd]">
                Horario de Atención
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#d3c4b2] leading-relaxed">
              <strong className="text-[#e9e1dd] block font-semibold">Lunes a viernes:</strong>
              11:30 a. m. – 1:45 p. m. y 6:00 p. m. – 9:45 p. m.
            </p>
            <p className="text-xs sm:text-sm text-[#d3c4b2] leading-relaxed mt-2">
              <strong className="text-[#e9e1dd] block font-semibold">Sábados, domingos y festivos:</strong>
              11:30 a. m. – 9:45 p. m., servicio de corrido.
            </p>
          </div>

          {/* Col 3: Dirección y Localización */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="w-4 h-4 text-[#f3be6a]" />
              <span className="font-serif text-lg font-bold text-[#e9e1dd]">
                Ubicación
              </span>
            </div>

            <div className="text-xs sm:text-sm text-[#d3c4b2] leading-relaxed">
              <span>{RESTAURANT_INFO.address}</span>
            </div>

            <div className="mt-2 bg-[#221f1d] p-3 rounded-xl border border-[#4f4538]/30">
              <span className="text-[10px] uppercase tracking-wider text-[#f3be6a] font-semibold block">
                Punto de referencia
              </span>
              <span className="text-xs text-[#d3c4b2]">
                {RESTAURANT_INFO.reference}
              </span>
            </div>
          </div>

          {/* Col 4: Contacto WhatsApp Directo */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <Phone className="w-4 h-4 text-[#f3be6a]" />
              <span className="font-serif text-lg font-bold text-[#e9e1dd]">
                Contacto Directo
              </span>
            </div>

            <a
              href={createWhatsAppLink("Hola, deseo comunicarme con D' Leon Gourmet")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#25D366] hover:underline font-semibold text-sm sm:text-base"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>

            <div className="flex items-center gap-2 text-xs text-[#d3c4b2] mt-1">
              <Mail className="w-3.5 h-3.5 text-[#9c8f7f]" />
              <span>{RESTAURANT_INFO.email}</span>
            </div>

            <p className="text-xs text-[#9c8f7f] mt-2">
              Reservaciones prioritarias, cotizaciones para banquetes y consultas culinarias.
            </p>
          </div>

        </div>

        {/* Copyright & Quick Links */}
        <div className="pt-8 border-t border-[#4f4538]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9c8f7f]">
          <span>
            © 2025 D' Leon Gourmet Restaurante. Todos los derechos reservados. Aguachica, Cesar.
          </span>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('inicio')}
              className="hover:text-[#f3be6a] transition-colors"
            >
              Inicio
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('menu')}
              className="hover:text-[#f3be6a] transition-colors"
            >
              Carta Menú
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('reserva')}
              className="hover:text-[#f3be6a] transition-colors"
            >
              Reservar Mesa
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('eventos')}
              className="hover:text-[#f3be6a] transition-colors"
            >
              Eventos & Catering
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

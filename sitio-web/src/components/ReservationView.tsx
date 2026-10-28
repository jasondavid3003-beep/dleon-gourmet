import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { createWhatsAppLink } from '../utils/whatsapp';
import { Calendar, Clock, Users, MapPin, Sparkles, CheckCircle2, MessageSquare, ArrowLeft } from 'lucide-react';
import { ScreenTab } from './Navbar';

interface ReservationViewProps {
  onBackToHome: () => void;
  onNavigate: (tab: ScreenTab) => void;
}

export const ReservationView: React.FC<ReservationViewProps> = ({ onBackToHome, onNavigate }) => {
  const todayStr = new Date().toISOString().split('T')[0];

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(todayStr);
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState(2);
  const [zone, setZone] = useState('Salón Principal Climatizado');
  const [occasion, setOccasion] = useState('Cena Romántica / Especial');
  const [specialRequests, setSpecialRequests] = useState('');
  
  const [confirmedBooking, setConfirmedBooking] = useState<{
    code: string;
    name: string;
    guests: number;
    date: string;
    time: string;
    zone: string;
    occasion: string;
    phone: string;
  } | null>(null);

  const zones = [
    { id: 'Salón Principal Climatizado', label: 'Salón Principal Climatizado', desc: 'Decoración cenital y luz cálida' },
    { id: 'Mesa Romántica / Velas', label: 'Mesa Romántica con Velas', desc: 'Ambiente íntimo y atención preferencial' },
    { id: 'Zona Familiar & Social', label: 'Zona Familiar & Social', desc: 'Mesas amplias para grupos' },
    { id: 'Espacio VIP Privado', label: 'Espacio VIP Privado', desc: 'Máxima privacidad para ocasiones exclusivas' },
  ];

  const occasions = [
    'Cena Romántica / Especial',
    'Celebración de Cumpleaños',
    'Aniversario',
    'Reunión de Negocios / Ejecutiva',
    'Reunión Familiar',
    'Almuerzo / Cena Casual Gourmet',
  ];

  const timeOptions = [
    '11:30', '12:00', '12:30', '13:00', '13:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !date || !time) return;

    const bookingCode = `DLEON-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmedBooking({
      code: bookingCode,
      name: fullName,
      guests,
      date,
      time,
      zone,
      occasion,
      phone,
    });
  };

  const getWhatsAppMessage = () => {
    if (!confirmedBooking) return '';
    return `🍽️ *SOLICITUD DE RESERVA - D' LEON GOURMET*
*Código:* ${confirmedBooking.code}
*Nombre:* ${confirmedBooking.name}
*Teléfono:* ${confirmedBooking.phone}
*Fecha:* ${confirmedBooking.date}
*Hora:* ${confirmedBooking.time}
*Personas:* ${confirmedBooking.guests} comensal(es)
*Zona solicitada:* ${confirmedBooking.zone}
*Ocasión:* ${confirmedBooking.occasion}
${specialRequests ? `*Peticiones especiales:* ${specialRequests}\n` : ''}
Por favor confirmar disponibilidad de la mesa. ¡Muchas gracias!`;
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Back Button */}
      <div className="mb-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d3c4b2] hover:text-[#f3be6a] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al inicio</span>
        </button>
      </div>

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#221f1d] border border-[#f3be6a]/30 mb-3">
          <Calendar className="w-3.5 h-3.5 text-[#f3be6a]" />
          <span className="text-[11px] uppercase tracking-widest text-[#f3be6a] font-semibold">
            Módulo de Reservas
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#e9e1dd] font-bold mb-3">
          Reserva tu mesa en D' Leon
        </h1>
        <p className="text-sm sm:text-base text-[#d3c4b2]">
          Vive una velada gastronómica distinguida en nuestras instalaciones en el Hotel D'Leon, Aguachica.
        </p>
      </div>

      {confirmedBooking ? (
        /* Confirmed View */
        <div className="max-w-xl mx-auto bg-[#221f1d] rounded-2xl border border-[#f3be6a]/50 p-6 sm:p-10 shadow-2xl text-center animate-in zoom-in-95">
          <div className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <span className="text-xs uppercase tracking-widest text-[#f3be6a] font-semibold">
            Reserva Registrada
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#e9e1dd] mt-1 mb-2">
            ¡Tu mesa está reservada con éxito!
          </h2>
          <p className="text-sm text-[#d3c4b2] mb-6">
            Hemos generado tu pase de cortesía gourmet. Te recomendamos confirmar con 1 clic en WhatsApp para garantizar tu mesa.
          </p>

          {/* Ticket preview */}
          <div className="bg-[#161311] border border-[#4f4538] rounded-xl p-6 text-left mb-8 space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#b8893b] text-[#161311] px-4 py-1 text-xs font-bold uppercase rounded-bl-xl">
              {confirmedBooking.code}
            </div>
            <div>
              <span className="text-xs text-[#9c8f7f] uppercase block">Titular</span>
              <span className="font-semibold text-[#e9e1dd] text-base">{confirmedBooking.name}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#4f4538]/30">
              <div>
                <span className="text-xs text-[#9c8f7f] uppercase block">Fecha & Hora</span>
                <span className="text-sm text-[#e9e1dd] font-medium">{confirmedBooking.date} a las {confirmedBooking.time}</span>
              </div>
              <div>
                <span className="text-xs text-[#9c8f7f] uppercase block">Comensales</span>
                <span className="text-sm text-[#e9e1dd] font-medium">{confirmedBooking.guests} Persona(s)</span>
              </div>
            </div>
            <div className="pt-2 border-t border-[#4f4538]/30">
              <span className="text-xs text-[#9c8f7f] uppercase block">Zona & Ocasión</span>
              <span className="text-sm text-[#f3be6a] font-medium">{confirmedBooking.zone} · {confirmedBooking.occasion}</span>
            </div>
          </div>

          {/* WhatsApp Direct Action */}
          <a
            href={createWhatsAppLink(getWhatsAppMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 px-6 rounded-full shadow-lg text-base transition-all transform hover:scale-[1.02] active:scale-95 mb-4"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Confirmar ahora por WhatsApp</span>
          </a>

          <button
            onClick={() => setConfirmedBooking(null)}
            className="text-xs text-[#d3c4b2] hover:text-[#f3be6a] underline"
          >
            Hacer otra reserva
          </button>
        </div>
      ) : (
        /* Booking Form + Live Ticket Preview */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Form */}
          <div className="lg:col-span-7 bg-[#221f1d] rounded-2xl border border-[#4f4538]/30 p-6 sm:p-8 shadow-xl">
            <h2 className="font-serif text-2xl font-bold text-[#e9e1dd] mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#f3be6a]" />
              <span>Detalles de tu visita</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#d3c4b2] mb-1.5 font-medium">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ej. Carolina Mendoza"
                    className="w-full bg-[#161311] border border-[#4f4538] rounded-xl px-4 py-3 text-sm text-[#e9e1dd] focus:border-[#f3be6a] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#d3c4b2] mb-1.5 font-medium">
                    WhatsApp de contacto *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ej. +57 300 123 4567"
                    className="w-full bg-[#161311] border border-[#4f4538] rounded-xl px-4 py-3 text-sm text-[#e9e1dd] focus:border-[#f3be6a] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Date, Time & Number of Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#d3c4b2] mb-1.5 font-medium">
                    Fecha de reserva *
                  </label>
                  <input
                    type="date"
                    required
                    min={todayStr}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#161311] border border-[#4f4538] rounded-xl px-3 py-3 text-sm text-[#e9e1dd] focus:border-[#f3be6a] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#d3c4b2] mb-1.5 font-medium">
                    Hora deseada *
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#161311] border border-[#4f4538] rounded-xl px-3 py-3 text-sm text-[#e9e1dd] focus:border-[#f3be6a] focus:outline-none transition-colors"
                  >
                    {timeOptions.map((t) => (
                      <option key={t} value={t} className="bg-[#161311] text-[#e9e1dd]">
                        {t} {parseInt(t) >= 12 ? 'PM' : 'AM'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#d3c4b2] mb-1.5 font-medium">
                    Comensales *
                  </label>
                  <div className="flex items-center bg-[#161311] border border-[#4f4538] rounded-xl px-2 py-1.5">
                    <button
                      type="button"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-9 h-9 rounded-lg bg-[#221f1d] hover:bg-[#2d2927] text-[#f3be6a] font-bold text-lg flex items-center justify-center transition-colors"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-semibold text-sm text-[#e9e1dd]">
                      {guests} {guests === 1 ? 'persona' : 'personas'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setGuests(Math.min(25, guests + 1))}
                      className="w-9 h-9 rounded-lg bg-[#221f1d] hover:bg-[#2d2927] text-[#f3be6a] font-bold text-lg flex items-center justify-center transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Seating Area Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#d3c4b2] mb-2 font-medium">
                  Preferencia de ubicación o zona
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {zones.map((z) => (
                    <button
                      type="button"
                      key={z.id}
                      onClick={() => setZone(z.id)}
                      className={`text-left p-3.5 rounded-xl border text-sm transition-all ${
                        zone === z.id
                          ? 'bg-[#b8893b]/20 border-[#f3be6a] text-[#f3be6a]'
                          : 'bg-[#161311] border-[#4f4538] text-[#d3c4b2] hover:border-[#f3be6a]/40'
                      }`}
                    >
                      <div className="font-semibold text-[#e9e1dd]">{z.label}</div>
                      <div className="text-xs text-[#9c8f7f] mt-0.5">{z.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Occasion Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#d3c4b2] mb-1.5 font-medium">
                  Motivo de la celebración / visita
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full bg-[#161311] border border-[#4f4538] rounded-xl px-4 py-3 text-sm text-[#e9e1dd] focus:border-[#f3be6a] focus:outline-none"
                >
                  {occasions.map((occ) => (
                    <option key={occ} value={occ} className="bg-[#161311]">
                      {occ}
                    </option>
                  ))}
                </select>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#d3c4b2] mb-1.5 font-medium">
                  Peticiones especiales o comentarios (opcional)
                </label>
                <textarea
                  rows={3}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Ej. Decoración con velas para aniversario, alérgenos, silla alta para bebé..."
                  className="w-full bg-[#161311] border border-[#4f4538] rounded-xl px-4 py-3 text-sm text-[#e9e1dd] focus:border-[#f3be6a] focus:outline-none resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#f3be6a] hover:bg-[#f0bf60] text-[#432c00] font-bold text-base py-4 rounded-full shadow-[0_0_24px_rgba(243,190,106,0.35)] hover:shadow-[0_0_36px_rgba(243,190,106,0.6)] transition-all transform hover:scale-[1.01] active:scale-95"
              >
                <Calendar className="w-5 h-5 text-[#432c00]" />
                <span>Registrar reserva de mesa</span>
              </button>

            </form>
          </div>

          {/* Right: Live Ticket Preview & Atmosphere details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* VIP Pass Card */}
            <div className="bg-[#1e1b19] rounded-2xl border border-[#f3be6a]/30 p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,_rgba(243,190,106,0.25)_0%,_transparent_70%)] pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-[#4f4538]/30 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#221f1d] border border-[#f3be6a]/40 flex items-center justify-center p-1">
                    <img
                      src={RESTAURANT_INFO.logoUrl}
                      alt="D' Leon"
                      className="w-full h-full object-contain filter invert contrast-200"
                    />
                  </div>
                  <span className="font-serif text-lg font-bold text-[#f3be6a]">
                    Pase de Reserva
                  </span>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#d3c4b2] bg-[#2d2927] px-2.5 py-1 rounded-full">
                  Vista Previa
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#9c8f7f] block">
                    Comensal Titular
                  </span>
                  <span className="font-serif text-xl font-bold text-[#e9e1dd]">
                    {fullName || 'Tu Nombre'}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 bg-[#161311] p-4 rounded-xl border border-[#4f4538]/30">
                  <div>
                    <span className="text-[10px] uppercase text-[#9c8f7f] block">Fecha</span>
                    <span className="text-sm font-semibold text-[#e9e1dd]">{date}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#9c8f7f] block">Hora</span>
                    <span className="text-sm font-semibold text-[#f3be6a]">{time}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#9c8f7f] block">Capacidad</span>
                    <span className="text-sm font-semibold text-[#e9e1dd]">{guests} Persona(s)</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#9c8f7f] block">Zona</span>
                    <span className="text-xs font-semibold text-[#e9e1dd] truncate block">{zone}</span>
                  </div>
                </div>

                <div className="text-xs text-[#d3c4b2] space-y-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#f3be6a]" />
                    <span>{RESTAURANT_INFO.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#f3be6a]" />
                    <span>Horario: {RESTAURANT_INFO.hours.weekdays.split(';')[0]}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Atmosphere Highlight */}
            <div className="bg-[#221f1d] rounded-2xl border border-[#4f4538]/30 overflow-hidden shadow-xl">
              <div className="h-44 relative">
                <img
                  src={RESTAURANT_INFO.waiterImage}
                  alt="Servicio en D' Leon"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#221f1d] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#f3be6a]">
                    Servicio de Etiqueta
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#e9e1dd]">
                    Hospitalidad Inigualable
                  </h4>
                </div>
              </div>
              <div className="p-4 text-xs text-[#d3c4b2] leading-relaxed">
                Cada detalle, desde la temperatura del salón hasta el maridaje de tu corte de carne, está supervisado por nuestro equipo de hospitalidad.
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

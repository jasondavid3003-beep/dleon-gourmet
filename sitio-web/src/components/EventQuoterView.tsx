import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { formatPrice, createWhatsAppLink } from '../utils/whatsapp';
import { Sparkles, Users, Calendar, Check, ArrowLeft, MessageSquare, GlassWater, Utensils, Building2 } from 'lucide-react';
import { ScreenTab } from './Navbar';

interface EventQuoterViewProps {
  onBackToHome: () => void;
  onNavigate: (tab: ScreenTab) => void;
}

export const EventQuoterView: React.FC<EventQuoterViewProps> = ({ onBackToHome }) => {
  const [eventType, setEventType] = useState('Quinceañero');
  const [guestCount, setGuestCount] = useState(50);
  const [serviceStyle, setServiceStyle] = useState('mesa-3-tiempos');
  const [date, setDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  // Add-ons state
  const [includeSalon, setIncludeSalon] = useState(true);
  const [includeBar, setIncludeBar] = useState(false);
  const [includeDesserts, setIncludeDesserts] = useState(true);
  const [includeStaff, setIncludeStaff] = useState(true);

  const eventTypes = [
    { id: 'Quinceañero', label: 'Quinceañero', icon: '👑' },
    { id: 'Boda / Matrimonio', label: 'Boda / Matrimonio', icon: '💍' },
    { id: 'Fiesta Privada / Cumpleaños', label: 'Fiesta Privada / Cumpleaños', icon: '🎉' },
    { id: 'Evento Corporativo / Empresa', label: 'Evento Corporativo / Empresa', icon: '🏢' },
    { id: 'Grado / Aniversario', label: 'Grado / Aniversario', icon: '🎓' },
  ];

  const serviceStyles = [
    {
      id: 'mesa-3-tiempos',
      name: 'Menú Servido a la Mesa (3 Tiempos)',
      pricePerPerson: 55000,
      description: 'Entrada fresca de mar, plato fuerte gourmet (res/ave/salmón) y postre de la casa.',
    },
    {
      id: 'buffet-gourmet',
      name: 'Estación Buffet Gourmet Libre',
      pricePerPerson: 48000,
      description: '2 opciones de proteína, arroz especial, ensalada fresca y guarnición caliente.',
    },
    {
      id: 'banquete-gala',
      name: 'Banquete de Gala & Cortes Madurados',
      pricePerPerson: 65000,
      description: 'Punta de anca madurada, salmón al maracuyá y guarniciones artesanales ilimitadas.',
    },
    {
      id: 'coctel-pasabocas',
      name: 'Cóctel Pass-around & Pasabocas Finos',
      pricePerPerson: 36000,
      description: 'Variedad de 6 bocados gourmet calientes y fríos, ideal para recepciones dinámicas.',
    },
  ];

  const currentStyle = serviceStyles.find((s) => s.id === serviceStyle) || serviceStyles[0];

  // Pricing math
  const foodTotal = currentStyle.pricePerPerson * guestCount;
  const barTotal = includeBar ? 22000 * guestCount : 0;
  const dessertTotal = includeDesserts ? 9000 * guestCount : 0;
  const salonFixed = includeSalon ? 350000 : 0;
  const staffFixed = includeStaff ? 180000 : 0;

  const grandTotal = foodTotal + barTotal + dessertTotal + salonFixed + staffFixed;
  const pricePerGuestEffective = Math.round(grandTotal / guestCount);

  const getWhatsAppMessage = () => {
    return `✨ *COTIZACIÓN DE EVENTO - D' LEON GOURMET & CATERING*
*Cliente:* ${clientName || 'Interesado'}
*WhatsApp:* ${phone || 'No especificado'}
*Tipo de Evento:* ${eventType}
*Invitados:* ${guestCount} personas
*Fecha estimada:* ${date || 'Por definir'}

*Formato Gastronómico:*
• ${currentStyle.name} (${formatPrice(currentStyle.pricePerPerson)}/persona)

*Servicios Adicionales Seleccionados:*
${includeSalon ? '• Salón Exclusivo Climatizado Hotel D\'Leon con mantelería de gala\n' : ''}${includeBar ? '• Barra de Mixología & Cócteles de Autor Ahumados\n' : ''}${includeDesserts ? '• Estación de Café & Postres de Autor\n' : ''}${includeStaff ? '• Meseros y Maître dedicado\n' : ''}
*PRESUPUESTO ESTIMADO:* ${formatPrice(grandTotal)} COP
*(Aprox. ${formatPrice(pricePerGuestEffective)} por persona)*

${notes ? `*Comentarios adicionales:* ${notes}\n\n` : ''}Deseo agendar una asesoría y confirmar menú de degustación. ¡Quedo atento a su respuesta!`;
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Back button */}
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
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#221f1d] border border-[#f3be6a]/30 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#f3be6a]" />
          <span className="text-[11px] uppercase tracking-widest text-[#f3be6a] font-semibold">
            Cotizador de Banquetes
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#e9e1dd] font-bold mb-3">
          Cotiza tu evento con D' Leon
        </h1>
        <p className="text-sm sm:text-base text-[#d3c4b2]">
          Calcula al instante tu inversión para quinceañeros, bodas, aniversarios y eventos corporativos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Configuration Steps */}
        <div className="lg:col-span-7 bg-[#221f1d] rounded-2xl border border-[#4f4538]/30 p-6 sm:p-8 shadow-xl space-y-8">
          
          {/* Step 1: Event Type */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#f3be6a] mb-3 font-semibold">
              1. Selecciona el tipo de celebración
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {eventTypes.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setEventType(t.id)}
                  className={`p-3 rounded-xl border text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
                    eventType === t.id
                      ? 'bg-[#b8893b]/25 border-[#f3be6a] text-[#f3be6a] shadow-sm'
                      : 'bg-[#161311] border-[#4f4538] text-[#d3c4b2] hover:border-[#f3be6a]/40'
                  }`}
                >
                  <span className="text-base">{t.icon}</span>
                  <span className="truncate">{t.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Guest Count Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs uppercase tracking-wider text-[#f3be6a] font-semibold">
                2. Número estimado de invitados
              </label>
              <span className="text-sm font-bold text-[#f3be6a] bg-[#161311] px-3 py-1 rounded-full border border-[#4f4538]">
                {guestCount} Invitados
              </span>
            </div>
            <input
              type="range"
              min={15}
              max={250}
              step={5}
              value={guestCount}
              onChange={(e) => setGuestCount(Number(e.target.value))}
              className="w-full accent-[#f3be6a] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-[#9c8f7f] mt-1">
              <span>15 personas (Íntimo)</span>
              <span>100 personas</span>
              <span>250+ personas (Gran Gala)</span>
            </div>
          </div>

          {/* Step 3: Service Style */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#f3be6a] mb-3 font-semibold">
              3. Formato gastronómico principal
            </label>
            <div className="space-y-3">
              {serviceStyles.map((style) => (
                <button
                  key={style.id}
                  type="button"
                  onClick={() => setServiceStyle(style.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start justify-between gap-4 ${
                    serviceStyle === style.id
                      ? 'bg-[#b8893b]/20 border-[#f3be6a]'
                      : 'bg-[#161311] border-[#4f4538] hover:border-[#f3be6a]/40'
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-bold ${serviceStyle === style.id ? 'text-[#f3be6a]' : 'text-[#e9e1dd]'}`}>
                        {style.name}
                      </span>
                    </div>
                    <p className="text-xs text-[#d3c4b2] mt-1 leading-relaxed">
                      {style.description}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-serif text-sm sm:text-base font-bold text-[#f3be6a] block">
                      {formatPrice(style.pricePerPerson)}
                    </span>
                    <span className="text-[10px] text-[#9c8f7f]">por comensal</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Add-ons Checkboxes */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#f3be6a] mb-3 font-semibold">
              4. Servicios complementarios de salón y bar
            </label>
            <div className="space-y-2.5">
              
              <label className="flex items-center justify-between p-3.5 bg-[#161311] rounded-xl border border-[#4f4538] cursor-pointer hover:border-[#f3be6a]/40 transition-colors">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeSalon}
                    onChange={(e) => setIncludeSalon(e.target.checked)}
                    className="w-4 h-4 accent-[#f3be6a] rounded"
                  />
                  <div>
                    <span className="text-xs sm:text-sm font-semibold text-[#e9e1dd] block">
                      Salón Climatizado Hotel D'Leon + Mantelería de Gala
                    </span>
                    <span className="text-[11px] text-[#9c8f7f]">
                      Espacio exclusivo con vajilla, copas y mobiliario
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#f3be6a] shrink-0">
                  + $350.000
                </span>
              </label>

              <label className="flex items-center justify-between p-3.5 bg-[#161311] rounded-xl border border-[#4f4538] cursor-pointer hover:border-[#f3be6a]/40 transition-colors">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeBar}
                    onChange={(e) => setIncludeBar(e.target.checked)}
                    className="w-4 h-4 accent-[#f3be6a] rounded"
                  />
                  <div>
                    <span className="text-xs sm:text-sm font-semibold text-[#e9e1dd] block">
                      Barra de Mixología & Cócteles Ahumados
                    </span>
                    <span className="text-[11px] text-[#9c8f7f]">
                      Bartender profesional y 2 cócteles de autor por persona
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#f3be6a] shrink-0">
                  +$22.000 / p.p.
                </span>
              </label>

              <label className="flex items-center justify-between p-3.5 bg-[#161311] rounded-xl border border-[#4f4538] cursor-pointer hover:border-[#f3be6a]/40 transition-colors">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeDesserts}
                    onChange={(e) => setIncludeDesserts(e.target.checked)}
                    className="w-4 h-4 accent-[#f3be6a] rounded"
                  />
                  <div>
                    <span className="text-xs sm:text-sm font-semibold text-[#e9e1dd] block">
                      Estación de Café & Postres Artesanales
                    </span>
                    <span className="text-[11px] text-[#9c8f7f]">
                      Mesa dulce con mini volcán y bocados reposteros
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#f3be6a] shrink-0">
                  +$9.000 / p.p.
                </span>
              </label>

              <label className="flex items-center justify-between p-3.5 bg-[#161311] rounded-xl border border-[#4f4538] cursor-pointer hover:border-[#f3be6a]/40 transition-colors">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeStaff}
                    onChange={(e) => setIncludeStaff(e.target.checked)}
                    className="w-4 h-4 accent-[#f3be6a] rounded"
                  />
                  <div>
                    <span className="text-xs sm:text-sm font-semibold text-[#e9e1dd] block">
                      Meseros de Etiqueta & Maître Coordinador
                    </span>
                    <span className="text-[11px] text-[#9c8f7f]">
                      Atención sincronizada en mesa durante todo el evento
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#f3be6a] shrink-0">
                  + $180.000
                </span>
              </label>

            </div>
          </div>

          {/* Contact Details */}
          <div className="pt-4 border-t border-[#4f4538]/30 space-y-4">
            <label className="block text-xs uppercase tracking-wider text-[#f3be6a] font-semibold">
              5. Tus datos para formalizar la propuesta
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#d3c4b2] mb-1">
                  Tu nombre / Empresa
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Ej. Familia Gómez / Constructora"
                  className="w-full bg-[#161311] border border-[#4f4538] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#e9e1dd] focus:border-[#f3be6a] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#d3c4b2] mb-1">
                  WhatsApp de contacto
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ej. +57 321 000 0000"
                  className="w-full bg-[#161311] border border-[#4f4538] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#e9e1dd] focus:border-[#f3be6a] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#d3c4b2] mb-1">
                  Fecha estimada del evento
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#161311] border border-[#4f4538] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#e9e1dd] focus:border-[#f3be6a] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#d3c4b2] mb-1">
                  Notas adicionales
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ej. Temática dorada, horario nocturno..."
                  className="w-full bg-[#161311] border border-[#4f4538] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#e9e1dd] focus:border-[#f3be6a] focus:outline-none"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right: Live Summary Card */}
        <div className="lg:col-span-5 sticky top-28 space-y-6">
          <div className="bg-[#1e1b19] rounded-2xl border border-[#f3be6a]/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <span className="text-[11px] uppercase font-bold tracking-widest text-[#f3be6a] block mb-1">
              Resumen de Presupuesto
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#e9e1dd] mb-4">
              {eventType} · {guestCount} Invitados
            </h3>

            <div className="space-y-3 py-4 border-y border-[#4f4538]/30 text-xs sm:text-sm text-[#d3c4b2]">
              <div className="flex justify-between items-center">
                <span>Alimentación ({currentStyle.name.split('(')[0].trim()}):</span>
                <span className="font-semibold text-[#e9e1dd]">{formatPrice(foodTotal)}</span>
              </div>

              {includeBar && (
                <div className="flex justify-between items-center">
                  <span>Mixología & Cócteles ({guestCount} p.):</span>
                  <span className="font-semibold text-[#e9e1dd]">{formatPrice(barTotal)}</span>
                </div>
              )}

              {includeDesserts && (
                <div className="flex justify-between items-center">
                  <span>Estación de Café & Postres:</span>
                  <span className="font-semibold text-[#e9e1dd]">{formatPrice(dessertTotal)}</span>
                </div>
              )}

              {includeSalon && (
                <div className="flex justify-between items-center">
                  <span>Salón Hotel D'Leon + Menaje:</span>
                  <span className="font-semibold text-[#e9e1dd]">{formatPrice(salonFixed)}</span>
                </div>
              )}

              {includeStaff && (
                <div className="flex justify-between items-center">
                  <span>Brigada de Meseros & Maître:</span>
                  <span className="font-semibold text-[#e9e1dd]">{formatPrice(staffFixed)}</span>
                </div>
              )}
            </div>

            {/* Total Highlight */}
            <div className="pt-4 mb-6">
              <span className="text-xs uppercase tracking-wider text-[#9c8f7f] block">
                Inversión Total Estimada
              </span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#f3be6a]">
                  {formatPrice(grandTotal)}
                </span>
                <span className="text-xs text-[#d3c4b2]">
                  ~{formatPrice(pricePerGuestEffective)} / pers.
                </span>
              </div>
            </div>

            {/* Direct WhatsApp CTA */}
            <a
              href={createWhatsAppLink(getWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 bg-[#E8B85A] hover:bg-[#f0bf60] text-[#161311] font-bold py-4 px-6 rounded-full shadow-[0_0_24px_rgba(232,184,90,0.4)] text-sm sm:text-base transition-all transform hover:scale-[1.02] active:scale-95"
            >
              <MessageSquare className="w-5 h-5 text-[#161311]" />
              <span>Solicitar propuesta por WhatsApp</span>
            </a>

            <p className="text-[11px] text-[#9c8f7f] text-center mt-3 leading-relaxed">
              *Los valores son estimados e incluyen asesoría y servicio. Precios sujetos a confirmación de fechas de temporada alta.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ShoppingBag, Menu as MenuIcon, X, CalendarCheck, MessageSquare } from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp';

export type ScreenTab = 'inicio' | 'menu' | 'reserva' | 'eventos' | 'galeria' | 'opiniones';

interface NavbarProps {
  currentTab: ScreenTab;
  onTabChange: (tab: ScreenTab) => void;
  cartItemCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onTabChange,
  cartItemCount,
  onOpenCart,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: ScreenTab; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'menu', label: 'Carta Menú' },
    { id: 'reserva', label: 'Reservar Mesa' },
    { id: 'eventos', label: 'Eventos & Catering' },
    { id: 'galeria', label: 'Galería' },
    { id: 'opiniones', label: 'Opiniones' },
  ];

  const handleSelectTab = (tab: ScreenTab) => {
    onTabChange(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#100e0c]/85 backdrop-blur-xl border-b border-[#4f4538]/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Zone 1: Brand Mark */}
        <button
          onClick={() => handleSelectTab('inicio')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-full bg-[#221f1d] border border-[#f3be6a]/30 flex items-center justify-center overflow-hidden p-1 group-hover:border-[#f3be6a] transition-all">
            <img
              src={RESTAURANT_INFO.logoUrl}
              alt="Logo D' Leon Gourmet"
              className="w-full h-full object-contain filter invert contrast-200"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-[#f3be6a] group-hover:text-[#ffddaf] transition-colors leading-none">
              D' Leon
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#d3c4b2] font-medium leading-tight mt-0.5">
              Gourmet & Catering
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectTab(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[#b8893b]/25 text-[#f3be6a] border border-[#f3be6a]/40 shadow-sm'
                    : 'text-[#d3c4b2] hover:text-[#f3be6a] hover:bg-[#221f1d]/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions (Cart & Reservation) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Cart Icon Button */}
          <button
            onClick={onOpenCart}
            aria-label="Ver pedido"
            className="relative p-2.5 rounded-full bg-[#221f1d] hover:bg-[#2d2927] border border-[#4f4538]/40 text-[#f3be6a] transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#e8b85a] text-[#161311] font-bold text-xs flex items-center justify-center animate-bounce shadow-md">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Action button: Reservar */}
          <button
            onClick={() => handleSelectTab('reserva')}
            className="hidden sm:inline-flex items-center gap-2 bg-[#f3be6a] hover:bg-[#f0bf60] text-[#432c00] font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full shadow-[0_0_20px_rgba(243,190,106,0.3)] hover:shadow-[0_0_28px_rgba(243,190,106,0.5)] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Reservar mesa</span>
          </button>

          {/* Direct WhatsApp link */}
          <a
            href={createWhatsAppLink("Hola, deseo comunicarme con el restaurante D' Leon Gourmet")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="sm:hidden p-2.5 rounded-full bg-[#25d366]/20 border border-[#25d366]/40 text-[#25d366] hover:bg-[#25d366]/30 transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
            className="lg:hidden p-2 text-[#d3c4b2] hover:text-[#f3be6a] transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#100e0c]/98 border-b border-[#4f4538]/40 px-6 py-6 flex flex-col gap-3 shadow-2xl animate-in slide-in-from-top-3">
          <div className="text-xs uppercase tracking-widest text-[#9c8f7f] mb-1 font-semibold">
            Navegación
          </div>
          {navLinks.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectTab(item.id)}
                className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-all flex items-center justify-between ${
                  isActive
                    ? 'bg-[#b8893b]/20 text-[#f3be6a] border-l-4 border-[#f3be6a]'
                    : 'text-[#d3c4b2] hover:text-[#f3be6a] hover:bg-[#221f1d]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="text-xs text-[#f3be6a]">●</span>}
              </button>
            );
          })}

          <div className="pt-4 border-t border-[#4f4538]/30 flex flex-col gap-2.5">
            <button
              onClick={() => handleSelectTab('reserva')}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#f3be6a] text-[#432c00] font-semibold text-sm py-3 rounded-xl shadow-md"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Reservar mi mesa</span>
            </button>
            <button
              onClick={() => handleSelectTab('eventos')}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#221f1d] text-[#f3be6a] border border-[#f3be6a]/30 font-semibold text-sm py-3 rounded-xl"
            >
              <span>Cotizar mi evento</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

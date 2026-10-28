import React, { useState } from 'react';
import { MENU_ITEMS, MenuItem } from '../data/restaurantData';
import { formatPrice } from '../utils/whatsapp';
import { MessageSquare, ShoppingBag, Eye, Check } from 'lucide-react';
import { ScreenTab } from './Navbar';

interface StarDishesSectionProps {
  onAddToCart: (item: MenuItem) => void;
  onNavigate: (tab: ScreenTab) => void;
  onViewDishDetails: (item: MenuItem) => void;
}

export const StarDishesSection: React.FC<StarDishesSectionProps> = ({
  onAddToCart,
  onNavigate,
  onViewDishDetails,
}) => {
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const starDishes = MENU_ITEMS.filter((item) => item.isStar);

  const handleAdd = (dish: MenuItem) => {
    onAddToCart(dish);
    setAddedItemIds((prev) => ({ ...prev, [dish.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [dish.id]: false }));
    }, 1800);
  };

  return (
    <section className="w-full bg-[#FAF6F0] text-[#1E1B19] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors relative z-10 shadow-2xl" id="platos">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#845F00] font-semibold">
            Selección de la Casa
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#161311] font-bold mt-2 mb-4">
            Nuestros platos estrella
          </h2>
          <p className="text-base sm:text-lg text-[#5D554D] leading-relaxed">
            Creaciones culinarias preparadas con técnicas de alta cocina, cortes selectos e ingredientes frescos de calidad suprema.
          </p>
        </div>

        {/* 5 Dish Cards Grid Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {starDishes.map((dish, index) => {
            const isAdded = !!addedItemIds[dish.id];
            // If it's the 5th dish (Pechuga hawaiana), make it span 2 columns on lg or md
            const isWideCard = index === 4;

            return (
              <div
                key={dish.id}
                className={`group bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(184,137,59,0.22)] transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col ${
                  isWideCard ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className={`relative overflow-hidden bg-[#221f1d] ${isWideCard ? 'h-64 sm:h-72' : 'h-64'}`}>
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-[#161311]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#f3be6a]/30">
                    <span className="text-xs text-[#F3BE6A] font-semibold tracking-wider">
                      {dish.tag}
                    </span>
                  </div>

                  {/* Quick Detail Action overlay on hover */}
                  <button
                    onClick={() => onViewDishDetails(dish)}
                    aria-label={`Ver detalles de ${dish.name}`}
                    className="absolute bottom-3 right-3 bg-[#161311]/80 hover:bg-[#161311] text-[#FFFDF9] p-2.5 rounded-full backdrop-blur-md opacity-90 transition-all flex items-center gap-1.5 text-xs"
                  >
                    <Eye className="w-4 h-4 text-[#f3be6a]" />
                    <span className="hidden sm:inline">Detalles</span>
                  </button>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between bg-[#FFFFFF]">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#161311] leading-snug">
                        {dish.name}
                      </h3>
                      <span className="font-serif text-xl sm:text-2xl text-[#9A6E1E] font-bold shrink-0">
                        {formatPrice(dish.price)}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-[#6B6258] mb-6 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      onClick={() => handleAdd(dish)}
                      className={`flex-1 inline-flex items-center justify-center gap-2 font-semibold text-sm py-3.5 px-4 rounded-xl shadow-sm transition-all transform active:scale-95 ${
                        isAdded
                          ? 'bg-[#25D366] text-white'
                          : 'bg-[#E8B85A] hover:bg-[#D9A747] text-[#161311]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>¡Agregado al pedido!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          <span>Pedir {dish.name.split(' ')[0]}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Full Menu CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onNavigate('menu')}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#845F00] hover:text-[#161311] border-b-2 border-[#845F00] pb-1 hover:border-[#161311] transition-all"
          >
            <span>Ver toda la carta gastronómica completa y bebidas</span>
            <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

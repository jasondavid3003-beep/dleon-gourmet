import React, { useState } from 'react';
import { MENU_ITEMS, MenuItem } from '../data/restaurantData';
import { formatPrice } from '../utils/whatsapp';
import { Search, ShoppingBag, Eye, Check, ArrowLeft, Sparkles, X } from 'lucide-react';
import { ScreenTab } from './Navbar';

interface MenuViewProps {
  onBackToHome: () => void;
  onAddToCart: (item: MenuItem) => void;
  onOpenCart: () => void;
}

export const MenuView: React.FC<MenuViewProps> = ({
  onBackToHome,
  onAddToCart,
  onOpenCart,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'todos', label: 'Toda la Carta' },
    { id: 'cortes', label: 'Cortes Premium' },
    { id: 'aves', label: 'Aves & Especialidades' },
    { id: 'pescados', label: 'Pescados & Mariscos' },
    { id: 'bebidas', label: 'Mixología & Bar' },
    { id: 'postres', label: 'Postres & Dulces' },
  ];

  const filteredDishes = MENU_ITEMS.filter((item) => {
    const matchesCat = activeCategory === 'todos' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tag.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleAdd = (dish: MenuItem) => {
    onAddToCart(dish);
    setAddedItemIds((prev) => ({ ...prev, [dish.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [dish.id]: false }));
    }, 1800);
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Back button */}
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d3c4b2] hover:text-[#f3be6a] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al inicio</span>
        </button>

        <button
          onClick={onOpenCart}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#f3be6a] bg-[#221f1d] px-4 py-2 rounded-full border border-[#f3be6a]/30 hover:bg-[#2d2927]"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Ver mi pedido</span>
        </button>
      </div>

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#221f1d] border border-[#f3be6a]/30 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#f3be6a]" />
          <span className="text-[11px] uppercase tracking-widest text-[#f3be6a] font-semibold">
            Carta Gastronómica
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#e9e1dd] font-bold mb-3">
          Nuestra Carta de Autor
        </h1>
        <p className="text-sm sm:text-base text-[#d3c4b2]">
          Explora nuestros cortes al carbón, aves de autor, pescados frescos y coctelería contemporánea.
        </p>
      </div>

      {/* Search & Categories Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#f3be6a] text-[#432c00] shadow-md'
                  : 'bg-[#221f1d] text-[#d3c4b2] hover:bg-[#2d2927] hover:text-[#f3be6a] border border-[#4f4538]/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#9c8f7f] absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por plato o ingrediente..."
            className="w-full bg-[#161311] border border-[#4f4538] rounded-full pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#e9e1dd] focus:border-[#f3be6a] focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3.5 top-3.5 text-xs text-[#9c8f7f] hover:text-[#e9e1dd]"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Dish Grid */}
      {filteredDishes.length === 0 ? (
        <div className="bg-[#221f1d] rounded-2xl p-12 text-center max-w-md mx-auto border border-[#4f4538]/30">
          <p className="text-base text-[#d3c4b2] mb-3">No encontramos platos con tu búsqueda.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setActiveCategory('todos');
            }}
            className="text-xs uppercase tracking-wider text-[#f3be6a] font-semibold underline"
          >
            Limpiar filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDishes.map((dish) => {
            const isAdded = !!addedItemIds[dish.id];
            return (
              <div
                key={dish.id}
                className="bg-[#221f1d] rounded-2xl overflow-hidden border border-[#4f4538]/30 shadow-xl hover:border-[#f3be6a]/40 group flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="relative h-60 overflow-hidden bg-black">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 bg-[#161311]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#f3be6a]/30">
                      <span className="text-xs text-[#f3be6a] font-semibold">
                        {dish.tag}
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedDish(dish)}
                      className="absolute bottom-3 right-3 bg-[#161311]/80 hover:bg-[#161311] text-[#fffdf9] p-2 rounded-full backdrop-blur-md text-xs flex items-center gap-1.5 transition-all"
                    >
                      <Eye className="w-4 h-4 text-[#f3be6a]" />
                      <span className="text-xs">Ver detalle</span>
                    </button>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-serif text-xl font-bold text-[#e9e1dd] leading-snug">
                        {dish.name}
                      </h3>
                      <span className="font-serif text-xl font-bold text-[#f3be6a] shrink-0">
                        {formatPrice(dish.price)}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#d3c4b2] leading-relaxed mb-4">
                      {dish.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <button
                    onClick={() => handleAdd(dish)}
                    className={`w-full inline-flex items-center justify-center gap-2 font-semibold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md transition-all active:scale-95 ${
                      isAdded
                        ? 'bg-[#25D366] text-white'
                        : 'bg-[#f3be6a] hover:bg-[#f0bf60] text-[#432c00]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>¡Agregado a tu orden!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Agregar al pedido</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Dish Detail Modal */}
      {selectedDish && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#1e1b19] rounded-2xl border border-[#f3be6a]/40 max-w-xl w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95">
            <button
              onClick={() => setSelectedDish(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#161311]/80 hover:bg-[#161311] text-[#e9e1dd] flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-64 relative bg-black">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#161311]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#f3be6a]/30">
                <span className="text-xs text-[#f3be6a] font-semibold">
                  {selectedDish.tag}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-serif text-2xl font-bold text-[#e9e1dd]">
                  {selectedDish.name}
                </h3>
                <span className="font-serif text-2xl font-bold text-[#f3be6a] shrink-0">
                  {formatPrice(selectedDish.price)}
                </span>
              </div>

              <p className="text-sm text-[#d3c4b2] mb-6 leading-relaxed">
                {selectedDish.detailedDescription || selectedDish.description}
              </p>

              <div className="bg-[#161311] p-4 rounded-xl border border-[#4f4538]/30 mb-6 text-xs text-[#d3c4b2] space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#9c8f7f]">Categoría:</span>
                  <span className="font-semibold text-[#e9e1dd]">{selectedDish.categoryLabel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9c8f7f]">Guarnición incluida:</span>
                  <span className="font-semibold text-[#e9e1dd]">Papas rústicas + Ensalada de la casa</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9c8f7f]">Tiempo estimado:</span>
                  <span className="font-semibold text-[#f3be6a]">20 - 25 minutos</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    handleAdd(selectedDish);
                    setSelectedDish(null);
                  }}
                  className="flex-1 bg-[#f3be6a] hover:bg-[#f0bf60] text-[#432c00] font-bold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Agregar al pedido</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

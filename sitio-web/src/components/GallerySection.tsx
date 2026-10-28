import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';
import { X, ZoomIn } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos los momentos' },
    { id: 'platos', label: 'Platos de Autor' },
    { id: 'salon', label: 'Salón & Espacios' },
    { id: 'eventos', label: 'Banquetes & Eventos' },
    { id: 'mixologia', label: 'Mixología' },
  ];

  const filteredItems =
    selectedCategory === 'todos'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section className="w-full bg-[#100e0c] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#4f4538]/20" id="galeria">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#f3be6a] font-semibold">
            Ambiente y Placer
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#e9e1dd] font-bold mt-2 mb-4">
            Galería de momentos
          </h2>
          <p className="text-sm sm:text-base text-[#d3c4b2] leading-relaxed">
            Recorre visualmente la intimidad de nuestras instalaciones, la dedicación en mesa y la precisión de cada preparación en Aguachica.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#f3be6a] text-[#432c00] shadow-md'
                  : 'bg-[#221f1d] text-[#d3c4b2] hover:bg-[#2d2927] hover:text-[#f3be6a] border border-[#4f4538]/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 6 Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative h-80 rounded-2xl overflow-hidden bg-[#221f1d] border border-[#4f4538]/30 shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#100e0c]/90 via-[#100e0c]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-widest text-[#f3be6a] font-semibold mb-1">
                  {item.categoryLabel}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#e9e1dd]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#d3c4b2] line-clamp-2 mt-1">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-[#f3be6a] font-semibold">
                  <ZoomIn className="w-4 h-4" />
                  <span>Ver ampliado</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
          <div className="relative max-w-4xl w-full bg-[#161311] rounded-2xl border border-[#f3be6a]/30 overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#161311]/80 hover:bg-[#161311] text-[#e9e1dd] flex items-center justify-center transition-colors"
              aria-label="Cerrar visor"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="md:w-3/5 bg-black h-80 md:h-[480px]">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#1e1b19]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#f3be6a] font-semibold">
                  {lightboxItem.categoryLabel}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#e9e1dd] mt-2 mb-4">
                  {lightboxItem.title}
                </h3>
                <p className="text-sm text-[#d3c4b2] leading-relaxed">
                  {lightboxItem.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#4f4538]/30 flex items-center justify-between">
                <span className="text-xs text-[#9c8f7f]">
                  D' Leon Gourmet · Aguachica
                </span>
                <button
                  onClick={() => setLightboxItem(null)}
                  className="text-xs font-semibold text-[#f3be6a] hover:underline"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

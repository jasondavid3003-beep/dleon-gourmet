import React, { useState, useEffect } from 'react';
import { INITIAL_TESTIMONIALS, Testimonial } from '../data/restaurantData';
import { Star, MessageSquarePlus, User, X, Check } from 'lucide-react';

const STORAGE_KEY = 'dleon_gourmet_reviews';

export const TestimonialsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Testimonial[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // fallback
    }
    return INITIAL_TESTIMONIALS;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formName, setFormName] = useState('');
  const [formCity, setFormCity] = useState('');
  const [formComment, setFormComment] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formComment.trim()) return;

    const newRev: Testimonial = {
      id: `rev-${Date.now()}`,
      name: formName.trim(),
      city: formCity.trim() || 'Aguachica, Cesar',
      rating: formRating,
      comment: formComment.trim(),
      date: 'Reciente',
      tag: 'Opinión de la Comunidad',
    };

    const updated = [newRev, ...reviews];
    setReviews(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setIsModalOpen(false);
      setFormName('');
      setFormCity('');
      setFormComment('');
      setFormRating(5);
    }, 1500);
  };

  return (
    <section className="w-full bg-[#1e1b19] py-20 px-4 sm:px-6 lg:px-8 relative border-t border-[#4f4538]/20" id="opiniones">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#f3be6a] font-semibold">
            Testimonios
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#e9e1dd] font-bold mt-2 mb-4">
            Lo que dicen nuestros comensales
          </h2>
          <p className="text-sm sm:text-base text-[#d3c4b2] leading-relaxed">
            La satisfacción de cada visitante y anfitrión de eventos es nuestro mayor compromiso de excelencia.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 inline-flex items-center gap-2 bg-[#2d2927] hover:bg-[#383431] text-[#f3be6a] border border-[#f3be6a]/40 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm transition-all transform hover:scale-[1.02]"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Compartir mi experiencia</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="bg-[#221f1d] p-8 rounded-2xl border border-[#4f4538]/30 shadow-md flex flex-col justify-between group hover:border-[#f3be6a]/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#f3be6a]">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`w-4 h-4 ${
                          idx < item.rating
                            ? 'text-[#f3be6a] fill-[#f3be6a]'
                            : 'text-[#4f4538]'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase font-semibold text-[#f3be6a] bg-[#383431] px-2.5 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                </div>

                <span className="text-[#f3be6a]/30 font-serif text-4xl leading-none select-none">
                  “
                </span>
                <p className="text-sm sm:text-base text-[#d3c4b2] italic mb-6 leading-relaxed">
                  {item.comment}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#4f4538]/30">
                <div className="w-10 h-10 rounded-full bg-[#383431] flex items-center justify-center text-[#d3c4b2] shrink-0 border border-[#4f4538]/40">
                  <User className="w-5 h-5 text-[#f3be6a]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#e9e1dd] leading-snug">
                    {item.name}
                  </p>
                  <span className="text-xs text-[#9c8f7f]">
                    {item.city} · {item.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#1e1b19] rounded-2xl border border-[#f3be6a]/40 max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-[#d3c4b2] hover:text-[#f3be6a] p-1"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="text-center py-8 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#e9e1dd] mb-2">
                  ¡Muchas gracias por tu reseña!
                </h3>
                <p className="text-sm text-[#d3c4b2]">
                  Tu opinión nos ayuda a mantener viva la excelencia culinaria de D' Leon Gourmet.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview}>
                <span className="text-xs uppercase tracking-widest text-[#f3be6a] font-semibold">
                  Tu Calificación
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#e9e1dd] mt-1 mb-4">
                  Comparte tu experiencia
                </h3>

                <div className="flex items-center gap-2 mb-6">
                  <span className="text-sm text-[#d3c4b2] mr-2">Puntuación:</span>
                  {[1, 2, 3, 4, 5].map((val) => (
                    <button
                      type="button"
                      key={val}
                      onClick={() => setFormRating(val)}
                      className="p-1 text-[#f3be6a] hover:scale-125 transition-transform"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          val <= formRating
                            ? 'text-[#f3be6a] fill-[#f3be6a]'
                            : 'text-[#4f4538]'
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#d3c4b2] mb-1">
                      Tu Nombre
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Ej. Juan Pérez"
                      className="w-full bg-[#161311] border border-[#4f4538] rounded-xl px-4 py-2.5 text-sm text-[#e9e1dd] focus:border-[#f3be6a] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#d3c4b2] mb-1">
                      Ciudad / Procedencia
                    </label>
                    <input
                      type="text"
                      value={formCity}
                      onChange={(e) => setFormCity(e.target.value)}
                      placeholder="Ej. Aguachica, Cesar"
                      className="w-full bg-[#161311] border border-[#4f4538] rounded-xl px-4 py-2.5 text-sm text-[#e9e1dd] focus:border-[#f3be6a] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#d3c4b2] mb-1">
                      Tu Comentario o Plato Favorito
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formComment}
                      onChange={(e) => setFormComment(e.target.value)}
                      placeholder="Cuéntanos sobre el sabor, el servicio o tu evento especial..."
                      className="w-full bg-[#161311] border border-[#4f4538] rounded-xl px-4 py-2.5 text-sm text-[#e9e1dd] focus:border-[#f3be6a] focus:outline-none resize-none"
                    />
                  </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-sm text-[#d3c4b2] hover:bg-[#2d2927]"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-[#f3be6a] hover:bg-[#f0bf60] text-[#432c00] shadow-md"
                  >
                    Publicar reseña
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

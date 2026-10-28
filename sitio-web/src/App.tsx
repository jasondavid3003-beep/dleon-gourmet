import React, { useState } from 'react';
import { Navbar, ScreenTab } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StarDishesSection } from './components/StarDishesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CateringSection } from './components/CateringSection';
import { ThreeStepsSection } from './components/ThreeStepsSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { MenuView } from './components/MenuView';
import { ReservationView } from './components/ReservationView';
import { EventQuoterView } from './components/EventQuoterView';
import { MenuItem } from './data/restaurantData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<ScreenTab>('inicio');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [previewDish, setPreviewDish] = useState<MenuItem | null>(null);

  const handleTabChange = (tab: ScreenTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (dish: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.dish.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.dish.id === dish.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { dish, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.dish.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.dish.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#161311] text-[#e9e1dd] flex flex-col justify-between selection:bg-[#f3be6a] selection:text-[#432c00]">
      {/* Top Bar Navigation */}
      <Navbar
        currentTab={currentTab}
        onTabChange={handleTabChange}
        cartItemCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Area based on Tab */}
      <main className="flex-1 w-full">
        {currentTab === 'inicio' && (
          <>
            <HeroSection onNavigate={handleTabChange} />
            <StarDishesSection
              onAddToCart={handleAddToCart}
              onNavigate={handleTabChange}
              onViewDishDetails={(dish) => setPreviewDish(dish)}
            />
            <WhyChooseUs />
            <CateringSection onNavigate={handleTabChange} />
            <ThreeStepsSection onNavigate={handleTabChange} />
            <GallerySection />
            <TestimonialsSection />
            <FaqSection />
            <FinalCtaSection onNavigate={handleTabChange} />
          </>
        )}

        {currentTab === 'menu' && (
          <MenuView
            onBackToHome={() => handleTabChange('inicio')}
            onAddToCart={handleAddToCart}
            onOpenCart={() => setIsCartOpen(true)}
          />
        )}

        {currentTab === 'reserva' && (
          <ReservationView
            onBackToHome={() => handleTabChange('inicio')}
            onNavigate={handleTabChange}
          />
        )}

        {currentTab === 'eventos' && (
          <EventQuoterView
            onBackToHome={() => handleTabChange('inicio')}
            onNavigate={handleTabChange}
          />
        )}

        {currentTab === 'galeria' && (
          <div className="pt-20">
            <GallerySection />
            <FinalCtaSection onNavigate={handleTabChange} />
          </div>
        )}

        {currentTab === 'opiniones' && (
          <div className="pt-20">
            <TestimonialsSection />
            <FaqSection />
            <FinalCtaSection onNavigate={handleTabChange} />
          </div>
        )}
      </main>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Quick Dish Detail Modal from Star Dishes */}
      {previewDish && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#1e1b19] rounded-2xl border border-[#f3be6a]/40 max-w-lg w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95">
            <button
              onClick={() => setPreviewDish(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#161311]/80 hover:bg-[#161311] text-[#e9e1dd] flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            <div className="h-64 relative bg-black">
              <img
                src={previewDish.image}
                alt={previewDish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#161311]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#f3be6a]/30">
                <span className="text-xs text-[#f3be6a] font-semibold">
                  {previewDish.tag}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-serif text-2xl font-bold text-[#e9e1dd] mb-2">
                {previewDish.name}
              </h3>
              <p className="text-sm text-[#d3c4b2] mb-6 leading-relaxed">
                {previewDish.detailedDescription || previewDish.description}
              </p>

              <button
                onClick={() => {
                  handleAddToCart(previewDish);
                  setPreviewDish(null);
                }}
                className="w-full bg-[#E8B85A] hover:bg-[#f0bf60] text-[#161311] font-bold text-sm py-3.5 rounded-xl shadow-md transition-all active:scale-95"
              >
                Agregar al pedido
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Global Footer */}
      <Footer onNavigate={handleTabChange} />
    </div>
  );
}

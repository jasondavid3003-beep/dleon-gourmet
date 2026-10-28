import React, { useState } from 'react';
import { MenuItem, RESTAURANT_INFO } from '../data/restaurantData';
import { formatPrice, createWhatsAppLink } from '../utils/whatsapp';
import { X, ShoppingBag, Trash2, MessageSquare, Utensils, Bike } from 'lucide-react';

export interface CartItem {
  dish: MenuItem;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'mesa' | 'llevar'>('mesa');
  const [customerName, setCustomerName] = useState('');
  const [tableOrAddress, setTableOrAddress] = useState('');
  const [orderNotes, setOrderNotes] = useState('');

  if (!isOpen) return null;

  const total = items.reduce((acc, curr) => acc + curr.dish.price * curr.quantity, 0);

  const getOrderWhatsAppMessage = () => {
    let msg = `🍽️ *NUEVO PEDIDO GOURMET - D' LEON*\n`;
    msg += `*Cliente:* ${customerName || 'Cliente'}\n`;
    msg += `*Modalidad:* ${orderType === 'mesa' ? `En Mesa (${tableOrAddress || 'Por asignar'})` : `Para Llevar / Domicilio (${tableOrAddress || 'Aguachica'})`}\n\n`;
    msg += `*PLATOS SOLICITADOS:*\n`;

    items.forEach((item, index) => {
      msg += `${index + 1}. ${item.dish.name} x${item.quantity} = ${formatPrice(item.dish.price * item.quantity)}\n`;
    });

    msg += `\n*TOTAL A PAGAR:* ${formatPrice(total)} COP\n`;
    if (orderNotes) {
      msg += `*Notas de cocina:* ${orderNotes}\n`;
    }
    msg += `\nPor favor confirmar pedido y tiempo de entrega. ¡Gracias!`;
    return msg;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end animate-in fade-in">
      <div className="w-full max-w-md bg-[#161311] h-full border-l border-[#4f4538]/40 shadow-2xl flex flex-col justify-between overflow-y-auto">
        
        {/* Header */}
        <div>
          <div className="p-6 border-b border-[#4f4538]/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#f3be6a]" />
              <h2 className="font-serif text-xl font-bold text-[#e9e1dd]">
                Tu Pedido Gourmet
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#d3c4b2] hover:text-[#f3be6a] rounded-full hover:bg-[#221f1d] transition-colors"
              aria-label="Cerrar pedido"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-12 h-12 text-[#4f4538] mx-auto mb-3" />
                <p className="text-sm text-[#d3c4b2] mb-2 font-medium">
                  Aún no has agregado platos a tu pedido.
                </p>
                <p className="text-xs text-[#9c8f7f]">
                  Explora nuestros cortes al carbón, aves de autor y mixología.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#9c8f7f] pb-2 border-b border-[#4f4538]/20">
                  <span>Platos ({items.length})</span>
                  <button
                    onClick={onClearCart}
                    className="text-[#ffb4ab] hover:underline"
                  >
                    Vaciar lista
                  </button>
                </div>

                {items.map((item) => (
                  <div
                    key={item.dish.id}
                    className="bg-[#221f1d] p-3.5 rounded-xl border border-[#4f4538]/30 flex gap-3 items-center"
                  >
                    <img
                      src={item.dish.image}
                      alt={item.dish.name}
                      className="w-14 h-14 object-cover rounded-lg shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-semibold text-[#e9e1dd] truncate">
                        {item.dish.name}
                      </h4>
                      <span className="text-xs text-[#f3be6a] font-bold">
                        {formatPrice(item.dish.price)}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => onUpdateQuantity(item.dish.id, -1)}
                        className="w-7 h-7 rounded bg-[#161311] hover:bg-[#2d2927] text-[#f3be6a] font-bold text-xs flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="text-xs font-semibold text-[#e9e1dd] w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.dish.id, 1)}
                        className="w-7 h-7 rounded bg-[#161311] hover:bg-[#2d2927] text-[#f3be6a] font-bold text-xs flex items-center justify-center"
                      >
                        +
                      </button>
                      <button
                        onClick={() => onRemoveItem(item.dish.id)}
                        className="p-1.5 text-[#9c8f7f] hover:text-[#ffb4ab] ml-1"
                        aria-label="Eliminar plato"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Order Details & Checkout */}
        {items.length > 0 && (
          <div className="p-6 bg-[#1e1b19] border-t border-[#4f4538]/30 space-y-4">
            
            {/* Modalidad: En mesa vs Llevar */}
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#9c8f7f] block mb-1.5">
                Modalidad de consumo
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setOrderType('mesa')}
                  className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    orderType === 'mesa'
                      ? 'bg-[#b8893b]/25 border-[#f3be6a] text-[#f3be6a]'
                      : 'bg-[#161311] border-[#4f4538] text-[#d3c4b2]'
                  }`}
                >
                  <Utensils className="w-3.5 h-3.5" />
                  <span>En Mesa (Restaurante)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('llevar')}
                  className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    orderType === 'llevar'
                      ? 'bg-[#b8893b]/25 border-[#f3be6a] text-[#f3be6a]'
                      : 'bg-[#161311] border-[#4f4538] text-[#d3c4b2]'
                  }`}
                >
                  <Bike className="w-3.5 h-3.5" />
                  <span>Para Llevar / Domicilio</span>
                </button>
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-2.5">
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Tu nombre completo"
                className="w-full bg-[#161311] border border-[#4f4538] rounded-xl px-3.5 py-2 text-xs text-[#e9e1dd] focus:border-[#f3be6a] focus:outline-none"
              />
              <input
                type="text"
                value={tableOrAddress}
                onChange={(e) => setTableOrAddress(e.target.value)}
                placeholder={
                  orderType === 'mesa'
                    ? 'Número de mesa o zona preferida'
                    : 'Dirección o punto de entrega en Aguachica'
                }
                className="w-full bg-[#161311] border border-[#4f4538] rounded-xl px-3.5 py-2 text-xs text-[#e9e1dd] focus:border-[#f3be6a] focus:outline-none"
              />
              <input
                type="text"
                value={orderNotes}
                onChange={(e) => setOrderNotes(e.target.value)}
                placeholder="Término de la carne / notas para cocina"
                className="w-full bg-[#161311] border border-[#4f4538] rounded-xl px-3.5 py-2 text-xs text-[#e9e1dd] focus:border-[#f3be6a] focus:outline-none"
              />
            </div>

            {/* Total */}
            <div className="pt-2 flex items-center justify-between border-t border-[#4f4538]/20">
              <span className="text-xs uppercase tracking-wider text-[#9c8f7f]">
                Total estimado
              </span>
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#f3be6a]">
                {formatPrice(total)}
              </span>
            </div>

            {/* Submit to WhatsApp */}
            <a
              href={createWhatsAppLink(getOrderWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 px-4 rounded-full text-sm shadow-lg transition-all transform hover:scale-[1.02] active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enviar pedido por WhatsApp</span>
            </a>
          </div>
        )}

      </div>
    </div>
  );
};

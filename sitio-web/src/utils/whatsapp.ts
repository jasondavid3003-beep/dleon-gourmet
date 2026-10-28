import { RESTAURANT_INFO } from '../data/restaurantData';

export function createWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encoded}`;
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(amount);
}

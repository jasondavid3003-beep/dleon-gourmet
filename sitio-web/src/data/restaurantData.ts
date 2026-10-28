export interface MenuItem {
  id: string;
  name: string;
  category: 'cortes' | 'aves' | 'pescados' | 'bebidas' | 'postres';
  categoryLabel: string;
  price: number;
  description: string;
  detailedDescription?: string;
  tag: string;
  image: string;
  isStar?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  comment: string;
  date: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'platos' | 'salon' | 'eventos' | 'mixologia';
  categoryLabel: string;
  image: string;
  description: string;
}

export const RESTAURANT_INFO = {
  name: "D' Leon Gourmet",
  fullName: "D' Leon Gourmet - Restaurante & Catering",
  slogan: "Sabores gourmet que hacen inolvidable cada momento",
  phone: "+57 321 538 0515",
  whatsappNumber: "573215380515",
  email: "reservas@dleonrestaurante.com",
  address: "Cra 30 #5-21, Hotel D'Leon, Aguachica, Cesar, Colombia",
  reference: "Instalaciones del Hotel D'Leon",
  logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmHY-o2DM_S8fUfoaOFzVtLaFTAJlyhGHee97hV6ZnBaiUQdMisCrUCskm7isOqiFhaZpb0ADAzwHquI61hm6yGqPiisaC2D6T4vJ8FHar_fWf0tu3Wux8ZbgVvUssHnJC8J8atGfNvrRFEyLzyBat6ZBtFvskcQTxaAillRVnyhFKFrYyxAkx3uadoiBfOmBw9d3USxKPXcBLOvBlCPppJHIjV4n_MHi3xBdrVboPl5N3TI9p4q_Adxsf4pqyC9PhEw",
  heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE20GC9FiWI12STzU6Z6Fvl5D3ljdRoZhIJ6s1EBMkdTnnl_NmPP-BqnL9a1AlSOYfW9wOapwqqlfzBf2NhgCDKurNtHqZXSsI97BGGhDu_DVMdv0rGfk4X64fWyfeX5MaRWW5azS75A6TDxSW9J9pdoEq9p88ESINg0y67YU-kHrsD-TG918vMMKRDv_RGeumBRY-loS8-xXwiKvqjx2yiKdIFGg_LyVqLCl_asiCD3dcBVlYS9TYCxiirIGi1RNG0Q",
  waiterImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ1BnMu4Fjtq4oqgg31aej9pYYLSUjaD6HytUtfIbX-YwVFhjiS6H7gx3IWajNtdFoJuaJAm6Kwv0Hty40gdQj-rXo16FhFfFHN3Q4SyQo48ssub6xBBAo7vAq2IWQRnPBuXtanXsJthI1qRZV0AdJuyl7yERalV-Gij5GPcmevrok0DjS7dGTjAYlyYMWoiwwPePC8MPXrG1CfrM0WdhKUAWw7KLnHxwD4MjuzWQNHJshkqOMIaRv_9L5WG_uxS5SFQ",
  hours: {
    weekdays: "Lunes a viernes: 11:30 a. m. – 1:45 p. m. y 6:00 p. m. – 9:45 p. m.",
    weekends: "Sábados, domingos y festivos: 11:30 a. m. – 9:45 p. m. (jornada continua)",
  }
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "punta-de-anca",
    name: "Punta de anca de res (350 g)",
    category: "cortes",
    categoryLabel: "Cortes Premium",
    price: 48000,
    description: "Jugosa, en su punto y con sabor irresistible",
    detailedDescription: "Corte selecto madurado de 350 gramos cocinado al punto preferido sobre brasas aromáticas, bañado en reducción demi-glace de la casa. Acompañado de papas rústicas al romero y ensalada fresca.",
    tag: "Corte Premium",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE20GC9FiWI12STzU6Z6Fvl5D3ljdRoZhIJ6s1EBMkdTnnl_NmPP-BqnL9a1AlSOYfW9wOapwqqlfzBf2NhgCDKurNtHqZXSsI97BGGhDu_DVMdv0rGfk4X64fWyfeX5MaRWW5azS75A6TDxSW9J9pdoEq9p88ESINg0y67YU-kHrsD-TG918vMMKRDv_RGeumBRY-loS8-xXwiKvqjx2yiKdIFGg_LyVqLCl_asiCD3dcBVlYS9TYCxiirIGi1RNG0Q",
    isStar: true,
  },
  {
    id: "salmon-maracuya",
    name: "Salmón en salsa de maracuyá",
    category: "pescados",
    categoryLabel: "Pescados & Mariscos",
    price: 45000,
    description: "Tierno y fresco con un toque tropical",
    detailedDescription: "Filete de salmón noruego sellado a fuego vivo con piel crujiente, glaseado con una reducción agridulce de maracuyá de la región, servido con puré rústico aromatizado y espárragos.",
    tag: "Mariscos & Río",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcb2xbHlolPSq_riOgioozouoVEptxlG8Pnp5a2JUtRbHiXfOtQng97quIjbjIA4kAiPUV9WNdlBYOMC43xSpfG554RqWauFHqJngwUVLvbQ50ZjOMbfpT_B22TPwtM26cqGP9Tgv-HLSxU4xy0pbobaKmg9IXoBM5qZuQrgNbNanzbvrGuAkJ_I6luJtdYrTyTP6BITslZinnx4_qafLQogxSz5hbb9weD8npnZ3e7eEhHMINoP72",
    isStar: true,
  },
  {
    id: "pechuga-camarones",
    name: "Pechuga en salsa de camarones",
    category: "aves",
    categoryLabel: "Aves & Especialidades",
    price: 50000,
    description: "Cremosa, suave y llena de sabor",
    detailedDescription: "Suprema de pechuga tierna cocida a baja temperatura y bañada en abundante salsa bisque de camarones salteados con pimienta rosada y toque de vino blanco. Una joya gastronómica.",
    tag: "Especial Chef",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJsUuq5G1UW4CeHPPkkrCiEJ0LjlbrpQdg19zlhie-OJW35Oa92LyhJH-TVJ1mq233MptM_gPE58cCLQF8aH50akwUES1aTT6l_s96eSPha8vvbV75fCOnpFMiFnbmjcMG3blpjvArmuSIhgp33TtQW-Gf3cRknOyfX_4nKPm6MkV0gEUh4-W5mx6sXEW_TGxxr_EJBQaT7_imJVYeL9FqsxvOn7fP17NZbVw_5DOj5uK57Dmg6oud",
    isStar: true,
  },
  {
    id: "pechuga-gratinada",
    name: "Pechuga gratinada",
    category: "aves",
    categoryLabel: "Aves & Especialidades",
    price: 38000,
    description: "Dorada, cremosa y reconfortante",
    detailedDescription: "Filete de pechuga sazonado con mezcla secreta D' Leon, cubierto con queso mozzarella y gruyere fundidos al horno hasta lograr una costra dorada crujiente irresistible.",
    tag: "Clásico Dorado",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfTDisZUdOWaYyMBRBXgXDtVOzcEtJf0I7BrMde7V9K7TMcBmpdoWGP4enA3BDkHls7fnXMkpgezKdZCGbsFLe2N2lY7q8zVTffIWEp5Pn_xGCQ6qU4VFn5VdtHI3lkOcSAq7mzbENVqhBaORuMDIdPQvfOnWg_1U1Ddltc48NnjAMyAik3hjGCb7AMr5Mm2WtkB2Flxc3M8z1PYjZ7SXrZj1itvXXejuqtJhy2Oorr9n0moxpCJMa",
    isStar: true,
  },
  {
    id: "pechuga-hawaiana",
    name: "Pechuga hawaiana",
    category: "aves",
    categoryLabel: "Aves & Especialidades",
    price: 44000,
    description: "El equilibrio perfecto entre dulce y salado",
    detailedDescription: "Delicada pechuga dorada coronada con rodajas caramelizadas de piña miel de Santander, jamón artesanal ahumado y suave capa de queso gratinado. Acompañada de guarnición y papas finas.",
    tag: "Agridulce Selecto",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA49sCrUGAKFpYGQBae97D2EzJl7dwle_y2SSxfWbEKKZXCz2zv4MPhk4QVK0KFVpV9t066cueUqAk7VCyuif2PJnptW-x0Kz5KYTUhTnRsNeIOqbCR3kGyJ3z-8EV7vXczu6VIq3qDVj37a7alISJywHTLmIyBUmzJ5p27dS5s2_Yw2I38_GTbLAcqbWxypnZnA8QjAnQQ-MppYtLgdvY1D2YhLI7lnqtjCP32sMOjlHiqNbOauQ3h",
    isStar: true,
  },
  {
    id: "lomo-fino-champinones",
    name: "Lomo Fino en Salsa de Champiñones (300 g)",
    category: "cortes",
    categoryLabel: "Cortes Premium",
    price: 52000,
    description: "Medallón de lomo tierno bañado en salsa cremosa de setas silvestres",
    detailedDescription: "Medallón de corte noble sellado a la parrilla, con una salsa aterciopelada a base de champiñones portobello, cebollas caramelizadas y reducción de oporto.",
    tag: "Corte Gourmet",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE20GC9FiWI12STzU6Z6Fvl5D3ljdRoZhIJ6s1EBMkdTnnl_NmPP-BqnL9a1AlSOYfW9wOapwqqlfzBf2NhgCDKurNtHqZXSsI97BGGhDu_DVMdv0rGfk4X64fWyfeX5MaRWW5azS75A6TDxSW9J9pdoEq9p88ESINg0y67YU-kHrsD-TG918vMMKRDv_RGeumBRY-loS8-xXwiKvqjx2yiKdIFGg_LyVqLCl_asiCD3dcBVlYS9TYCxiirIGi1RNG0Q",
    isStar: false,
  },
  {
    id: "filete-robalo-marinero",
    name: "Filete de Robalo en Cazuela Marinera",
    category: "pescados",
    categoryLabel: "Pescados & Mariscos",
    price: 54000,
    description: "Pescado blanco bañado en guiso costeño de calamares y langostinos",
    detailedDescription: "Filete fresco cocinado suavemente al vapor con leche de coco, tomates aromatizados, calamares tiernos, palmitos y langostinos selectos.",
    tag: "Del Mar a la Mesa",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1OCTi39iSBhFDdrnZrAoCPZdTB1tZ2xNQLyliqUdFMp6Rfh7HET20fpMq3nlZ74jlkjogvH831FZGqlr1FEW8xJ5KsmOOcPUTngABVhi51OOJseERev-G3IrUBHuZBVSi1X2SDRJmj2zMjaLaqERHoE0DCPdllnBisBTt32GDvkJ3vqUNjH9EzzUus6V66_BpO_Fj0iFcgcDOCn47Au5gnPrBj1gwqv8RMAKEiiW0kc1mNM8lqgv9",
    isStar: false,
  },
  {
    id: "coctel-dleon-smoked",
    name: "Cóctel D' Leon Smoked Rosemary",
    category: "bebidas",
    categoryLabel: "Mixología & Bar",
    price: 26000,
    description: "Ahumado en mesa con rama de romero, bourbon premium y cítricos",
    detailedDescription: "Experiencia sensorial frente al comensal con campana de humo aromático de roble y romero, bourbon añejado, bitter artesanal y rodaja deshidratada de naranja.",
    tag: "Firma D' Leon",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrgve8ARAzpjO_yvTGYfA9_Ob9kYsHaQltIYTv2U2W1Kg-0sEa9BZvNdVYRSAzXGmJ2H9EhVApeauIB1kRN695YT2qAoOCziPVulz6Dsjm5KwdrHLlVbFePwC9oXYpA3A2dXY0XE7p7Nx2YB9ZKicnNu41L6TH5N3jDcfl89fERVwQN4uYewbBI1E5FX6CDhCjFEbj0mL-F4u38c0ZuXWvuBxlvApTJyHhuG5o3zHLROEu8CZWr2sb",
    isStar: false,
  },
  {
    id: "limonada-coco-hierbabuena",
    name: "Limonada de Coco & Hierbabuena Helada",
    category: "bebidas",
    categoryLabel: "Mixología & Bar",
    price: 15000,
    description: "Cremosa, frappé y elaborada con leche de coco natural y menta fresca",
    detailedDescription: "Refrescante combinación artesanal batida con hielo frappé, coco rallado fresco y gotas de limón mandarina, perfecta para el clima de Aguachica.",
    tag: "Refrescante",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrgve8ARAzpjO_yvTGYfA9_Ob9kYsHaQltIYTv2U2W1Kg-0sEa9BZvNdVYRSAzXGmJ2H9EhVApeauIB1kRN695YT2qAoOCziPVulz6Dsjm5KwdrHLlVbFePwC9oXYpA3A2dXY0XE7p7Nx2YB9ZKicnNu41L6TH5N3jDcfl89fERVwQN4uYewbBI1E5FX6CDhCjFEbj0mL-F4u38c0ZuXWvuBxlvApTJyHhuG5o3zHLROEu8CZWr2sb",
    isStar: false,
  },
  {
    id: "volcan-chocolate",
    name: "Volcán de Chocolate Fondant",
    category: "postres",
    categoryLabel: "Postres & Dulces",
    price: 18000,
    description: "Centro líquido caliente de chocolate belga con helado artesanal de vainilla",
    detailedDescription: "Bizcocho horneado al momento con núcleo fundente de chocolate al 70%, servido sobre tierra de galleta y quenelle de helado artesanal.",
    tag: "Postre de Autor",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiSXjobDYgadbdEvOgWCfdcIE1YVQRwgPnYC-dCxuOekYrtBPhurchCC-qXdG7LWu8sc-00C2L4lOdcb0YmQ2dVHpWiLrNjVVufHtQZJmZTfBpveyVuDtE1XiyUxwaZXnBbEKjby4cUnK-6vkq6Fvs5GuLikeK8nMW2TuSMcM2CrzO2h3Z_TFWadZqUqlJ1yob0Ri1xYH89Q3S8ujCgYsUYv4vfdy-UwbFDC6qsffBfNP2TAJ7zX9w",
    isStar: false,
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    name: "Carlos Mario Restrepo",
    city: "Aguachica, Cesar",
    rating: 5,
    comment: "La punta de anca estaba en su punto perfecto, tierna y con una salsa deliciosa. El ambiente en el Hotel D'Leon es inigualable y la atención de los meseros de 10 estrellas.",
    date: "Hace 3 días",
    tag: "Comensal Verificado"
  },
  {
    id: "rev-2",
    name: "Valeria Gómez de Rincón",
    city: "Bucaramanga, Santander",
    rating: 5,
    comment: "Cotizamos el catering para los quinceañeros de mi hija y superaron todas nuestras expectativas. La comida llegó a la temperatura perfecta, montaje de gala espectacular y el salmón en salsa de maracuyá fascinó a todos los invitados.",
    date: "Hace 1 semana",
    tag: "Evento Quinceañero"
  },
  {
    id: "rev-3",
    name: "Dr. Andrés Paternina",
    city: "Aguachica, Cesar",
    rating: 5,
    comment: "El mejor restaurante para cenas de negocios y ocasiones especiales en Aguachica. La pechuga en salsa de camarones y los cócteles de autor son una parada obligatoria.",
    date: "Hace 2 semanas",
    tag: "Cena Corporativa"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Punta de Anca Madurada",
    category: "platos",
    categoryLabel: "Platos de Autor",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE20GC9FiWI12STzU6Z6Fvl5D3ljdRoZhIJ6s1EBMkdTnnl_NmPP-BqnL9a1AlSOYfW9wOapwqqlfzBf2NhgCDKurNtHqZXSsI97BGGhDu_DVMdv0rGfk4X64fWyfeX5MaRWW5azS75A6TDxSW9J9pdoEq9p88ESINg0y67YU-kHrsD-TG918vMMKRDv_RGeumBRY-loS8-xXwiKvqjx2yiKdIFGg_LyVqLCl_asiCD3dcBVlYS9TYCxiirIGi1RNG0Q",
    description: "Cortes de carne madurados al carbón servidos con espirales de reducción demi-glace y guarnición de la huerta."
  },
  {
    id: "gal-2",
    title: "Servicio Cordial & Maître",
    category: "salon",
    categoryLabel: "Ambientes & Salón",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ1BnMu4Fjtq4oqgg31aej9pYYLSUjaD6HytUtfIbX-YwVFhjiS6H7gx3IWajNtdFoJuaJAm6Kwv0Hty40gdQj-rXo16FhFfFHN3Q4SyQo48ssub6xBBAo7vAq2IWQRnPBuXtanXsJthI1qRZV0AdJuyl7yERalV-Gij5GPcmevrok0DjS7dGTjAYlyYMWoiwwPePC8MPXrG1CfrM0WdhKUAWw7KLnHxwD4MjuzWQNHJshkqOMIaRv_9L5WG_uxS5SFQ",
    description: "Hospitalidad cálida y servicio personalizado en nuestro salón principal decorado con vegetación cenital."
  },
  {
    id: "gal-3",
    title: "Montaje de Mesa Sofisticado",
    category: "eventos",
    categoryLabel: "Eventos & Banquetes",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiSXjobDYgadbdEvOgWCfdcIE1YVQRwgPnYC-dCxuOekYrtBPhurchCC-qXdG7LWu8sc-00C2L4lOdcb0YmQ2dVHpWiLrNjVVufHtQZJmZTfBpveyVuDtE1XiyUxwaZXnBbEKjby4cUnK-6vkq6Fvs5GuLikeK8nMW2TuSMcM2CrzO2h3Z_TFWadZqUqlJ1yob0Ri1xYH89Q3S8ujCgYsUYv4vfdy-UwbFDC6qsffBfNP2TAJ7zX9w",
    description: "Vajilla de alta gama, copas de cristal y cubertería dorada para ocasiones que demandan distinción."
  },
  {
    id: "gal-4",
    title: "Mixología & Bebidas de Autor",
    category: "mixologia",
    categoryLabel: "Mixología",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrgve8ARAzpjO_yvTGYfA9_Ob9kYsHaQltIYTv2U2W1Kg-0sEa9BZvNdVYRSAzXGmJ2H9EhVApeauIB1kRN695YT2qAoOCziPVulz6Dsjm5KwdrHLlVbFePwC9oXYpA3A2dXY0XE7p7Nx2YB9ZKicnNu41L6TH5N3jDcfl89fERVwQN4uYewbBI1E5FX6CDhCjFEbj0mL-F4u38c0ZuXWvuBxlvApTJyHhuG5o3zHLROEu8CZWr2sb",
    description: "Técnicas de coctelería contemporánea con ahumados artesanales e infusiones botánicas."
  },
  {
    id: "gal-5",
    title: "Salmón Tropical con Maracuyá",
    category: "platos",
    categoryLabel: "Platos de Autor",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcb2xbHlolPSq_riOgioozouoVEptxlG8Pnp5a2JUtRbHiXfOtQng97quIjbjIA4kAiPUV9WNdlBYOMC43xSpfG554RqWauFHqJngwUVLvbQ50ZjOMbfpT_B22TPwtM26cqGP9Tgv-HLSxU4xy0pbobaKmg9IXoBM5qZuQrgNbNanzbvrGuAkJ_I6luJtdYrTyTP6BITslZinnx4_qafLQogxSz5hbb9weD8npnZ3e7eEhHMINoP72",
    description: "Filete de salmón fresco con reducción de maracuyá de la región sobre lecho de puré y vegetales."
  },
  {
    id: "gal-6",
    title: "Salón para Celebraciones Exclusivas",
    category: "eventos",
    categoryLabel: "Eventos & Banquetes",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFa0c808RbSczfNtEX8JSFTU_VtK-WTJTwlnv49RqPWzOn9lKMScFyH9z53tW1HLexTqIQpqnRLTgX6mG0itvnu8KYJxlnwfxHfpTvzXllU9Gtnvosg012ur9BzMPjejGe29zRFzwlwlA0t_DJq5BKR89zKOumYIcdgGuyR7V86M-vBSsLPF0Y_JbME7cwhCPzbpX8uqFrxktK2H8V2joY-Ve9rD7sIuTpmN-BQ3HPHb1irDNOp2eL",
    description: "Luminarias circulares de diseño, climatización y espacios adaptables para banquetes y agasajos privados."
  }
];

export const FAQ_ITEMS = [
  {
    question: "¿Cómo reservo una mesa en D' Leon?",
    answer: "Puedes hacerlo directamente a través de nuestro módulo interactivo de reservas en esta aplicación o enviándonos un mensaje por WhatsApp con la fecha, la hora y el número de comensales. Recibirás tu confirmación de mesa de inmediato."
  },
  {
    question: "¿Hacen catering para eventos fuera del restaurante?",
    answer: "¡Sí! Atendemos quinceañeros, bodas, aniversarios, fiestas privadas y eventos de empresas tanto en nuestro salón exclusivo en Aguachica como a domicilio en fincas, salones o empresas en la región del Cesar y Santanderes. Llevamos vajilla, menaje, meseros y estaciones de comida caliente."
  },
  {
    question: "¿Cuál es el horario de atención?",
    answer: "Lunes a viernes de 11:30 a. m. a 1:45 p. m. y de 6:00 p. m. a 9:45 p. m. Sábados, domingos y festivos de 11:30 a. m. a 9:45 p. m. en jornada continua."
  },
  {
    question: "¿Tienen opciones para personas con restricciones dietarias?",
    answer: "Sí, podemos preparar opciones libres de gluten, platos vegetarianos y adaptaciones de salsas según alérgenos. Solo avísanos al hacer tu reserva o a nuestro mesero al ordenar."
  },
  {
    question: "¿Dónde están ubicados exactamente?",
    answer: "Nos encontramos en la Carrera 30 #5-21, dentro de las instalaciones del Hotel D'Leon en Aguachica, Cesar. Contamos con ambiente climatizado, estacionamiento y seguridad para tu tranquilidad."
  }
];

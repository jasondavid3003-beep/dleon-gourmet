---
tipo: catalogo-de-fuentes
estado: vigente
creado: 2026-10-28
actualizado: 2026-10-28
tags: [fuentes, activos, documentos]
fuentes: ["Docs/", "Imagenes/", "d'-leon-gourmet---restaurante-&-catering.zip", "sitio-web/"]
---

# Documentos y activos

`Docs/` es la bandeja de originales empresariales. Al inicio estaba ausente y ahora existe vacía; se pueden depositar allí documentos, logos, fotos, catálogos y referencias. Se conservarán originales en su ruta. No hay copias de trabajo en `Docs/organizados/`; no hacen falta para los materiales actuales. `fuentes/` no existe y no se crea para duplicar `Docs/`.

## Originales empresariales recibidos en `Imagenes/`
Revisión visual realizada. Las descripciones se limitan a lo visible; la autorización de uso en el sitio queda pendiente. No se copiaron al código.

| Ruta y archivo | Categoría y descripción observada | Fecha/versión | Uso posible / pendiente |
|---|---|---|---|
| `Imagenes/2.jpeg` | Instalaciones/equipo: mesero con bandeja en salón con mesas y vegetación. | No consta | Sección de equipo/ambiente; confirmar permiso de imagen. |
| `Imagenes/3.jpeg` | Identidad visual: logo D' Leon Gourmet Restaurante, negro sobre fondo claro. | No consta | Logo del sitio; confirmar variante aprobada. |
| `Imagenes/baby beef.jpg` | Platos: carne en salsa con guarnición. | No consta | Carta/galería; validar nombre comercial. |
| `Imagenes/coctel camaron.jpg` | Platos: cóctel de camarón con aguacate y chips; texto gráfico “coctel de camaron”. | No consta | Carta/galería; revisar ortografía de la pieza si se publica. |
| `Imagenes/fettuccini carbonara.jpg` | Platos: pasta cremosa; pieza gráfica “Fettuccine Carbonara”. | No consta | Carta/galería; confirmar receta y nombre. |
| `Imagenes/FILLET SELVATICO.jpg` | Platos: carne y camarones sobre pasta; pieza “Filet Selvático”. | No consta | Carta/galería; confirmar ortografía/nombre. |
| `Imagenes/gente comiendo.jpg` | Clientes/experiencia: adulto y niña comiendo; logo visible al pie. | No consta | Ambiente; confirmar consentimiento de las personas identificables. |
| `Imagenes/NENA.jpg` | Clientes/eventos: mujer junto a torta y decoración de cumpleaños. | No consta | Celebraciones; confirmar permiso y pertinencia. |
| `Imagenes/parrillada.jpg` | Platos: parrillada mixta con acompañamientos; texto gráfico “Parrillada Selvática”. | No consta | Carta/galería; validar nombre. |
| `Imagenes/pechuga en camarones.jpg` | Platos: pechuga con pasta en salsa de camarones; texto gráfico. | No consta | Carta/galería; validar nombre. |
| `Imagenes/pechuga.jpg` | Platos: pechuga, papas y ensalada. | No consta | Carta/galería; validar nombre. |
| `Imagenes/punta de anca.jpg` | Platos: carne y vegetales; pieza gráfica “Punta de Anca”. | No consta | Carta/galería; validar nombre. |
| `Imagenes/trucha y salmon.jpg` | Platos: preparación de pescado y acompañamientos. | No consta | Carta/galería; confirmar si corresponde a trucha y salmón. |
| `Imagenes/trucha.jpg` | Platos: trucha con patacones, arroz y bebida. | No consta | Carta/galería; validar presentación. |
| `Imagenes/vino.jpg` | Equipo/oferta: empleada junto a botella de vino y logo D' Leon. | No consta | Equipo/bar; confirmar permiso de imagen y vigencia del producto. |
| `Imagenes/WhatsApp Image 2026-10-08 at 3.03.23 PM.jpeg` | Platos: persona sirviendo un plato de carne; otra hamburguesa al fondo. | Nombre indica 2026-10-08; metadatos no revisados | Posible hero o galería; revisar encuadre/privacidad antes de elegir. |

## Fuentes del proyecto
- `d'-leon-gourmet---restaurante-&-catering.zip` — original inmutable recibido, 157 580 bytes. El archivo contiene la app de D' Leon (identificado por `metadata.json` y el contenido). No editar ni reemplazar. Copia extraída en `sitio-web/` tras validar rutas y ausencia de enlaces simbólicos.
- `sitio-web/src/data/restaurantData.ts` — texto/código de la app: contacto, menú, precios, testimonios, galería y FAQ. Es evidencia de la versión descargada, pero varios hechos son provisionales y están listados en [[pendientes]].
- `sitio-web/src/components/` — componentes de navegación, hero, secciones de landing, carta, reserva, cotizador, carrito, WhatsApp y pie de página; constituyen la implementación actual.
- `sitio-web/src/App.tsx`, `sitio-web/index.html`, `sitio-web/src/index.css`, `sitio-web/src/main.tsx`, `sitio-web/vite.config.ts`, `sitio-web/tsconfig.json` — estructura y configuración visible de la app.
- `sitio-web/package.json` — manifiesto React/TypeScript/Vite; se ajustó `esbuild` a `^0.27.0` por incompatibilidad con el rango original y se generó `sitio-web/package-lock.json` al instalar.
- `sitio-web/.env.example` — plantilla de variables Gemini y URL; no contiene credenciales reales. No hay `.env` proporcionado.
- `sitio-web/README.md` y `sitio-web/metadata.json` — referencias del export de Google AI Studio; el README menciona una API key Gemini, pero la app inspeccionada no necesita configurarla para los flujos de página encontrados.
- `AGENTS.md` y `wiki/` — instrucciones y conocimiento de trabajo creados en este arranque; no son fuentes comerciales originales.

## Duplicados, versiones y revisión
- **No se detectaron duplicados exactos** entre las fotos por nombre; no se compararon hashes ni metadatos EXIF.
- No hay originales dentro de `Docs/` todavía. Al agregar archivos, registrar cada ruta original, su descripción, versión/fecha visible, uso posible y pendientes. Para organizarlos físicamente, hacer solo copias útiles bajo `Docs/organizados/` y enlazar aquí el original.
- No se han seleccionado activos ni creado copias de publicación en `sitio-web/public/`.

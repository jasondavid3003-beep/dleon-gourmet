---
tipo: pendientes
estado: abierto
creado: 2026-10-28
actualizado: 2026-10-28
tags: [pendientes, validacion, sitio]
fuentes: ["sitio-web/src/data/restaurantData.ts", "sitio-web/src/components/TestimonialsSection.tsx", "sitio-web/src/components/ReservationView.tsx"]
---

# Pendientes

## Validación del negocio antes de publicar
- **Pendiente:** confirmar WhatsApp `+57 321 538 0515` y `reservas@dleonrestaurante.com`; aparecen en el código, no en una fuente empresarial independiente.
- **Pendiente:** validar dirección, horario, precios y disponibilidad de los platos. La app incluye afirmaciones de ubicación/servicio, y precios en COP; no asumir que siguen vigentes.
- **Pendiente prioritario:** validar que los tres testimonios de `sitio-web/src/data/restaurantData.ts` sean reales, autorizados y aprobados. No agregar ni presentar testimonios no verificados.
- **Pendiente:** revisar afirmaciones de reserva confirmada inmediatamente, horarios, restricciones alimentarias, estacionamiento, seguridad, cobertura de catering y servicios incluidos.
- **Pendiente:** permisos para fotos de personas identificables (`gente comiendo.jpg`, `NENA.jpg`, `vino.jpg`, `2.jpeg`, foto WhatsApp). El uso no está autorizado por la mera presencia del archivo.
- **Pendiente:** elegir las fotos reales que sustituirán imágenes externas de AI Studio. El sitio aún referencia imágenes `googleusercontent.com`; no se han hecho reemplazos.

## Puesta en marcha
- **Comprobado:** dependencias instaladas con npm; se generó `sitio-web/package-lock.json` y se ajustó `esbuild` a rango compatible con Vite 8.
- **Comprobado:** `npm run build` y `npm run lint` pasan. Advertencias: Vite señala `__dirname` en `vite.config.ts`; npm reporta una vulnerabilidad de severidad baja y scripts opcionales de dependencias no ejecutados.
- **Comprobado parcialmente:** servidor local abre en `http://localhost:3000/`; se revisaron las vistas de escritorio y móvil. El botón principal abre el formulario de reserva, pero el envío no se probó.
- **Pendiente:** probar el cotizador y revisar los destinos de WhatsApp, sin enviar mensajes reales ni formularios al negocio.
- **Pendiente:** corregir o aceptar el solapamiento del botón flotante de WhatsApp sobre el título de platos en móvil.
- **Pendiente:** primer commit local. El repositorio se inicializó, pero Git no tiene `user.name` ni `user.email` configurados; se necesita la identidad deseada para este proyecto.
- **Confirmado no publicado:** no se detectó despliegue ni destino de publicación. No publicar sin autorización explícita.

Al recibir datos o autorizaciones, actualizar [[empresa]], [[documentos-y-activos]], [[estado-del-proyecto]] y [[log]].

---
tipo: log
estado: vigente
creado: 2026-10-28
actualizado: 2026-10-28
tags: [log, cronologia]
fuentes: ["Instrucciones del propietario, 2026-10-28", "carpeta PAGINA", "sitio-web/"]
---

# Registro cronológico

## [2026-10-28] arranque | Inventario y configuración inicial
- Localizada una única fuente comprimida de D' Leon Gourmet; rutas validadas antes de extracción. Original preservado; copia del proyecto en `sitio-web/`.
- Identificado React 19 + TypeScript + Vite 8, con componentes de landing, carta, reserva, eventos, carrito y WhatsApp.
- Confirmada disponibilidad de Node.js v24.22.0, npm 11.19.1 y Git 2.56.0; faltan instalación de dependencias y verificaciones.
- Revisadas visualmente las 15 imágenes originales de `Imagenes/`; no se copiaron al sitio ni se descartaron.
- Creado `Docs/` como bandeja vacía, `AGENTS.md` y wiki inicial. Datos comerciales del código marcados provisionales/pendientes; testimonios y permisos de imagen requieren validación.
- Estado de Git inicial: la carpeta no era repositorio. Primera modificación solicitada por el propietario: pendiente.

Ver [[estado-del-proyecto]], [[documentos-y-activos]] y [[pendientes]].

## [2026-10-28] configuracion | Dependencias y vista previa local
- npm rechazó el rango original `esbuild ^0.25.0` porque Vite 8 requiere `^0.27.0` o `^0.28.0`; actualizado a `^0.27.0`, instalado y guardado lockfile.
- `npm run build` y `npm run lint` terminan correctamente. Advertencias: `__dirname` en configuración de Vite, 1 vulnerabilidad baja en auditoría npm y scripts opcionales de dependencias sin ejecutar.
- Servidor Vite iniciado en `http://localhost:3000/`; revisada la página en escritorio y móvil. El CTA abre el formulario de reserva; no se completaron datos ni se envió una reserva.
- Observado que el botón flotante de WhatsApp tapa parcialmente el título de platos en móvil. Se deja como sugerencia de cambio, sin modificar el diseño aún.
- Git local inicializado sin commit porque falta configurar `user.name` y `user.email`; no se alteró la configuración global.

Ver [[estado-del-proyecto]], [[decisiones]] y [[pendientes]].

## [2026-10-28] versionado | Primer commit local
- El propietario proporcionó `jasondavid3003-beep` y `jasondavid3003@gmail.com` para la autoría local.
- Creado el commit `d71bbf2` (`Configura agente y prepara landing de D' Leon`) con 40 archivos del sitio, configuración y wiki.
- El ZIP, `Imagenes/`, los originales de `Docs/`, `node_modules`, salidas compiladas y secretos no se incluyeron. Sin subida a remoto.

Ver [[estado-del-proyecto]], [[pendientes]] y [[documentos-y-activos]].

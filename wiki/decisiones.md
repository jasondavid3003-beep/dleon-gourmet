---
tipo: decisiones
estado: vigente
creado: 2026-10-28
actualizado: 2026-10-28
tags: [decisiones, proyecto]
fuentes: ["Instrucciones del propietario, 2026-10-28", "d'-leon-gourmet---restaurante-&-catering.zip", "Imagenes/"]
---

# Decisiones

- **2026-10-28 — Conservar la aplicación React existente y extraerla en `sitio-web/`.** Motivo: la carpeta contenía un solo ZIP de D' Leon, que integra la landing y vistas adicionales. El original queda intacto. Fuente: inventario y validación del ZIP.
- **2026-10-28 — Usar `Docs/` como entrada de fuentes originales y mantener catálogo/wiki fuera de ella.** Motivo: separar originales de resúmenes; no había `Docs/`, así que se creó vacía. Fuente: instrucción del propietario.
- **2026-10-28 — No copiar aún las fotos a la aplicación.** Motivo: hace falta seleccionar el uso de cada foto y validar permisos para las personas identificables; los originales permanecen en `Imagenes/`. Fuente: revisión visual del catálogo.
- **2026-10-28 — Tratar como pendientes de confirmación los datos de negocio hallados solo en el código.** Motivo: el código exportado no confirma vigencia ni aprobación. Fuente: `sitio-web/src/data/restaurantData.ts` y reglas del propietario.
- **2026-10-28 — Proteger `Docs/`, `Imagenes/`, archivos `.env` y el ZIP fuente de commits mediante `.gitignore`.** Motivo: evitar publicar originales, privacidad, secretos o archivos fuente; versionar instrucciones, wiki y código de trabajo.
- **2026-10-28 — Actualizar `esbuild` de `^0.25.0` a `^0.27.0`.** Motivo: la instalación resolvió Vite 8.3.5, que exige `esbuild ^0.27.0 || ^0.28.0`; npm rechazó el rango anterior. `npm install` y `npm run build` pasaron después del ajuste. Fuente: error ERESOLVE de npm y manifiesto del proyecto.
- **2026-10-28 — Dejar pendiente ajustar el botón flotante de WhatsApp en móvil.** Motivo: la vista en móvil muestra superposición parcial con el título “Nuestros platos estrella”; como el propietario aún no eligió esta primera mejora, no se cambió el diseño. Fuente: revisión visual local.

Ver [[empresa]], [[pendientes]] y [[estado-del-proyecto]].

---
tipo: estado
estado: en-preparacion-local
creado: 2026-10-28
actualizado: 2026-10-28
tags: [proyecto, estado, ejecucion]
fuentes: ["sitio-web/package.json", "sitio-web/README.md", "AGENTS.md"]
---

# Estado del proyecto

## Qué hay
- **Confirmado en archivos:** carpeta de trabajo `PAGINA`; proyecto fuente recibido como `d'-leon-gourmet---restaurante-&-catering.zip`, conservado intacto. Extracción segura en `sitio-web/`.
- **Confirmado en código:** React 19, TypeScript y Vite 8; una landing y vistas para carta, reserva, cotización de eventos y pedidos.
- **Confirmado en este equipo:** Node.js v24.22.0, npm 11.19.1 y Git 2.56.0.
- **Comprobado:** `npm install` terminó y creó `sitio-web/package-lock.json`. Hubo que corregir `esbuild` de `^0.25.0` a `^0.27.0` porque Vite 8 requiere `^0.27.0` o `^0.28.0`.
- **Comprobado:** `npm run build` compila y `npm run lint` (`tsc --noEmit`) termina sin errores. Vite avisa que `__dirname` no está soportado por su `configLoader: 'native'` actual; la compilación aun así pasa. npm reportó una vulnerabilidad de severidad baja y avisó que algunos scripts opcionales de dependencias no se ejecutaron.
- **Vista previa local:** Vite responde en `http://localhost:3000/`. Revisada visualmente en escritorio (1440 × 900) y móvil (ventana predeterminada angosta). El CTA “Reservar mi mesa” abre el formulario local; no se envió ni registró ninguna reserva. En móvil, el botón flotante de WhatsApp se superpone parcialmente al título “Nuestros platos estrella”.
- **Repositorio remoto:** `origin` apunta a `https://github.com/jasondavid3003-beep/dleon-gourmet.git`; rama local `main`. GitHub no mostró ramas publicadas en la consulta.
- **Push:** completado. GitHub aceptó `main` en `origin/main`; último commit publicado `0b9d957`. Git quedó configurado para seguimiento upstream.
- **Sitio público:** pendiente; subir código a GitHub no demuestra que la página esté desplegada.
- **Git:** primer commit local `d71bbf2` (`Configura agente y prepara landing de D' Leon`), con 40 archivos. Autor indicado por el propietario: `jasondavid3003-beep <jasondavid3003@gmail.com>`. No se subió a ningún remoto. `.gitignore` excluye `Docs/`, `Imagenes/`, el ZIP, secretos, dependencias y salidas compiladas.

## Ejecución
Desde `PAGINA/`: `npm --prefix sitio-web run dev`. Servidor actualmente iniciado en el puerto 3000. Comandos comprobados: `npm --prefix sitio-web run build` y `npm --prefix sitio-web run lint`.

## Siguiente paso
Confirmar los datos comerciales pendientes antes de dar por finalizados los contenidos; decidir si se corrige el solapamiento del botón flotante en móvil y proporcionar nombre/correo de autor para el primer commit local. Ver [[pendientes]] y [[documentos-y-activos]].

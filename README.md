
# Suilaft — Página web corporativa

Página web oficial de **Suilaft**, desarrollada por **Grupo Consulteg**.

Este repositorio contiene la implementación del sitio corporativo de Suilaft: diseño, componentes React y animaciones de entrada (splash screen) que presentan la identidad visual y las capacidades de automatización e IA.

## Estado

- Proyecto en la rama `dev_mt` para desarrollo y pruebas.
- Sitio construido con Vite + React + TypeScript y Tailwind CSS.

## Características principales

- Landing corporativa responsive y accesible.
- Componentes UI reutilizables (botones, tarjetas, formularios, navbar, footer).
- Sección de productos y soluciones con visualizaciones y animaciones.
- Splash screen animado con partículas que forman el logo.
- Animaciones de interacción usando `framer-motion`.

## Estructura del proyecto

- `index.html` — Punto de entrada HTML.
- `src/main.tsx` — Inicializador de React.
- `src/app/` — Rutas y páginas (Home, Solutions, About, Contact, NotFound).
- `src/app/components/` — Componentes de layout y UI.
- `src/app/pages/` — Páginas principales del sitio.
- `src/styles/` — Hojas de estilo y configuración de Tailwind.

## Requisitos

- Node.js v16+ (recomendado)
- npm o pnpm

## Instalación y desarrollo

1. Clona el repositorio:

```bash
git clone https://github.com/Karolpineda/WebPage_Suilaft.git
cd WebPage_Suilaft
git checkout dev_mt
```

2. Instala dependencias:

```bash
npm install
```

3. Levanta el servidor de desarrollo:

```bash
npm run dev
```

4. Generar build de producción:

```bash
npm run build
```

5. Servir build de producción (preview):

```bash
npm run preview
```

## Personalización rápida

- Los colores y variables principales están en `src/styles/theme.css` y en la configuración de Tailwind.
- El componente del splash screen está en `src/app/components/ui/SplashScreen.tsx`.
- El logo/sello se encuentra en `src/app/components/layout/Navbar.tsx` (SVG embebido).

## Contribuciones

Si deseas contribuir, crea una rama a partir de `dev_mt`, realiza cambios y abre un pull request hacia `dev_mt`. Mantén las PRs pequeñas y con una descripción clara de los cambios.

## Autor y créditos

- Desarrollo: Milton Toapanta
- Diseño e identidad visual: Grupo Consulteg / Equipo Suilaft

## Licencia

Propiedad de Grupo Consulteg. Todos los derechos reservados.

---
Para dudas o soporte, contacta al equipo de desarrollo.

---
name: carlosacostarocha.com
description: Un cuaderno de producción sobre ingeniería, IA y sistemas reales.
colors:
  cobalt-signal: "oklch(54% 0.19 260)"
  cool-field: "oklch(97% 0.004 260)"
  cool-surface: "oklch(93% 0.006 260)"
  graphite: "oklch(22% 0.008 260)"
  graphite-muted: "oklch(45% 0.012 260)"
  graphite-line: "oklch(84% 0.008 260)"
  night-field: "oklch(20% 0.008 260)"
  night-surface: "oklch(26% 0.01 260)"
  night-ink: "oklch(94% 0.005 260)"
typography:
  display:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(2.875rem, 4.6vw, 4.25rem)"
    fontWeight: 560
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(2.375rem, 5vw, 4.5rem)"
    fontWeight: 560
    lineHeight: 1
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Geist Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.1em"
rounded:
  precise: "3px"
spacing:
  compact: "8px"
  standard: "16px"
  section: "clamp(5rem, 10vw, 9.375rem)"
components:
  button-primary:
    backgroundColor: "{colors.cobalt-signal}"
    textColor: "{colors.cool-field}"
    rounded: "{rounded.precise}"
    padding: "0 21px"
    height: "48px"
  feature-surface:
    backgroundColor: "{colors.cool-surface}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.precise}"
    padding: "28px"
---

# Design System: carlosacostarocha.com

## Overview

**Creative North Star: "El cuaderno de producción"**

El sitio se siente como el cuaderno de un ingeniero que ya ha operado sistemas reales: preciso, material y suficientemente abierto para explicar decisiones. La composición combina grandes zonas de respiración con bloques de evidencia concentrada. El papel, el aluminio y el hilo azul de las imágenes convierten procesos abstractos en objetos tangibles.

No es marketing genérico de herramientas de IA, un portafolio pretencioso ni un currículum corporativo denso. Cada decisión visual debe facilitar que la experiencia y el pensamiento sean encontrados, entendidos y recordados.

**Key Characteristics:**

- Geometría precisa y asimetría controlada.
- Cobalto reservado para enlaces, acciones y señales importantes.
- Tipografía sans de peso medio con ritmo amplio.
- Evidencia cuantitativa presentada con contexto.
- Modo claro y oscuro con la misma jerarquía.

## Colors

Una paleta de grafito, aluminio y cobalto tomada de los materiales de las imágenes principales.

### Primary

- **Cobalto de señal:** acción primaria, enlaces activos, foco y pequeños puntos de énfasis. Nunca decora superficies completas.

### Neutral

- **Campo frío:** fondo principal en modo claro.
- **Superficie de aluminio:** agrupaciones y secciones secundarias.
- **Grafito:** texto principal y estructura.
- **Grafito atenuado:** texto secundario con contraste AA.
- **Línea de ensamblaje:** separadores funcionales.
- **Campo nocturno, superficie nocturna y tinta nocturna:** equivalentes para el modo oscuro.

### Named Rules

**The Cobalt Signal Rule.** El cobalto aparece solo donde hay una acción, un enlace o una evidencia que merece atención.

**The One Material Rule.** Cada página usa una sola familia de superficies. No alterna entre mundos cromáticos inconexos.

## Typography

**Display Font:** Geist (con Arial y sans-serif)
**Body Font:** Geist (con Arial y sans-serif)
**Label/Mono Font:** Geist Mono (con monospace)

**Character:** Una sola familia principal evita teatralidad y deja que la precisión de escala, peso y espaciado comunique experiencia. El mono se limita a fechas, metadatos y señales técnicas.

### Hierarchy

- **Display** (560, fluido hasta 68px, 0.98): una sola declaración dominante por página.
- **Headline** (560, fluido hasta 72px, 1): títulos de secciones editoriales.
- **Title** (540-600, 23-34px, 1.2): proyectos, cargos y artículos.
- **Body** (400, 16-19px, 1.6-1.8): prosa con máximo de 70 caracteres por línea.
- **Label** (600, 12px, 0.1em): rol y metadatos breves. No se repite como encabezado en cada sección.

### Named Rules

**The Four Percent Rule.** Ningún titular usa espaciado menor que -0.04em.

**The Reading Width Rule.** La prosa larga nunca supera 70ch.

## Elevation

El sistema es plano por defecto. La profundidad se comunica con cambios tonales, recortes fotográficos y separadores de un píxel; no hay sombras ambientales decorativas.

### Named Rules

**The Flat Evidence Rule.** Si una caja necesita una sombra para parecer importante, la jerarquía está mal resuelta.

## Components

### Buttons

- **Shape:** esquinas precisas (3px).
- **Primary:** cobalto con tinta clara, altura de 48px y padding horizontal de 21px.
- **Hover / Focus:** cambio leve de luminancia y anillo de foco visible. El estado activo baja un píxel.
- **Secondary / Ghost:** enlace textual con línea inferior y flecha de salida cuando corresponde.

### Cards / Containers

- **Corner Style:** casi recto (3px).
- **Background:** campo principal o superficie de aluminio.
- **Shadow Strategy:** ninguna sombra.
- **Border:** una sola línea funcional cuando separa contenido.
- **Internal Padding:** 28px para módulos compactos; las secciones editoriales usan espacio externo.

### Navigation

La navegación de escritorio es una línea de texto sobria dentro de un encabezado de 68px. En móvil se convierte en una barra inferior persistente con tres destinos. El nombre corto permanece arriba para identidad y retorno al inicio.

### Evidence Row

Los resultados usan números grandes acompañados por una frase que explica su significado. Nunca se presentan como puntuaciones, barras de progreso o estadísticas sin procedencia.

## Do's and Don'ts

### Do:

- **Do** usar evidencia real del currículum y enlazar el contexto que la sustenta.
- **Do** mantener el cobalto limitado a acciones, enlaces y foco.
- **Do** alternar densidad: declaraciones amplias seguidas por detalle concentrado.
- **Do** conservar contraste WCAG AA y estados de foco visibles.
- **Do** usar imágenes materiales reales para representar procesos abstractos.

### Don't:

- **Don't** usar marketing genérico de herramientas de IA con neón, gradientes púrpura, robots o cerebros.
- **Don't** crear portafolios pretenciosos que priorizan frases poéticas sobre evidencia.
- **Don't** convertir la trayectoria en un currículum corporativo denso o una lista interminable.
- **Don't** publicar métricas sin fuente, habilidades infladas o afirmaciones imposibles de verificar.
- **Don't** usar sombras grandes, esquinas de 24px o más, glassmorphism o texto con gradiente.
- **Don't** repetir etiquetas pequeñas en mayúsculas sobre cada encabezado.

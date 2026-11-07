---
name: langchain-soft-ui
description: Applique le design system minimaliste "Soft Obsidian" inspiré de LangChain et LangGraph Studio. Utiliser pour toute création ou modification de composants UI, couleurs, typographie et mise en page du portfolio.
---

# LangChain & LangGraph Soft Design System

Lorsque tu crées ou modifies l'interface du portfolio de Nchourupouo Mohamed, respecte strictement ces règles visuelles :

## 1. Palette de couleurs (Tokens Tailwind / CSS)
- **Background Principal** : `#030710` (Obsidian doux) avec un motif de grille de points subtil (`radial-gradient(#1e293b 1px, transparent 1px)` avec `background-size: 24px 24px`) rappelant le canevas de LangGraph Studio.
- **Lueur d'ambiance (Ambient Glow)** : Un halo très doux et flou (`blur-3xl`, opacité `15%`) en haut de page mêlant `#1C3C3C` (vert historique LangChain) et `#0F2942`.
- **Surface des Cartes (Bento Cards)** : `#0F172A/60` avec `backdrop-blur-md`.
- **Bordures** : Ultra-fines `1px solid rgba(127, 200, 255, 0.10)`. Au survol (`hover`), transition douce vers `rgba(127, 200, 255, 0.35)`.
- **Accents** :
  - Primaire (Bleu LangChain) : `#7FC8FF`
  - Secondaire (Émeraude LangGraph) : `#2DD4BF`
- **Texte** : Jamais de blanc pur `#FFFFFF` agressif. Utiliser `#F1F5F9` (Slate 100) pour les titres et `#94A3B8` (Slate 400) pour le corps de texte.

## 2. Typographie & Composants
- Police principale : `Inter` ou `Plus Jakarta Sans`.
- Police technique (Tags, pipelines d'agents, métriques) : `JetBrains Mono`.
- Chaque projet IA doit afficher un mini-graphe de nœuds horizontal (ex: `[Input] ➔ [LangGraph] ➔ [FastAPI]`) stylisé comme des nœuds LangGraph.
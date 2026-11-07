---
name: gif-png-simulation-studio
description: Gère l'affichage des projets IA/Data. Encapsule les simulations en .gif ou .png dans une interface interactive "Studio Mode" (fenêtre navigateur/terminal + modale plein écran) lorsque le projet n'est pas hébergé en ligne.
---

# Simulation Studio Showcase (GIF & PNG)

Certains projets IA/Big Data de Mohamed (ex: détection de fraude au BUNEC, dashboards Hydro-Mekin, fine-tuning LLM) ne sont pas hébergés publiquement pour des raisons de coûts GPU ou de confidentialité, et utilisent des simulations `.gif` ou `.png` stockées dans `/public/demos/`.

## Règles d'implémentation obligatoires :
1. **Dossier dédié** : Toutes les captures et animations doivent être lues depuis `/demos/<nom-du-fichier>.gif` ou `.png`.
2. **Encapsulation visuelle (Mockup Browser/Terminal)** :
   - Ne jamais afficher un `.gif` ou `.png` brut.
   - Toujours l'encadrer dans une fenêtre style "LangSmith / macOS" avec une barre supérieure sombre contenant 3 petits points (`#EF4444`, `#F59E0B`, `#10B981`) et une barre d'adresse en police monospace (ex: `langgraph://cleeroute-agent/v1` ou `pytorch://bunec-fraud-detector/eval`).
3. **Comportement Hybride des Boutons d'Action** :
   - Si un projet possède une URL live (`liveUrl != null`), afficher le bouton `🚀 Démo Live` (ouvre l'URL).
   - Si le projet est une simulation (`liveUrl == null` et `simulationMedia != null`), afficher un bouton `▶️ Lancer la Simulation` (avec une icône Play émeraude `#2DD4BF`).
4. **Modale Interactive "Mode Studio" (Lightbox)** :
   - Cliquer sur `▶️ Lancer la Simulation` ou sur l'aperçu ouvre une modale fluide (Framer Motion) affichant le `.gif` ou `.png` en grand format haute définition, accompagné à droite du pipeline d'architecture et des métriques clés du projet.
5. **Fallback Intelligent** :
   - Si le fichier `.gif` ou `.png` n'est pas encore présent dans `/public/demos/`, afficher automatiquement un canevas animé élégant simulant l'exécution du graphe IA pour qu'il n'y ait jamais d'image cassée (erreur 404).
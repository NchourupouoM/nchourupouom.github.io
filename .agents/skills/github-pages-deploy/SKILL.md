---
name: github-pages-deploy
description: Configure le build Vite/React et le workflow GitHub Actions pour déployer automatiquement le portfolio à la racine de https://nchourupouom.github.io.
---

# Déploiement Automatisé sur NchourupouoM.github.io

Ce dépôt est un site utilisateur GitHub Pages (`NchourupouoM.github.io`).

## Protocole de configuration :
1. **Configuration Vite (`vite.config.js`)** :
   - Toujours définir `base: '/'` car le site est hébergé à la racine de `https://nchourupouom.github.io/`.
2. **Chemins des fichiers statiques** :
   - Toujours utiliser des chemins relatifs propres pour les images/GIFs dans `/public/demos/` et le CV dans `/public/CV_Nchourupouo_Mohamed.pdf`.
3. **GitHub Actions CI/CD (`.github/workflows/deploy.yml`)** :
   - Générer un fichier `.github/workflows/deploy.yml` officiel qui écoute les `push` sur la branche `main`, exécute `npm ci && npm run build`, et déploie automatiquement le dossier `dist/` sur GitHub Pages via `actions/deploy-pages@v4`.
4. **Vérification Browser-in-the-loop** :
   - Avant tout commit, lancer le serveur local, ouvrir le navigateur intégré d'Antigravity, vérifier qu'il n'y a aucune erreur dans la console et tester l'ouverture des modales de simulation GIF/PNG.
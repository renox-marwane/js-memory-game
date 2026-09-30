# Jeu du Memory
 
Jeu de memory en Vanilla JS, jouable en ligne : https://renox-marwane.github.io/js-memory-game/
 
## Technologies
 
- HTML5
- CSS3 (Grid, responsive)
- JavaScript 
## Fonctionnalités
 
- Génération dynamique de 8 paires d'images via l'API Picsum
- Mélange des cartes avec l'algorithme de Fisher-Yates
- Gestion  des tours (`setTimeout`) pour révéler/cacher les cartes
- Chronomètre en temps réel (format mm:ss)
- Comptage des coups et détection de la victoire
- Réinitialisation complète de la partie (score, chrono, plateau)
- Responsive (grille adaptative selon la taille d'écran)
## Lancer le projet en local
 
1. Cloner le dépôt :
```
git clone https://github.com/renox-marwane/js-memory-game.git
```
2. Ouvrir `index.html` avec l'extension Live Server de VS Code (ou l'ouvrir directement dans un navigateur)
## Structure
 
```
├── index.html
├── style/
│   └── style.css
└── script/
    └── script.js
```
 
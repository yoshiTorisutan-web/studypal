# 📚 StudyPal

StudyPal est une plateforme d'apprentissage personnel en **HTML, CSS et JavaScript vanilla**.

L'application permet de créer des **flashcards avec répétition espacée**, lancer des **quiz interactifs**, suivre son **temps d'étude**, gérer des **objectifs d'apprentissage** et activer un **mode révision avant examen**.

## ✨ Fonctionnalités

- 🧠 Flashcards avec système de répétition espacée
- 🔁 Révision priorisée selon les cartes dues et les points faibles
- 🔎 Recherche, filtres, tri, édition et suppression des flashcards
- ❓ Quiz interactifs avec scoring immédiat
- 🎯 Quiz par matière, par nombre de questions, ou centrés sur les erreurs fréquentes
- 📝 Création de flashcards depuis les erreurs de quiz
- ⏱️ Suivi du temps d'étude avec sessions enregistrées
- 📈 Visualisation du rythme de travail sur 7 jours
- ✅ Objectifs d'apprentissage avec progression
- 📊 Statistiques de mémorisation et vue d'ensemble
- 🧪 Mode révision avant examen avec priorisation intelligente
- 💾 Sauvegarde locale via `localStorage`
- 📤 Export JSON / 📥 Import JSON des données

## 🛠️ Stack technique

- `HTML5`
- `CSS3`
- `JavaScript` natif

Aucune dépendance externe ni étape de build n'est nécessaire.

## 🚀 Lancer le projet

1. Ouvrir le dossier du projet.
2. Lancer le fichier `index.html` dans un navigateur.

Tu peux aussi utiliser une extension type Live Server dans VS Code, mais ce n'est pas obligatoire.

## 📂 Structure

- `index.html` : structure de l'application
- `styles.css` : design, layout, responsive
- `script.js` : logique métier, état, persistance, interactions

## 🧩 Modules principaux

### 🧠 Flashcards

- création manuelle d'une carte
- révision avec notation `À revoir`, `Difficile`, `Correct`, `Maîtrisé`
- recalcul automatique de la prochaine date de révision
- bibliothèque filtrable et modifiable

### ❓ Quiz

- quiz mixte
- quiz spécial révision avant examen
- quiz basé sur les erreurs fréquentes
- scoring, chronométrage et résumé de session

### ⏱️ Temps d'étude

- chronomètre avec objectifs de durée
- type de session et note de focus
- sauvegarde dans un journal d'étude
- synthèse quotidienne et hebdomadaire

### ✅ Objectifs

- création d'objectifs personnalisés
- progression numérique
- validation rapide

### 🎓 Révision avant examen

- date d'examen
- score cible
- estimation de charge de travail quotidienne
- mise en avant des notions fragiles

## 💾 Données

Les données sont stockées dans le navigateur avec `localStorage`.

StudyPal conserve notamment :

- les flashcards
- les objectifs
- les sessions d'étude
- l'historique des quiz
- les paramètres d'examen

L'export/import JSON permet de sauvegarder ou restaurer un profil de révision.

## 📱 Responsive

L'interface a été pensée pour fonctionner sur :

- desktop
- tablette
- mobile

## 🔮 Pistes d'évolution

- 🔐 système de comptes utilisateur
- 🌙 thèmes visuels multiples
- 🔔 rappels de révision
- 🧾 génération automatique de quiz ou de flashcards
- ☁️ synchronisation cloud

## 👨‍💻 Auteur

Projet réalisé pour une plateforme d'apprentissage personnelle moderne, légère et autonome.

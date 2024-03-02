# Shop-Ease

# Description

 Shop-Ease est une application mobile qui permet aux utilisateurs d'acheter des cours
   et achetez-les. L'application est construite à l'aide de React Native, Expo et React Redux.

## Caractéristiques

- Voir les cours
- Ajouter des cours au panier
- Supprimer les cours du panier
- Afficher les détails du cours
- Acheter des cours
- Voir les cours achetés

## Les technologies

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [React Redux](https://react-redux.js.org/)
- [React Navigation](https://reactnavigation.org/)

##Installation

### Conditions préalables

- [Node.js](https://nodejs.org/en/)

### Pas

- Assurez-vous que Node.js est installé
- Cloner le dépôt
- ouvrir le terminal dans le répertoire du projet
- Exécutez npm i pour installer les dépendances
- Exécutez npx expo start pour démarrer l'application

### Dockérisation

- Assurez-vous que [Docker](https://www.docker.com/) est installé
- exécutez docker build -t [choisissez-un-nom-pour-votre-docker-image] . pour construire l'image docker, n'oubliez pas de mentionner un nom
- exécutez docker run -it -p 19000:19000 -p 19001:19001 -p 19002:19002 -p 8081:8081 [le-nom-de-votre-conteneur] pour exécuter le conteneur Docker

## Tests
exécuter npm test pour exécuter des tests

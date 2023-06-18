# Projet WE4B - Site Hi-tech - Guide d'installation

Ce guide vous expliquera comment installer et exécuter notre projet WE4B, un site de marketplace pour objets technologiques.
Corentin Durupt, Simon Illouz, Laurent Arnaud Planchin et Aubin Bonnefoy.

## Étapes d'installation

1. Téléchargement et extraction du projet :
   - Téléchargez le projet à partir de [https://github.com/cocoutbm/Angular-Shop-WE4B]
   - Extrayez les fichiers dans le répertoire de votre choix.

2. Installation des dépendances du frontend :
   - Ouvrez un terminal et accédez au répertoire du projet "Angular-Shop-WE4B"
     ```
     cd .\frontend\
     ```
   - Exécutez la commande suivante pour installer les dépendances nécessaires :
     ```
     npm install
     ```

3. Lancement du frontend :
   - Toujours dans le même terminal, exécutez la commande suivante :
     ```
     ng serve
     ```
   - Le serveur de développement Angular sera lancé et le site sera accessible à l'adresse [http://localhost:4200](http://localhost:4200).

4. Lancement du serveur de base de données (json-server) :
   - Ouvrez un autre terminal.
   - accédez au répertoire du projet "Angular-Shop-WE4B"
     ```
     cd .\frontend\
     ```
   - Exécutez la commande suivante pour lancer le serveur de base de données :
     ```
     json-server --watch mydb.json
     ```

## Comptes de connexion

Utilisez les informations suivantes pour vous connecter aux différents comptes :

- Vendeur :
  - E-mail : aubin.bonnefoy@utbm.fr
  - Mot de passe : mdpaubin

- Acheteur :
  - E-mail : toto@mail.com
  - Mot de passe : azerty

Voilà ! Vous êtes maintenant prêt à utiliser Site Hi-tech.
Amusez-vous bien !

# changeLogAPI-REST
## Objectif
1. Apprendre la structure d'une API REST
2. Utilisation des operations de base CRUD

## Stack
- Node.js
- Express.js
- Prisma (ORM) / SQL
- JS/TS
## Outils
- Postman (Pour tester nos endpoints)
- Render (Cloud Hosting Server)
- Visual Studio Code

## Qu'est qu'une API ?
API signifie Application Programming Interface. 

C'est une interface qui permet à deux applications de communiquer entre elles et d’échanger des données.
Elle est composée de différents endpoints accessibles par un utilisateur. 

Chaque endpoint à un rôle spécifique qui va être exécuté lorsque l'endpoint sera demandé via une requête. 

L'API va donc faire ce traitement et en retour, envoyer une réponse à notre utilisateur sous un format de donnée specifique (ici JSON).

Le traitement consiste à communiquer avec la base de données et effectuer les traitements CRUD sur notre DB.

# Plus d'informations sur le Projet
Nous avons un produit (admettons une application), cette application va avoir des MAJ et à chaque MAJ il y aura des ajouts ou suppressions de fonctions.

Il faut donc en informer l'utilisateur grace à une journalisation des changements de notre APP.

Ici dans notre structure de DB, nous avons :
- un product -> qui représente le produit
- une update -> qui représente la version de le MAJ
- des updates points -> qui représente les changements qui ont été effectué pour cette maj

Il y a differentes routes pour acceder a nos endpoints (CRUD / methodes HTTP):
- get All product/update
- get One 
- post Create
- put Update
- delete Delete

Voici une image des tests sur Postman:

<img width="181" alt="postman change log" src="https://user-images.githubusercontent.com/77405624/205969900-145339b5-4fcb-459e-8c87-592f1f4ac83f.PNG">

### Some more soon ...

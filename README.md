# Configure project on your IDE

# Prérequis

Copiez et renommez les fichiers '.env.sample' en '.env' dans les dossiers :

- back
- database

# Pnpm

Avec pnpm les nodes_modules sont liés avec des liens symboliques donc les chemins peuvent nécessiter une configuration manuelle.

## Jetbrains

### Node & pnpm

![Node configuration](./docs/assets/ide-configuration/node.png)
Le chemin vers pnpm devrais être détecté automatiquement

### Prettier

Image reference:
![Prettier configuration](./docs/assets/ide-configuration/prettier.png)

Format du chemin (replacer la version du module):
Prettier package: $ROOT_DIRECTORY\node_modules\.pnpm\prettier@2.6.2\node_modules\prettier

### Eslint

Réference Image :
![Prettier configuration](./docs/assets/ide-configuration/eslint.png)

Format du chemin (replacer la version du module):
Eslint package: $ROOT_DIRECTORY\node_modules\.pnpm\eslint@8.21.0\node_modules\eslint

Format répertoires de travail (Working directories)
$ROOT_DIRECTORY_ABSOLUTE_PATH\back; $ROOT_DIRECTORY_ABSOLUTE_PATH\front; $ROOT_DIRECTORY_ABSOLUTE_PATH\shared; $ROOT_DIRECTORY_ABSOLUTE_PATH\libs;

# Architecture

Ports & adapters
Ports are the interfaces
Adapters contains the concrete implementations.

# Base de donnée

Nous utilisons [PostgreSQL](https://www.postgresql.org/)

## Base de donnée locale pour le développement

Pour utiliser la DB postgres, il faut soit installer postgres sur sa machine, soit lancer postgres dans un container.

Extentions de postgresql actives :

- [postgis](https://postgis.net/)

### (Recommandé) Conteneur docker

Nous avons une [configuration docker-compose](docker/docker-compose.db-pg-with-adminer.yml) qui monte :

- Une BDD postgres persistante.
- un utilitaire d'administration basique [Adminer](https://www.adminer.org/) disponible en local sur https://localhost:8090
  (Les configurations pour se connecter avec adminer peuvent être préchargés dans l'url en suivant le format suivant :
  http://localhost:8090/?pgsql=postgres&username=immersion&db=immersion-db)

### Commandes

#### Démarrer la base de donnée

A partir de la racine du projet.

```sh
pnpm database start
```

Démarre la base de donnée sur son dernier état persisté (vierge si non initialisé)

#### Mode détaché (rendre la main à la console une fois le processus lancé)

```sh
pnpm database start
```

#### Réinitialiser la base de donnée

:warning: nécessite d'avoir configuré l'outil de migration.

```sh
pnpm database reset
```

## Migrations de la base de donnée

Nous utilisons [node-pg-migrate](https://salsita.github.io/node-pg-migrate/#/) pour générer les fichiers de migration.

### Prérequis.

- la base doit être montée (conteneur up)
- Variable d'environnement DATABASE_URL doit être définie dans le .env du back :
  Node pg migrate utilise la variable d'environnement DATABASE_URL avec le format "postgresql://POSTGRES_USER:POSTGRES_PASSWORD@PG_HOST:PG_EXPOSED_PORT/POSTGRES_DB"
  Eg. pour déploiement local: DATABASE_URL="postgresql://immersion:pg_password@localhost:5432/immersion-db"

Node pg migrate charge automatiquement le .env si présent.

### Commandes communes (nécessite d'avoir monté le conteneur)

#### Créer une migration

```
pnpm database migrate create a-new-migration-filename-suffix
```

#### Executer les migrations (Up)

```
pnpm database migrate up a-new-migration-filename-suffix
```

#### Annuler des migrations (Down)

```
pnpm database migrate down
pnpm database migrate down 5
```

Des usages plus avancés peuvent être trouvés dans la [documentation](https://salsita.github.io/node-pg-migrate/#/).

# Husky (TODO)

TODO

## Why lint-staged

## Pre-commit hook

TODO

## Pre-push hook

TODO

# Desactivating husky while rebasing

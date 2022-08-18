# Code partagé entre les projets

## Objectif

L'objectif est le partage de code commun entre différences parties du projets.
Ces parties doivent êtres indépendantes et peuvent suivre une logique de déploiement différente.

Nous avons donc besoin:

- D'un code commun localisé à un seul endroit lors du développement.
- Présent dans les builds des projet qui l'utilisent (front / back etc) lors du déploiement.

## Références

https://www.typescriptlang.org/docs/handbook/project-references.html

#Setup pour le partage de shared

## 1. Mettre la jour les configuration du build

Suivant la documentation [Project references](https://www.typescriptlang.org/docs/handbook/project-references.html)

Pour [back/tsconfig.json](back/tsconfig.json)

```json
{
  "compilerOptions": {
    //[...]
    "rootDir": ".",
    "composite": true,
    "declaration": true /* Generate .d.ts files from TypeScript and JavaScript files in your project. */,
    "declarationMap": true /* If you enable declarationMap, you’ll be able to use editor features like “Go to Definition” and Rename to transparently navigate and edit code across project boundaries in supported editors */
  },
  "references": [
    { "path": "../shared" } //Chemin vers le dossier contenant le tsconfig de la référence
  ]
}
```

Pour [shared/tsconfig.json](shared/tsconfig.json)

```json
{
  "compilerOptions": {
    //[...]
    "rootDir": ".",
    "composite": true,
    "declaration": true /* Generate .d.ts files from TypeScript and JavaScript files in your project. */,
    "declarationMap": true /* If you enable declarationMap, you’ll be able to use editor features like “Go to Definition” and Rename to transparently navigate and edit code across project boundaries in supported editors */
  },
  "references": [
    { "path": "../shared" } //Chemin vers le dossier contenant le tsconfig de la référence
  ]
}
```

Pour [back/tsconfig.test.json](back/tsconfig.test.json)  
Note: ts-jest ne permet pas de se comporter comme tsc --build donc nous prenons en rootDir le répertoire parent pour inclure les fichiers nécessaires.

```json
{
  "compilerOptions": {
    //[...]
    "rootDir": "./../",
    "composite": true,
    "declaration": true /* Generate .d.ts files from TypeScript and JavaScript files in your project. */,
    "declarationMap": true /* If you enable declarationMap, you’ll be able to use editor features like “Go to Definition” and Rename to transparently navigate and edit code across project boundaries in supported editors */
    //[...]
  },
  "references": [
    { "path": "../shared" } //Chemin vers le dossier contenant le tsconfig de la référence
  ]
}
```

## 2. Changer la commande de build

En passant l'option 'tsc --build' provoque :

- Trouve tous les projects référencés
- Détecte si ils sont à jour
- Build les projects non-à-jour en prenant en compte leurs propres dépendances

La commande du [package.json](back/package.json) devient donc

```json
"build": "node_modules/.bin/tsc --build",
```

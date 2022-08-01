// Lint each applicative project using its tsconfig.json.
const lintProjects = () => {
  return [{
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      "prettier",
    ],
    files: ["**/*.ts", "**/*.tsx"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: [
        //"./front/tsconfig.json",
        "./back/tsconfig.json",
        //"./shared/tsconfig.json",
        //"./libs/react-design-system/tsconfig.json",
      ],
      ecmaVersion: 2020,
      sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
      ...require("./.eslint/eslint.rules"),
      ...require("./.eslint/typescript-eslint.rules"),
    },
  }]
}

// ignore some rules in InMemoryRepos, Stubs and migrations
const ignoreSomeRulesInSpecificFileTypes = () => {
  return [{
    files: ["**!/InMemory*.ts", "**!/!*Stub*.ts", "**!/pg/migrations/!*.ts"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: ["./back/tsconfig.json"],
      ecmaVersion: 2020,
      sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
      "@typescript-eslint/require-await": "off",
    },
  }]
}

// Attention: Declaration order has importance as rules apply in cascade.
const lintProjectsWithoutTests = () => {
  return [
    ...lintProjects(),
    ...ignoreSomeRulesInSpecificFileTypes()
  ];
}

// tests must be included in their tsconfig project.
const lintTests = () => {
  return [{
    env: {
      "jest/globals": true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: [
        "./back/tsconfig.test.json"
      ],
      ecmaVersion: 2020,
      sourceType: "module",
    },
    files: ["**/*.test.ts"],
    extends: ["plugin:jest/recommended", "plugin:jest/style"],
    plugins: ["jest", "@typescript-eslint"],
    rules: {
      ...require("./.eslint/eslint.rules"),
      ...require("./.eslint/typescript-eslint.rules"),
      ...require("./.eslint/typescript-eslint-test.rules"),
      ...require("./.eslint/jest-eslint.rules"),
    },
  }]
}

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  overrides: [
    ...lintProjectsWithoutTests(),
    ...lintTests()
  ],
};

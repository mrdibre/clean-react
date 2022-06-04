module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "import", "boundaries"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react-hooks/recommended",
    "plugin:boundaries/recommended",
    "plugin:storybook/recommended",
    "react-app",
    "react-app/jest",
  ],
  overrides: [
    {
      files: ["**/*.stories.*"],
      rules: {
        "import/no-anonymous-default-export": "off",
      },
    },
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
    },
    "boundaries/elements": [
      {
        type: "data",
        pattern: "data/*",
      },
      {
        type: "domain",
        pattern: "domain/*",
      },
      {
        type: "infra",
        pattern: "infra/*",
      },
      {
        type: "main",
        pattern: "main/*",
      },
      {
        type: "ui",
        pattern: "ui/*",
      },
    ],
  },
  rules: {
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-var-requires": "off",
    "prettier/prettier": "error",
    "import/newline-after-import": "error",
    "import/no-unresolved": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: ["../../", "../../../", "../../../../"],
      },
    ],
    "boundaries/element-types": [
      "error",
      {
        default: "disallow",
        rules: [
          {
            from: "domain",
            allow: ["domain"],
          },
          {
            from: "data",
            allow: ["data", "domain"],
          },
          {
            from: "ui",
            allow: ["data", "domain", "ui"],
          },
          {
            from: "infra",
            allow: ["data", "domain", "infra"],
          },
          {
            from: "main",
            allow: ["data", "domain", "infra", "ui", "main"],
          },
        ],
      },
    ],
  },
};

# React Clean Template

This template was built to easily start a project using clean architecture and a predefined configuration

### Stack

1) Material UI (v5) and styled components
2) Jest/React testing library/Testing library hooks
3) React Router Dom (V6)
4) TypeScript
5) ESLint
6) Prettier
7) Storybook
8) Yarn

### File Structure

```
.
└───src
│  │
│  └───data
│  │  └───protocols
│  │  │   └───repositores
│  │  └───usecases
│  └───domain
│  │  └───codes
│  │  └───dtos
│  │  └───entities
│  │  └───usecases
│  └───infra
│  │  └───protocols
│  │  └───repositories
│  │  └───storage
│  └───ui
│  │  └───components
│  │  └───config
│  │  └───hooks
│  │  └───pages
│  │  └───bootstrap.tsx
│  │  index.tsx
│  │  setupTests.ts
│
└───.husky
│  │  pre-commit
│   
└───.storybook
│  │  main.js
│  │  preview.js
│
└───node_modules
│
└───public
│
│   .eslintrc.js
│   .gitignore
│   .lintstagedrc.json
│   config-overrides.js
│   package.json
│   README.md
│   tsconfig.json
│   tsconfig.paths.json
│   tsconfig.tsbuildinfo
│   yarn.lock   
```

# AI Engineering Lab

A small Node.js and TypeScript project for learning AI-native software engineering.

## Requirements

- Node.js 24 and npm. If you use nvm, run `nvm use` to select the version in `.nvmrc`.
- Git.

## Getting started

```sh
npm ci
npm run build
npm start
```

The application prints a greeting. `npm run build` removes and recreates `dist/`,
which contains compiled application and test files.

## Checks

Run all quality gates with:

```sh
npm run verify
```

This runs linting, type checking, TypeScript tests, the build, compiled
JavaScript tests, and an application smoke check, in that order. Individual
commands are also available:

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run test:compiled
npm run smoke
```

`test:compiled` builds before running the compiled tests. `smoke` runs the
compiled application and requires a prior build.

Node 24 runs the TypeScript tests directly by stripping types; it does not type
check them or apply `tsconfig.json` transformations. Keep TypeScript syntax
compatible with Node's type stripping and run the separate type check. Relative
imports use `.ts` extensions, which TypeScript rewrites to `.js` during build.

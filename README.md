# node-graphql

This repository is a small GraphQL service using TypeScript, TypeGraphQL and Mongoose.

## Repo structure

The following Mermaid diagram shows the main files and folders:

```mermaid
graph TD
  A[node-graphql]
  A --> B[package.json]
  A --> C[jest.config.js]
  A --> D[.github/workflows/ci.yml]
  A --> E[src]
  E --> E1[index.ts]
  E --> UserService[UserService/]
  UserService --> UR[UserResolver.ts]
  UserService --> UM[UserModel.ts]
  UserService --> US[UserSchema.ts]
  UserService --> UT[__tests__/]
  UT --> UT1[UserResolver.test.ts]
  A --> NODE_MODULES[node_modules/]
```

## Running tests

CI runs `npm install` and `npm test` on pushes/PRs to `main` via GitHub Actions.

Locally you can run:

```bash
npm install
npm test
```

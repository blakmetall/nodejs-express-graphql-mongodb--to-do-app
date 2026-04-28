# GraphQL API — Node.js + MongoDB

API backend con GraphQL desarrollada como proyecto de exploración
en 2023, complemento práctico del curso de GraphQL con Node.js (Platzi).

## Stack técnico

- **Runtime:** Node.js, Express
- **API:** GraphQL — queries y mutations para gestión de tareas
- **Base de datos:** MongoDB con MongoDB Atlas
- **ORM:** Prisma
- **Lenguaje:** TypeScript
- **CI/CD:** CircleCI con deployment automático via `config.yml`
- **Contenedores:** Docker + Docker Compose
- **Herramientas:** ESLint, Prettier, Nodemon, Babel

## Estructura

    src/
    ├── config/          # Configuración de Prisma y resolvers
    │   ├── prisma.ts
    │   ├── resolvers.ts
    │   └── typeDefs.js
    ├── queries/         # Queries GraphQL
    │   ├── toDo.interfaces.ts
    │   └── toDo.queries.ts
    └── utils/           # Tipos escalares de Prisma

## Contexto

Demo práctica desarrollada en paralelo al curso de GraphQL con Node.js
de Platzi. Incluye configuración de CircleCI para deployment automático
y Docker para entorno de desarrollo reproducible.

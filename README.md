# App

GymPass Style app.

## RFs(Requisistos funcionais)
- [x] Deve ser possivel  se cadastrar;
- [x] Deve ser possivel  se autenticar;
- [x] Deve ser possivel  obter o perfil de um usuario logado;
- [x] Deve ser possivel  obter o numero de chek-ins realizados pelo o usuario;
- [x] Deve ser possivel  o usuario obter seu historico de chek-ins;
- [x] Deve ser possivel  o usuarios buscar academias proximas (ate 10 km);
- [x] Deve ser possivel  o usuarios buscar academias pelo nome;
- [x] Deve ser possivel  o usuario fazer chekin em uma academia;
- [z] Deve ser possivel  validar o chekin de um usuario;
- [x] Deve ser possivel  cadastrar uma academia;
## RNs (Regras de negocio)
- [x] o usuario nao deve poder se casdastrar com um e-mail duplicado;
- [x] o usuario nao deve poder fazer 2 chekin ao dia;
- [x] o usuario nao deve poder fazer chekin se nao estiver perto da academia(100m);
- [x] O check-in so poder ser validado 20 minutos apos criado;
- [ ] O check-in so poder ser validado por administradores;
- [ ] A academia so pode ser casdastrada por adinistrador;


## RNFs (Resquisistos nao-funcionais)
- [x] A senha do usuario precisa estar criptografada;
- [x] Os dados da aplicacao precisam estar persistidos em um bando de dados PostgreSql;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por pagina;
- [ ] O usuario deve ser identificado por um JWT (Json Web Token);








# Libs project
  npm i typescript @types/node tsx tsup -D
    - npx tsc --init
  npm i fastify
  npm i dotenv
  npm i zod 
  npm i eslint @rocketseat/eslint-config -D
  npm i prisma -D
    npx prisma init
    npx prisma generate
  npm i @prisma/client
 docker run --name api-solid-pg -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=apisolid -p 5432:5432  bitnami/postgresql:latest
  docker ps -a
  docker start api-solid-pg
  docker rm api-solid-pg
  npx prisma migrate dev
  npx prisma studio

  docker compose up -d
  docker stop

  npm i bcryptjs
  npm i -D @types/bcryptjs

  npm i vitest vite-tsconfig-paths -D
    "test:coverage": "vitest --coverage"
npm i -D @vitest/ui
npm i dayjs

npm i f@fastify/jwt

npm link
npm i -D npm-run-all
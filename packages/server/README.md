# Typescript project template - server

> Work in progress

The server can be started with `pnpm dev` command and it needs the `SERVER_PORT` environment variable.

Websocket is available too with minimal setup. Route are living in their folder and test files can describe the behavior of given route.

Recommended to use external rest clients like `Insomnia`, `Postman`, etc., or VS Code extension like `Thunder Client`.

## Knex.js

With `Knex.js` using database will be more easier.

```sh
$ # Navigate into database folder
$ cd /workspace/packages/server/src/database
$ # Create new migration file
$ npx knex migrate:make users
$ # Crete tables like migrations
$ npx knex migrate:up
$ # Drop tables
$ npx knex migrate:down
$ # Seed data
$ npx knex seed:run
```
## Requests

The server is pretty strict because it only allows request from `http://localhost:3000` origin - don't forget to add `Origin: http://localhost:3000` to request setting on rest clients. Beside that not all request methods are available. All request is logged into the console.

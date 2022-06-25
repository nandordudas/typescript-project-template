# Typescript project template - server

> Work in progress

The server can be started with `pnpm dev` command and it needs the `SERVER_PORT` environment variable. The server is pretty strict because it only allows request from `http://localhost:3000` origin - don't forget to add `Origin: http://localhost:3000` to request setting on rest clients. Beside that not all request methods are available.

Websocket is available too with minimal setup. Route are living in their folder and test files can describe the behavior of given route.

Recommended to use external rest clients like `Insomnia`, `Postman`, etc., or VS Code extension like `Thunder Client`.
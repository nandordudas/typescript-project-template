# Typescript project template

> Work in progress

## Devcontainer

Environment file is picked up by `docker-compose.yml`. Create new `.env` file before devcontainer will be started, don't forget fill with values.

```sh
# Create new .env file before devcontainer was started
$ cp .env.example .env
```

Check available environment variables on running devcontainer.

```sh
# Show SERVER_PORT environment variable value
$ printenv | sort | grep SERVER_PORT
```
## Node.js

Node.js is available in devcontainer.

```sh
# List application versions
$ node -v
$ npm -v
$ yarn -v
```

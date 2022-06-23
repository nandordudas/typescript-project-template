# Typescript project template

> Work in progress

## Start new project

Create new repository on GitHub, select repository template and add the name of the new repository. After clone locally don't forget to change package names.

Replace all `typescript-project-template` to your own preferred name.

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
$ pnpm -v
$ yarn -v
```

## pnpm package manager is available

pnpm can be used on devcontainer. Dependencies will be installed automatically after devcontainer has been created.

```sh
# /workspace - run these commands from the root of the project
$ pwd
# Install packages - recursively, because of workspaces
$ pnpm i
# Install dev dependency in root
$ pnpm i -Dw typescript
# Install dev dependency in specific package
$ pnpm i -DF @typescript-project-template/benchmark typescript
```

## ESLint

Linter tool is available as extension in VS Code and can be use with command line. Configuration is availabe in `.eslintrc` file. In editor, code will be fixed immediately after saving the current file.

```sh
# Run eslint
$ pnpm eslint
# Fix all linting errors
$ pnpm eslint:fix
# ESLint config test example
$ echo '(async() => {})()' | npx eslint --stdin
# 1:7  error  Missing space before function parentheses  @typescript-eslint/space-before-function-paren
```

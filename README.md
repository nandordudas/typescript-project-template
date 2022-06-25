# Typescript project template

> Work in progress

[![CI](https://github.com/nandordudas/typescript-project-template/actions/workflows/ci.yml/badge.svg)](https://github.com/nandordudas/typescript-project-template/actions/workflows/ci.yml)

## Create new project

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

## Start project

If installation didn't run automatically then use `pnpm i`.

You can start development each with `pnpm -F client dev`, `pnpm -F server dev` or `pnpm dev`. Both package listen to changes and will restart their server.

## Database

MariDB is available in project on port `3306` in-, and outside the container. External database client like `HeidiSQL` is recommended but VS Code extensions are good choice too - or use the command line.

Recommended to update database collation:

```sql
ALTER DATABASE `mariadb` COLLATE 'utf8mb4_unicode_ci';
```

## Node.js

Node.js is available in devcontainer - check the official Microsoft image of that.

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

## GitHub actions

New workflow `CI` is available and it checks eslint issues for now. This workflow runs on every pull request and `main` branch's commits. If lint process succeed a green checkmark will show, otherwise a red cross. Commits with failed workflow will not be merged.

A new badge is available on the top of `README.md` file.

## Test

Test library `vitest` is availabe and can be used with `pnpm test` in the root of project, which will start test command recursively. Or use `pnpm -F server test` for filtered usage.

> These tests are not completed and they need some improvement, don't use in production!

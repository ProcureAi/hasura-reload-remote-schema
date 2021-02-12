# Hasura - Reload remote schema 

![Github Action](https://flat.badgen.net/badge/Github/Action/green?icon=github)
![MIT license](https://flat.badgen.net/badge/License/MIT/green)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This action reloads a [Hasura](https://hasura.io/) remote schema

## Inputs

### `HASURA_ENDPOINT`

**Required** The endpoint of your hasura instance.

### `HASURA_ADMIN_SECRET`

**Required** The admin secret.

### `HASURA_REMOTE_SCHEMA_NAME`

**Required** The name of the schema to refresh


## Example usage

```yaml
uses: ProcureAi/hasura-reload-remote-schema@v1.0.0
with:
  HASURA_ENDPOINT: 'https://hasura.example.com'
  HASURA_ADMIN_SECRET: ${{ secrets.HASURA_ADMIN_SECRET }}
  HASURA_REMOTE_SCHEMA_NAME: 'data-api'
```

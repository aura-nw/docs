# Aura Network Documents

This repository contains source code and content of [Aura Network Document](https://docs.aura.network) (or simply Aura-docs.)

Aura-docs based on [Docusaurus](https://docusaurus.io/) v2, which is a project for building, deploying, and maintaining open source project websites easily. 

## Run locally
To run the project locallt, please follow installation guide from [here](https://docusaurus.io/docs/next/installation)

If you already setup things correctly, then just simply:

```bash
yarn start
```
## Requirement

Using Node.js version larger than 14.10

## Adding new content
New content should be written in `.md` file under `docs` directory.

## Adding Swagger API

Aura docs uses [OpenAPI plugin](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs) for generate swagger API automatically. First, add your swagger file to a `openAPI` directory and update `docusaurus.config.js` in the `docusaurus-plugin-openapi-docs` section.

To generate or remove mxd files from the swagger document, just do as follow:

```bash
# generate all api-docs 
yarn docusaurus gen-api-docs all

# generate docs for a specific api
yarn docusaurus gen-api-docs <id>

# clean up all api-docs
yarn docusaurus clean-api-docs all

# clean up a specific api
yarn docusaurus clean-api-docs <id>
```

NOTE: the plugin is having problems in parsing openAPI v3, so we can convert these docs back to swagger v2.0 using: https://www.npmjs.com/package/api-spec-converter


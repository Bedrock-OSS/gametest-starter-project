# GameTest Starter Project

This project is aimed to get you started with the GameTest framework.

## Pre-requisites

- Minecraft Bedrock Edition 🤦
- npm - [NodeJS Install Guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-installer-to-install-nodejs-and-npm)
- VSCode - [Download](https://code.visualstudio.com/Download)

## Steps

Follow these steps to start using the project.

- [Use the template](https://github.com/Bedrock-OSS/gametest-starter-project/generate)
- Clone your repository
- Install prettifier, `ctrl+p` and run `ext install esbenp.prettier-vscode`
- Update the header fields in `manifest.json`
    - `header.description`
    - `header.name`
    - `header.uuid` - [Use a generator](https://www.uuidgenerator.net/)
- Update the `modules` section in `manifest.json`
    - `modules[0].description`
    - `modules[0].uuid` - [Use a generator](https://www.uuidgenerator.net/)
- Update the project name and description in `package.json`
- Run `npm install` at the apex (root folder) of the project, you should see `node_modules` created
- Run `npm run build`, you should see `scripts/main.js` created

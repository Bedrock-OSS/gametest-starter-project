# GameTest Starter Project

This project is aimed to get you started with the GameTest framework.

Pre-requisites:

- [x] - Minecraft Bedrock Edition 🤦
- [x] - npm - [NodeJS Install Guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-installer-to-install-nodejs-and-npm)
- [x] - VSCode - [Download](https://code.visualstudio.com/Download)

## Steps

Follow these steps to start using the project.

- [ ] - Rename `example-pack.code-workspace` to your own project name, eg. `my-pack.code-workspace`
- [ ] - Open the renamed `<yourprojectname>.code-workspace` file in VSCode, `File > Open Workspace`
- [ ] - Update the header fields in `manifest.json`
    - [ ] - `header.description`
    - [ ] - `header.name`
    - [ ] - `header.uuid` - [Use a generator](https://www.uuidgenerator.net/)
- [ ] - Update the `modules` section in `manifest.json`
    - [ ] - `modules[0].description`
    - [ ] - `modules[0].uuid` - [Use a generator](https://www.uuidgenerator.net/)
- [ ] - Update the project name and description in `package.json`
- [ ] - Run `npm install` at the apex (root folder) of the project, you should see `node_modules` created
- [ ] - Run `npm run build`, you should see `scripts/main.js` created

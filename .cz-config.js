// This file is used by the VSCode Commitizen extension.
// https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-commitizen

const scopes = require('./commitlint.config').hyScopes;

module.exports = {
  "scopes": [
    "",
    ...scopes,
  ]
}

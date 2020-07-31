const scopes = [
	"root",
	"customer",
  "workflow",
  "test",
  "readme.md"
];

module.exports = {
  "extends": ["@commitlint/config-conventional"],
  "rules": {
    "scope-enum": [2, "always", scopes]
  },
  "hyScopes": scopes
}

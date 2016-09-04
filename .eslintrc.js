module.exports = {
  "extends": "./node_modules/eslint-config-google/index.js",
  "installedESLint": true,
  "rules": {
    // Stylistic issues
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "outerIIFEBody": 0
      }
    ],
    "max-len": [
      "warn",
      100
    ]
  }
};

module.exports = {
  extends: ['@react-native-community', 'plugin:react-native/all', 'airbnb-typescript'],
  plugins: ["autofix", "unused-imports", "module-resolver"],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'prettier/prettier': 0,
    'react/prop-types': 0,
    'object-curly-newline': ["error", { "minProperties": 5, "consistent": true }],
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': 0,
    'react-native/sort-styles': 0,
    'react-native/no-raw-text': 0,
    'react-native/no-color-literals': 0,
    'no-plusplus': 0,
    'no-console': 0,
    'arrow-parens': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/accessible-emoji': 0,
    'max-len': ["error", { "code": 120 }],
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports-ts": "off",
    "unused-imports/no-unused-vars-ts": [
      "warn",
      { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
    ],
    "module-resolver/use-alias": ["error", {
      "ignoreDepth": 1
    }]
  },
  "settings": {
    "import/resolver": {
      "babel-module": {}
    }
  }
}

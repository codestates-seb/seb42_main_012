module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'eslint:recommended',
  ],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-no-useless-fragment': 0,
  },
  settings: {
    'import/core-modules': ['styled-components', 'react-router-dom'],
  },
};

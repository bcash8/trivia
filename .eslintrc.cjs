module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    "browser": true
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'eslint-plugin-local-rules',
    'react-refresh'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['node_modules', 'dist', 'build', '.eslintrc.js', 'eslint-local-rules.js', 'vite.config.js', 'deploy.js', 'cypress.config.ts', 'eslint-count.js', 'facebook.ts'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.eslintrc.js', '**/*.ts', '**/*.tsx', '**test**'],
      rules: { 'no-undef': 'off' }
    },
    {
      files: ['vite.config.js'],
      rules: { 'no-restricted-exports': 'off' }
    },
  ],
  rules: {
    '@typescript-eslint/await-thenable': 'warn',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/consistent-type-assertions': ['warn', { assertionStyle: 'never' }],
    '@typescript-eslint/no-confusing-void-expression': ['warn', { ignoreArrowShorthand: true }],
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'warn',
    '@typescript-eslint/no-inferrable-types': ['warn', { ignoreParameters: true }],
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/require-await': 'warn',
    '@typescript-eslint/restrict-plus-operands': 'warn',
    '@typescript-eslint/restrict-template-expressions': 'warn',
    '@typescript-eslint/typedef': ['warn', { parameter: true }], 
    'func-style': ['warn', 'declaration', { allowArrowFunctions: false }], 
    'import/no-unresolved': ['error', { caseSensitiveStrict: true }],
    'local-rules/no-bad-error': 'warn',
    'local-rules/no-full-lodash-imports': 'error',
    'local-rules/no-replaced-antd-imports': 'warn',
    'local-rules/no-replaced-hooks': 'warn',
    'local-rules/no-spinner': 'warn',
    'local-rules/require-named-useEffect': 'warn',
    'local-rules/require-intl-number-format': 'warn',
    'no-constant-condition': 'warn',
    'no-dupe-else-if': 'warn',
    'no-duplicate-imports': 'warn',
    'no-implied-eval': 'off',
    'no-prototype-builtins': 'warn',
    'no-restricted-exports': ['warn', { restrictDefaultExports: { direct: true } }], 
    'prefer-const': 'warn',
    'react/display-name': 'warn',
    'react/jsx-key': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/no-unknown-property': 'warn',
    'react/prop-types': 'off',
    'require-await': 'off',
    "@typescript-eslint/consistent-type-imports": "warn",
  },
};
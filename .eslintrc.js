module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    "prettier/standard"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error"
  },
  overrides: [
    {
      files: [
        '**/*.spec.ts',
        '**/*.test.ts'
      ],
      env: {
        jest: true
      }
    }
  ],
  ignorePatterns: [
    'dist/**/*',
    '**/*.js'
  ]
}

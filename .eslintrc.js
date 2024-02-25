module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms', 'next', 'next/core-web-vitals'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-console': 'off',
    'simple-import-sort/imports': 'error',
  },
}

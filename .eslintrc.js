module.exports = {
  extends: ['next', 'next/core-web-vitals', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    eqeqeq: 'error',
    'no-console': 'error'
  }
}

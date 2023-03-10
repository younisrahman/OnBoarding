module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['@react-native-community'],
  plugins: ['import', 'simple-import-sort', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          '@app/features': './src/features',
          '@app/components': './src/components',
          '@app/navigator': './src/navigation',
          '@app/screens': './src/screens',
          '@app/styles': './src/styles',
          '@app/lib': './src/lib',
          '@app/config': './src/config',
          '@app/store': './src/store',
        },
      },
    },
  },
  rules: {
    'react-native/no-inline-styles': 0,
    'prettier/prettier': 1,
    'no-template-curly-in-string': 0,
    'react/jsx-filename-extension': [
      1,
      {extensions: ['.js', '.jsx', '.ts', '.tsx']},
    ],
    'import/prefer-default-export': 0,
    'no-confusing-arrow': 0,
    'react/jsx-props-no-spreading': 0,
    'dot-notation': 0,
    'no-console': 0,
    'no-dupe-keys': 0,
    'react/require-default-props': 0,
    'no-param-reassign': 0,
    'react/jsx-curly-newline': 0,
    camelcase: 0,
    'import/no-unresolved': 0,
    radix: 0,
    'react-hooks/exhaustive-deps': 0,
    'eslint-comments/no-unlimited-disable': 0,
  },
};

module.exports = {
  trailingComma: 'none',
  tabWidth: 2,
  printWidth: 80,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  bracketSpacing: true,
  arrowParens: 'always',
  jsxBracketSameLine: false,
  tailwindConfig: './tailwind.config.js',
  overrides: [
    {
      files: '.prettierrc.js',
      options: {
        parser: 'json',
      },
    },
  ],
  plugins: [require('prettier-plugin-tailwindcss')],
};
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.tsx',
    './src/index.html'
  ],
  css: ['./src/base.css'],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === "production" ? [purgecss] : []
  ],
};
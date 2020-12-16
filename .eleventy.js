const pluginPWA = require('eleventy-plugin-pwa')
const yaml = require('js-yaml')
const MarkdownIt = require('markdown-it')
const abbr = require('markdown-it-abbr')

const mdRender = new MarkdownIt({
  typographer: true,
  quotes: '“”‘’',
})
  .use(require('markdown-it-abbr'))
  .use(require('@gerhobbelt/markdown-it-github-headings'), {
    className: 'markdown-header-anchor',
  })

module.exports = (config) => {
  // Copy our static assets to the output folder
  config.addPassthroughCopy('src/manifest.json')
  config.addPassthroughCopy('src/assets/images')
  /*   config.addPlugin(pluginPWA) */

  config.addFilter('md', (rawString) => mdRender.render(rawString))

  config.addShortcode('version', function () {
    return String(Date.now())
  })

  config.addDataExtension('yaml', (contents) => yaml.safeLoad(contents))

  return {
    dir: {
      includes: '_includes',
      layouts: '_layouts',
      input: 'src',
      output: 'dist',
    },
  }
}

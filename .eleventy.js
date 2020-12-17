const pluginPWA = require('eleventy-plugin-pwa')
const yaml = require('js-yaml')
const MarkdownIt = require('markdown-it')

const postcss = require('postcss')
const path = require('path')

const markdownIt = new MarkdownIt({
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
  config.addPlugin(pluginPWA)

  config.addFilter('md', (rawString) => markdownIt.render(rawString))

  config.setLibrary('md', markdownIt)

  config.addShortcode('version', function () {
    return String(Date.now())
  })

  config.addPairedShortcode('postcss', async (css) => {
    const filePath = path.join(__dirname, `src/_includes/css/critical-path.css`)

    return await postcss([
      require('autoprefixer'),
      require('postcss-import'),
      require('postcss-nested'),
      require('postcss-custom-media'),
    ])
      .process(css, {
        from: filePath,
      })
      .then((result) => result.css)
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

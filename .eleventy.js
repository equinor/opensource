const pluginPWA = require('eleventy-plugin-pwa')
const yaml = require('js-yaml')

module.exports = (config) => {
  // Copy our static assets to the output folder
  config.addPassthroughCopy('src/manifest.json')
  config.addPassthroughCopy('src/assets/images')
  config.addPlugin(pluginPWA)

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

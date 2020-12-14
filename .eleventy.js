const pluginPWA = require('eleventy-plugin-pwa')
const yaml = require('js-yaml')
// const { isValidElement } = require('preact')
// const { render } = require('preact-render-to-string')

module.exports = (config) => {
  // Copy our static assets to the output folder
  config.addPassthroughCopy('src/manifest.json')
  config.addPassthroughCopy('src/assets/images')
  config.addPlugin(pluginPWA)
  config.addWatchTarget('./_tmp/styles.css')

  config.addPassthroughCopy({ './_tmp/styles.css': './styles.css' })

  config.addShortcode('version', function () {
    return String(Date.now())
  })

  config.addDataExtension('yaml', (contents) => yaml.safeLoad(contents))

  // config.addTransform('jsx', (content) => {
  //   if (isValidElement(content)) {
  //     return `<!doctype html>${render(content)}`
  //   }
  // })

  return {
    dir: {
      includes: '_includes',
      layouts: '_layouts',
    },
  }
}

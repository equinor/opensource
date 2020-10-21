const pluginPWA = require('eleventy-plugin-pwa')

module.exports = (eleventyConfig) => {
  // Copy our static assets to the output folder
  eleventyConfig.addPassthroughCopy('src/manifest.json')
  eleventyConfig.addPassthroughCopy('src/assets/images')
  eleventyConfig.addPlugin(pluginPWA)
}

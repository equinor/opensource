const fs = require('fs')
const path = require('path')
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const atImport = require('postcss-import')
const nested = require('postcss-nested')

const fileName = 'styles.css'

exports.data = () => {
  const filePath = path.join(__dirname, `../_includes/css/${fileName}`)

  return {
    permalink: `css/${fileName}`,
    eleventyExcludeFromCollections: true,
    css: fs.readFileSync(filePath),
    filePath,
  }
}

exports.render = async ({ css, filePath }) =>
  await postcss([atImport, nested, autoprefixer])
    .process(css, {
      from: filePath,
    })
    .then((result) => result.css)

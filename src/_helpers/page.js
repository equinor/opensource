const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

exports.assemble = (filename) => {
  const frontmatter = matter.read(
    path.join(__dirname, `../_frontmatter/${filename}.yaml`),
  )
  const filePath = path.join(__dirname, `../../docs/${filename}.md`)

  return {
    ...frontmatter.data,
    md: fs.readFileSync(filePath, 'utf-8'),
  }
}

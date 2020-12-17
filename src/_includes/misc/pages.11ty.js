const fs = require('fs')
const path = require('path')

const fileName = 'open-source-at-equinor'

exports.data = () => {
  const filePath = path.join(__dirname, '../docs/open_source_at_equinor.md')
  /*   const filePath = path.join(__dirname, '../docs/typography.md') */

  return {
    title: 'Open Source @ Equinor',
    permalink: `index.html`,
    layout: 'standalone.liquid',
    md: fs.readFileSync(filePath, 'utf-8'),
  }
}

exports.render = async ({ md }) => `<div class="prose">${this.md(md)}</div>`

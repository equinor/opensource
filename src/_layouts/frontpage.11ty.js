const { banner } = require('../_includes/components/banner')

exports.data = {
  layout: './base.11ty.js',
}

exports.render = (data) => `
<h1>${data.title}</h1>
${banner('here be dragons…')}
`

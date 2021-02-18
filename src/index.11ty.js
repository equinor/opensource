const page = require('./_helpers/page')

exports.data = () => page.assemble('open_source_at_equinor')
exports.render = async ({ md }) => this.md(md)

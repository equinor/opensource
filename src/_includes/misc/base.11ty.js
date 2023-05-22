module.exports = (data) => `<!doctype html>
<html lang="en" class="h-full">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${data.site.name}</title>
    <link rel="manifest" href="/manifest.json" />
    <link rel="stylesheet" href="https://cdn.eds.equinor.com/font/equinor-medium.css" />
    <link rel="stylesheet" href="/css/styles.css">
  </head>
  <body>
  <header>
    Open source @ Equinor
  </header>
  <div class="content">
  ${data.content}
  </div>
  <footer>Some footer</footer>
  </body>
</html>
`

module.exports = (data) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${data.title}</title>
    <style>
      :root {
        --slate-blue: #243746;
        --mist-blue: #D5EAF4;
      }
      html, body {
        height: 100%;
      }
      body {
        margin: 0;
        display: grid;
        place-items: center;
        font: 500 2rem Equinor;
        background: var(--slate-blue);
        color: var(--mist-blue);
      }
    </style>
    <link rel="stylesheet" href="https://eds-static.equinor.com/font/equinor-medium.css" />
  </head>
  <body>
  ${data.content}
  </body>
</html>
`

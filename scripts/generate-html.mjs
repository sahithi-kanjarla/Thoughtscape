import fs from 'fs';
import path from 'path';

const assetsDir = './dist/client/assets';
const files = fs.readdirSync(assetsDir);

const cssFile = files.find(f => f.endsWith('.css'));
const jsFiles = files.filter(f => f.endsWith('.js'));
const mainJs = jsFiles[jsFiles.length - 1]; // Use the last JS file

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sahithi's Creative Lab</title>
    ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}" />` : ''}
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/assets/${mainJs}"></script>
  </body>
</html>`;

fs.writeFileSync('./dist/client/index.html', html);
console.log('✅ Generated index.html');

// SVG 导入插件

import { readFileSync, readdirSync } from 'fs';

// ID 前缀
let idPrefix = '';
const svgTitle = /<svg([^>+].*?)>/;
const clearHeightWidth = /(width|height)="([^>+].*?)"/g;
const hasViewBox = /(viewBox="[^>+].*?")/g;
const clearReturn = /(\r)|(\n)/g;

function findSvgFile(dir) {
  const svgs = [];
  const ds = readdirSync(dir, { withFileTypes: true });
  for (const d of ds) {
    if (d.isDirectory()) {
      svgs.push(...findSvgFile(d));
    } else {
      const s = readFileSync(dir + d.name)
        .toString()
        .replace(clearReturn, '')
        .replace(svgTitle, ($1, $2) => {

          let width = 0, height = 0;
          let content = $2.replace(clearHeightWidth, (s1, s2, s3) => {
            if (s2 === 'width') {
              width = s3;
            } else if (s2 === 'height') {
              height = s3;
            }
            return '';
          });
          if (!hasViewBox.test($2)) {
            content += ` viewBox="0 0 ${ width } ${ height }"`;
          }
          return `<symbol id="${ idPrefix }-${ d.name.replace('.svg', '') }" ${ content }>`;
        })
        .replace('</svg>', '</symbol>')
        .replace(/fill="[^>+].*?"/g, "fill='currentColor'");
      svgs.push(s);
    }
  }
  return svgs;
}

/**
 * @param {string} path svg 导入路径
 * @param {string} prefix svg ID 前缀
 */
export default function svgBuilder(path, prefix = 'icon') {
  if (!path) {
    console.warn('Please ensure path is exist');
    return;
  }
  idPrefix = prefix;
  const svgs = findSvgFile(path);
  return {
    name: 'svg-transform',
    transformIndexHtml(html) {
      return html.replace(
        '<body>',
        `
        <body>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0">
            ${ svgs.join('') }
          </svg>
        `
      );
    }
  };
}

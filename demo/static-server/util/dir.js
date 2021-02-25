// 遍历读取目录内容
const walk = require('./walk');

/**
 * 封装目录
 * @date 2021-02-25
 * @param {string} url ctx.url
 * @param {string} reqPath 静态资源路径
 * @returns {string} 返回的内容封装成html
 */
function dir(url, reqPath) {
  const contentList = walk(reqPath);
  let html = '<ul>';
  for (const [index, item] of contentList.entries()) {
    html = `${html}<li><a href="${url === '/' ? '' : url}/${item}">${item}</a></li>`;
  }
  html = `${html}</ul>`;
  return html;
}

module.exports = dir;
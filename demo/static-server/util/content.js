const path = require('path');
const fs = require('fs');
const dir = require('./dir');
const file = require('./file');

/**
 * 获取静态资源内容
 * @date 2021-02-25
 * @param {object} ctx koa上下文
 * @param {string} fullStaticPath 静态资源目录在本地的绝对路径
 * @returns {string} 请求获取到的本地内容
 */
async function content(ctx, fullStaticPath) {
  // 请求资源的完整路径
  const reqPath = path.join(fullStaticPath, ctx.url);
  // 判断资源是否存在
  const exist = fs.existsSync(reqPath);

  let content = '';
  if (!exist) {
    content = '404 Not Found!'
  } else {
    // 判断访问的是文件夹还是文件
    const stat = fs.statSync(reqPath);
    if(stat.isDirectory()) {
      content = dir(ctx.url, reqPath);
    } else {
      content = file(reqPath);
    }
  }
  return content;
}

module.exports = content;
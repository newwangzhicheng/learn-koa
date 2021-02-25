const Koa = require('koa');
const path = require('path');
const content = require('./util/content');
const mimes = require('./util/mimes');
const app = new Koa();

const staticPath = './static';

app.use(async (ctx) => {
  // 静态资源目录在本地的绝对路径
  const fullStaticPath = path.join(__dirname, staticPath);
  // 获取仅在资源内容 文件 目录 404
  const _content = await content(ctx, fullStaticPath);

  //解析请求内容的类型
  const _mime = parseMine(ctx.url);

  if (_mime) {
    ctx.type = _mime;
  }

  // 输出静态资源
  if (_mime && _mime.includes('image/')) {
    ctx.res.writeHead(200);
    ctx.res.write(_content, 'binary');
    ctx.res.end();
  } else {
    ctx.body = _content;
  }

});

/**
 * 解析资源类型
 * @date 2021-02-25
 * @param {strng} url
 * @returns {type}
 */
function parseMine(url) {
  let extName = path.extname(url);
  extName = extName ? extName.slice(1) : 'unknow';
  return mimes[extName];
}

app.listen(8082);
console.log('server is running');
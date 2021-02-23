const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

/**
 * 用promise封装异步读取文件
 * @date 2021-02-23
 * @param {string} page html文件名
 * @return {promise}
 */
function render(page) {
  return new Promise((resolve, reject) => {
    const viewUrl = `./view/${page}`;
    fs.readFile(viewUrl, 'binary', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

/**
 * 根据url获取route
 * @date 2021-02-23
 * @param {string} url koa2上下文的url
 * @return {string} 获取html文件内容
 */
async function route(url) {
  let view = '404.html';
  switch (url) {
    case '/':
      view = 'index.html';
      break;
    case '/index':
      view = 'index.html';
      break;
    case '/todo':
      view = 'todo.html';
      break;
    case '/404':
      view = '404.html';
      break;
    default:
      break;
  }
  return render(view);
}

app.use(async (ctx) => {
  const { url } = ctx.request;
  const html = await route(url);
  ctx.body = html;
});
app.listen(8081);
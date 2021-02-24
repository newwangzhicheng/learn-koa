const Router = require('koa-router');
const page = new Router();

page.get('/404', async (ctx) => {
  ctx.body = '404 Not Found';
}).get('/helloworld', async (ctx) => {
  ctx.body = 'hello world page';
});

module.exports = page;
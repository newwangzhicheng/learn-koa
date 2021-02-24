const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  const { url } = ctx;
  // 从上下文的request获取
  const { request } = ctx;
  const req_query = request.query;
  const req_querystring = request.querystring;
  // 从上下文中获取
  const ctx_query = ctx.query;
  const ctx_querystring = ctx.querystring;

  ctx.body = {
    url,
    req_query,
    req_querystring,
    ctx_query,
    ctx_querystring,
  };
});

app.listen(8081);
const Koa = require('koa');
const session = require('koa-session');
const app = new Koa();
app.keys = ['hi google'];

const CONFIG = {
  key: 'koa:sess',
  maxAge: 86400000,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
};
app.use(session(CONFIG, app));

app.use(async (ctx) => {
  if (ctx.path === '/favicon.ico') {
    return;
  }
  let n = ctx.session.views || 0;
  console.log('ctx.session :>> ', ctx.session);
  ctx.session.views = ++n;
  ctx.body = n + ' views';
});
app.listen(8081);
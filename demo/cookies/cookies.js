const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  if (ctx.url === '/index') {
    ctx.cookies.set(
      'dic',
      'hello world',
      {
        domain: 'localhost',
        path: '/index',
        maxAge: 10 * 60 * 1000,
        expires: new Date('2021-2-26'),
        httpOnly: true,
        overwrite: false,
      },
    );
    ctx.body = 'cookie is ok';
  } else {
    ctx.body = 'hello world';
  }
});
app.listen(8082, () => {
  console.log('server is running');
})

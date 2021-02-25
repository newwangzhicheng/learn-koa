const Koa = require('koa');
const bodyParser = require('koa-bodyParser');
const app = new Koa();
app.use(bodyParser());

app.use(async (ctx) => {
  if (ctx.url === '/' && ctx.method === 'GET') {
    ctx.body = `
      <h1>This is a form</h1>
      <form action="/" method="POST">
        <p>user name</p>
        <input type="text" name="userName" />
        <p>nick name</p>
        <input type="text" name="nickName" />
        <p>email</p>
        <input type="email" name="email" />
        <button type="submit">Submit</button>
      </form>
    `;
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    console.log('ctx.body.request :>> ', ctx.request.body);
    ctx.body = ctx.request.body;
  } else {
    ctx.body = '404 Not Found!';
  }
});
app.listen('8081');
const Koa = require('koa');
const router = require('./routers/index');
const app = new Koa();

app.use(router.routes()).use(router.allowedMethods());
app.listen(8081);
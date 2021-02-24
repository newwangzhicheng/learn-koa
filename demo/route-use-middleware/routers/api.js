const router = require('koa-router')();

module.exports = router.get('/get/data.json', async (ctx) => {
  ctx.body = {
    success: true,
    data: {
      text: 'hi',
    },
  };
}).get('/get/user.json', async (ctx) => {
  ctx.body = {
    success: true,
    data: {
      text: 'user is jay wang',
    },
  };
});
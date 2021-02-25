const Koa = require('koa');
const app = new Koa();

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
    ctx.body = await parsePostData(ctx);
  } else {
    ctx.body = '404 Not Found!';
  }
});
app.listen('8081');
/**
 * 解析node原生请求的post参数
 * @date 2021-02-24
 * @param {context} ctx koa的上下文环境
 * @return {promise}
 */
async function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postData = '';
      ctx.req.addListener('data', (chunk) => {
        postData += chunk;
      })
      ctx.req.addListener('end', () => {
        let parseData = parseQueryStr(postData);
        resolve(parseData);
      })
    } catch (err) {
      reject (err);
    }
  });
}

/**
 * 将post请求参数解析成JSON
 * @date 2021-02-24
 * @param {string} queryStr querysrting 如a=1&b=2
 * @returns {object}
 */
function parseQueryStr(queryStr) {
  const queryData = {};
  const queryStrList = queryStr.split('&');
  for (const query of queryStrList) {
    const queryList = query.split('=');
    queryData[queryList[0]] = queryList[1];
  }
  return queryData;
}


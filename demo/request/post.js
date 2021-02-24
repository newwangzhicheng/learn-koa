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
 * @param {any} queryStr
 * @returns {any}
 */
function parseQueryStr(queryStr) {

}
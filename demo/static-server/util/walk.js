const fs = require('fs');
const mimes = require('./mimes');
/**
 * 遍历读取目录内容
 * @date 2021-02-25
 * @param {string} reqPath 静态资源绝对路径
 * @returns {array} 目录列表
 */
function walk(reqPath) {
  let files = fs.readdirSync(reqPath);

  let dirList = [];
  let fileList = [];

  for (const [index, item] of files.entries()) {
    let itemArr = item.split('\.');
    let itemMime = (itemArr.length > 1) ? itemArr[itemArr.length - 1] : 'undefined';
    if (typeof mimes[itemMime] === 'undefined') {
      dirList.push(item);
    } else {
      fileList.push(item);
    }
  }

  return dirList.concat(fileList);
}

module.exports = walk;
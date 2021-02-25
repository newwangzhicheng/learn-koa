const fs = require('fs');
/**
 * 描述
 * @date 2021-02-25
 * @param {any} filePath 本地文件的绝对路径
 * @returns {any}
 */
async function file(filePath) {
  return fs.readFileSync(filePath, 'binary');
}

module.exports = file;
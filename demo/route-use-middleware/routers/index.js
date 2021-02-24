const Router = require('koa-router');
const home = require('./home');
const api = require('./api');
const page = require('./page');

const router = new Router();
router.use('/', home.routes(), home.allowedMethods());
router.use('/api', api .routes(), home.allowedMethods());
router.use('/page', page.routes(), home.allowedMethods());

module.exports = router;
const router = require('express').Router();
const controller = require('./controller');

router.route('/simexp')
 .get(controller.get)
 .post(controller.post)

module.exports = router;
const router = require('express').Router();
const controller = require('./controller');

router.route('/simexp/:id?')
 .get(controller.get)
 .post(controller.post)
 .put(controller.put)
 .delete(controller.delete)

module.exports = router;
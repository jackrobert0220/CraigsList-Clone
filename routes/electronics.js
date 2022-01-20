const router = require("express").Router();
const ctrl = require('../controllers');

router.get('/', ctrl.electronics.index);
router.get('/new', ctrl.electronics.newPost);
router.get('/:id', ctrl.electronics.show);
router.post('/', ctrl.electronics.create);
router.put('/:id', ctrl.electronics.update);
router.delete('/:id', ctrl.electronics.destroy);
router.get('/:id/edit', ctrl.electronics.edit);


module.exports = router;
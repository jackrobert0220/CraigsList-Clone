const router = require("express").Router();
const ctrl = require('../controllers');

router.get('/', ctrl.furniture.index);
router.get('/new', ctrl.furniture.newPost);
router.get('/:id', ctrl.furniture.show);
router.post('/', ctrl.furniture.create);
router.put('/:id', ctrl.furniture.update);
router.delete('/:id', ctrl.furniture.destroy);
router.get('/:id/edit', ctrl.furniture.edit);


module.exports = router;
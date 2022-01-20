const router = require("express").Router();
const ctrl = require('../controllers');

router.get('/', ctrl.books.index);
router.get('/new', ctrl.books.newPost);
router.get('/:id', ctrl.books.show);
router.post('/', ctrl.books.create);
router.put('/:id', ctrl.books.update);
router.delete('/:id', ctrl.books.destroy);
router.get('/:id/edit', ctrl.books.edit);


module.exports = router;
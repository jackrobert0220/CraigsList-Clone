const router = require("express").Router();
const ctrl = require('../controllers');

router.get('/', ctrl.gigs.index);
router.get('/new', ctrl.gigs.newPost);
router.get('/:id', ctrl.gigs.show);
router.post('/', ctrl.gigs.create);
router.put('/:id', ctrl.gigs.update);
router.delete('/:id', ctrl.gigs.destroy);
router.get('/:id/edit', ctrl.gigs.edit);


module.exports = router;
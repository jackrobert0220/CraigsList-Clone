const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.posts.index);
router.get('/new', ctrl.posts.newPost);
router.get('/:id', ctrl.posts.show);
router.post('/', ctrl.posts.create);
router.put('/:id', ctrl.posts.update);
router.delete('/:id', ctrl.posts.destroy);
router.get('/:id/edit', ctrl.posts.edit);


module.exports = router;
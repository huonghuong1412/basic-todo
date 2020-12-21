const express = require('express')
const router = express.Router();
const TodoController = require('../app/controller/TodoController')

router.get('/', TodoController.getAll)
router.post('/', TodoController.createTodo)
router.delete('/:id', TodoController.deleteTodo)
router.put('/:id/complete', TodoController.completeTodo)

module.exports = router;
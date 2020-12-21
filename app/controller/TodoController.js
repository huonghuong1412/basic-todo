const Todo = require('../model/Todo')

class TodoController {
    // get /
    getAll = (req, res, next) => {
        Todo.find({})
            .then((todos) => {
                res.json(todos)
            })
            .catch((err) => {
                console.log(err);
                next();
            })
    }

    // post /create
    createTodo = async (req, res, next) => {
        const { task } = req.body;
        try {
            const newTodo = new Todo({ task });
            await newTodo.save()
            return res.json(newTodo)
        } catch (error) {

        }
    }

    // delete Todo
    deleteTodo = (req, res, next) => {
        const id = req.params.id;
        Todo.deleteOne({ _id: id })
            .then(() => {
                res.json({
                    todoId: id
                })
            })
    }

    // get to do edit

    // update todo

    // complete todo

    completeTodo = async (req, res, next) => {
        try {
            const todo = await Todo.findById(req.params.id);
            todo.isCompleted = !todo.isCompleted;
            await todo.save();
            return res.json({
                todoId: req.params.id
            })
        } catch (error) {

        }
    }

}

module.exports = new TodoController();
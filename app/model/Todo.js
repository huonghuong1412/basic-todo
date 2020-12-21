const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Todo = new Schema(
    {
        task: {
            type: String,
            required: true
        },
        isCompleted: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('todo', Todo)
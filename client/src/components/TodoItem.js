import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, completeTodo } from '../actions/index'

class TodoItem extends Component {

    handleDelete = () => {
        this.props.deleteTodo(this.props.todo._id);
    }

    handleCompleteTodo = () => {
        this.props.completeTodo(this.props.todo._id)
    }

    render() {
        let { todo } = this.props;
        return (
            <li className="todo-item" onClick={this.handleCompleteTodo}>
                <p className="todo-task">
                    <span className="icon">
                        <i className={todo.isCompleted ? "fas fa-check show" : "fas fa-check hidden"}></i>
                    </span>
                    <span className={todo.isCompleted ? "line" : ""}>
                        {todo.task}
                    </span>
                </p>
                <span
                    className="todo-icon"
                    onClick={this.handleDelete}>
                    <i className="fas fa-times"></i>
                </span>
            </li>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => {
            dispatch(deleteTodo(id))
        },
        completeTodo: (id) => {
            dispatch(completeTodo(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(TodoItem);

import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import TodoItem from './TodoItem';

class CompleteTodo extends Component {

    componentDidMount() {
        this.props.getAllToDo();
    }

    showTodo = (todos) => {
        if (todos) {
            return todos.filter(todo => todo.isCompleted === true).map((todo, index) => {
                return (
                    <TodoItem todo={todo} key={index} />
                )
            })
        }
    }

    render() {
        let { todos } = this.props;
        return (
            <div className="pt-3 pb-3">
                <ul className="list-todo">
                    {this.showTodo(todos)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos.todos,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllToDo: () => {
            dispatch(actions.getAllTodo())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompleteTodo);

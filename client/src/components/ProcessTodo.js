import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import TodoItem from './TodoItem';

class ProcessTodo extends Component {

    componentDidMount() {
        this.props.getAllToDo();
    }

    showTodo = (todos) => {
        if (todos) {
            return todos.filter(todo => todo.isCompleted === false).map((todo, index) => {
                return (
                    <TodoItem todo={todo} key={index} />
                )
            })
        }
    }

    render() {
        let { todos } = this.props;
        return (
            <>
                <ul className="list-todo">
                    {this.showTodo(todos)}
                </ul>
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProcessTodo);

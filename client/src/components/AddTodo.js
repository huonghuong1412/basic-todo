import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index'
class AddTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClearForm = () => {
        this.setState({
            task: ''
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let { task } = this.state;
        this.props.addTodo(task);
        this.handleClearForm();
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.addTodo(e.target.value);
            e.target.value = "";
        }
    }


    render() {
        return (
            <div className="pt-3 pb-3">
                <div className="form-group d-flex mb-0">
                    <input
                        type="text"
                        name="task"
                        className="form-control"
                        placeholder="Enter task name"
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown}
                    />
                    <button
                        className="btn btn-outline-info"
                        onClick={this.handleSubmit}
                    > Add </button>
                </div>

            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => {
            dispatch(actions.addTodo(todo))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);

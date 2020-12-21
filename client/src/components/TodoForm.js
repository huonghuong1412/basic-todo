import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap'
import ListTodo from './ListTodo';
import AddTodo from './AddTodo';
import CompleteTodo from './CompleteTodo';
import ProcessTodo from './ProcessTodo';

class TodoForm extends Component {
    render() {
        return (
            <>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Tất cả">
                        <AddTodo />
                        <ListTodo />
                    </Tab>
                    <Tab eventKey="process" title="Đang thực hiện">
                        <AddTodo />
                        <ProcessTodo />
                    </Tab>
                    <Tab eventKey="completed" title="Đã xong">
                        <CompleteTodo />
                    </Tab>
                </Tabs>
            </>
        );
    }
}

export default TodoForm;

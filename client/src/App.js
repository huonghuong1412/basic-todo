
import './App.css';
import React, { Component } from 'react'
import Header from './components/Header';
import TodoForm from './components/TodoForm';
class App extends Component {
  render() {
    return (
      <div className="App" >
        <div className="container">
          <div className="main">
            <div className="list-todo">
              <Header />
              <TodoForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import * as types from '../constants'
import axios from 'axios'

// axios.defaults.baseURL =  process.env.baseURL || "http://localhost:5000";
axios.defaults.baseURL =  "https://huongzz.herokuapp.com";

export const getAllTodo = () => dispatch => {
    axios.get('/api/todos')
        .then(res => {
            dispatch({
                type: types.GET_ALL_TODO,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}


export const addTodo = (todo) => dispatch => {
    axios.post('/api/todos', { task: todo })
        .then((res) => {
            dispatch({
                type: types.ADD_TODO,
                payload: res.data
            })
        })
        .catch((err) => console.log(err))
}

export const deleteTodo = (todoId) => dispatch => {
    axios.delete(`/api/todos/${todoId}`)
        .then((res) => {
            dispatch({
                type: types.DELETE_TODO,
                payload: res.data.todoId
            })
        })
        .catch(err => console.log(err));
}

export const completeTodo = (todoId) => dispatch => {
    axios.put(`/api/todos/${todoId}/complete`, todoId)
        .then((res) => {
            dispatch({
                type: types.COMPLETE_TODO,
                payload: res.data.todoId
            })
        })
}
import {getTodos, createTodo} from '../lib/todoServices'

const initState = {
    todos: [],
    currentTodo: ''
}

const CURRENT_STATE = 'CURRENT_UPDATE'
const TODOS_LOAD = 'TODOS_LOAD'
const TODO_ADD = 'TODO_ADD'

export const updateCurrent = (val) => ({type: CURRENT_STATE, payload: val})
export const loadTodos = (todos) => ({type: TODOS_LOAD, payload: todos})
export const addTodo = (todo) => ({type: TODO_ADD, payload: todo})
export const fetchTodos = () => {
    return (dispatch) => {
        getTodos()
            .then(todos => dispatch(loadTodos(todos)))
    }
}

export const saveTodo = (name) => {
    return (dispatcher) => {
        createTodo(name).then(res => dispatcher(addTodo(res)))
    }
}

export default (state = initState, action) => {
    switch (action.type) {
        case TODO_ADD:
            return {...state, currentTodo: '', todos: state.todos.concat(action.payload)}
            break;
        case CURRENT_STATE:
            return {...state, currentTodo: action.payload}
            break;
        case TODOS_LOAD:
            return {...state, todos: action.payload}
            break;
        default:
            return state
    }
    return state
}
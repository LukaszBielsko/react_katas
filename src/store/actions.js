import * as actionTypes from './actionTypes'

const saveTodos = (todos) => ({
  type: actionTypes.GET_ALL_TODOS,
  todos
})

export const fetchAllTodos = () => async (dispatch) => {
  const todosRequest = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos = await todosRequest.json()
  dispatch(saveTodos(todos))
}

import * as actionTypes from './actionTypes'
import { normalize } from 'normalizr'
import { articleEntity } from '../utils/NormalizeData'
import getFakeData from '../utils/fakeData'

const saveTodos = (todos) => ({
  type: actionTypes.GET_ALL_TODOS,
  todos
})

export const fetchAllTodos = () => async (dispatch) => {
  const todosRequest = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos = await todosRequest.json()
  dispatch(saveTodos(todos))
}

const saveArticle = (article) => ({
  type: actionTypes.GET_ARTICLE,
  article
})

export const fetchArticle = () => async (dispatch) => {
  const fakeData = await getFakeData()
  const normalizedData = normalize(fakeData, articleEntity)
  dispatch(saveArticle(normalizedData))
}

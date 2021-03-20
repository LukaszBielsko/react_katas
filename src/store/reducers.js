import * as actionTypes from './actionTypes'

const initalState = {
  users: [],
  posts: [],
  todos: []
}

const rootReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_POSTS_AND_AUTHORS:
      return {
        ...state,
        users: action.users,
        posts: action.posts
      }

    case actionTypes.GET_ALL_TODOS:
      return {
        ...state,
        todos: action.todos
      }
  }
}

export default rootReducer

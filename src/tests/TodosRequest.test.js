import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../store/actions'
import * as types from '../store/actionTypes'
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('thunk todo request ', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('fetches todos', () => {
    fetchMock.getOnce('https://jsonplaceholder.typicode.com/todos', {
      body: [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        }
      ],
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      {
        type: types.GET_ALL_TODOS,
        todos: [
          {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
          },
          {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
          }
        ]
      }
    ]
    const store = mockStore({ todos: [] })

    return store.dispatch(actions.fetchAllTodos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

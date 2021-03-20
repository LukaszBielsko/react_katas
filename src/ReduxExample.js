import { connect } from 'react-redux'
import { getAllTodos, getCompletedTodos } from './store/selectors'

const ReduxExample = (props) => {
  const { allTodos, completedTodos } = props

  const allTodosList = allTodos?.map((todo) => (<p>{todo.title}</p>))
  const completedTodosList = completedTodos?.map((todo) => (<p>{todo.title}</p>))


  return (
    <section>
      <h2>completedTodos</h2>
      <div className="todos" >
        {completedTodosList}
      </div>
      <h2>allTodos</h2>
      <div className="todos">
        {allTodosList}
      </div>
    </section>

  )
}

const mapStateToProps = (state) => ({
  allTodos: getAllTodos(state),
  completedTodos: getCompletedTodos(state)
})

export default connect(mapStateToProps)(ReduxExample)

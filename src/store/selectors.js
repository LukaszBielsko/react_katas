export const getCompletedTodos = (state) => state?.todos?.filter((todo) => todo.completed)

export const getAllTodos = (state) => state?.todos 

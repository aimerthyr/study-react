export const addTodo = (title) => ({
  type: "add",
  title,
});

export const checkTodo = (id) => ({ type: 'check', id })

export const changeTodo = (id, title) => ({ type: 'change', id, title })

export const delTodo = (id) => ({ type: 'del', id })

export const checkAllTodo = (checked) => ({ type: 'checkAll', checked })

export const clearCompletedTodo = () => ({ type: 'clearCompleted' })

export const changeFilterCond = (filter) => ({ type: 'changeFilter', filter})


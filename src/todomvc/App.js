import React, { useEffect } from 'react'
import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'
import { useSelector } from 'react-redux';
export default function App () {
  const list = useSelector(state => state.todo)

  useEffect(() => {
    window.localStorage.setItem('data', JSON.stringify(list))
  }, [list])

    return (
      <section className="todoapp">
        <TodoHeader></TodoHeader>
        <TodoMain></TodoMain>
        <TodoFooter ></TodoFooter>
      </section>
    )
}

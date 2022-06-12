import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../store/action"

export default function TodoHeader () {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')
  const add = (e) => {
    if (e.keyCode === 13 && inputValue.trim()!=='') {
      dispatch(addTodo(inputValue))
      setInputValue('')
    }
  }
  const chaneValue = (e) => {
    const value = e.target.value;
    setInputValue(value)
  }
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        onKeyUp={ add.bind(this) }
        className="new-todo"
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={chaneValue.bind(this)}
        autoFocus
      />
    </header>
  )
}

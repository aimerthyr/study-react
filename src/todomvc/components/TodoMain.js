
import { useDispatch, useSelector } from 'react-redux'
import {checkAllTodo} from '../store/action'
import TodoItem from './TodoItem'
import classNames from 'classnames'
export default function TodoMain(props) {
  const dispatch = useDispatch()
  const list = useSelector(state => {
    if (state.filter === 'All') {
      return state.todo
    } else if (state.filter === 'Actived') {
      return state.todo.filter(v => !v.checked)
    } else {
      return state.todo.filter(v => v.checked)
    }
  })
  const handleAllChecked = (e) => {
    const checked = e.target.checked;
    dispatch(checkAllTodo(checked))
  }
  const isAllchecked = list.length === 0 ? false: list.every(v => v.checked)
  return (
    <section className="main">
      <input
        value={isAllchecked}
        onChange={ handleAllChecked.bind(this)}
        id="toggle-all"
        className={ classNames('toggle-all', { checked: isAllchecked})}
        type="checkbox"
      />
      <label className={ classNames({ checked: isAllchecked})} htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {
          list.map(v => {
            return <TodoItem key={v.id} {...v}></TodoItem>
          })
        }
      </ul>
    </section>
  )
}

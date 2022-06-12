import classNames from "classnames"
import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import {changeTodo, checkTodo, delTodo} from '../store/action'
export default function TodoItem (props) {
  const dispatch = useDispatch()
  const [editId, setEditId] = useState(-1)
  // 聚焦输入框
  const inputRef = useRef(null)
  useEffect(() => {
      inputRef.current.focus();
  }, [editId])

  const changeValue = (id, type, e) => {
    const title = e.target.value
    if (type === 'keyup' && e.keyCode === 13) {
      setEditId(-1)
      dispatch(changeTodo(id, title))
    } else if(type === 'blur'){
      setEditId(-1)
      dispatch(changeTodo(id, title))
    } else if (type === 'change') {
      dispatch(changeTodo(id, title))
    }
  }

  return (
    <li
      className={
        classNames({
          completed: props.checked,
          editing: editId === props.id
        })
      }
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={props.checked}
          onChange={()=> { dispatch(checkTodo(props.id)) }}
        />
        <label onDoubleClick={() => { setEditId(props.id) } }>
          {props.title}
        </label>
        <button
          onClick={()=> { dispatch(delTodo(props.id))}}
          className="destroy"
        ></button>
      </div>
      <input
        autoFocus
        ref={inputRef}
        onChange={changeValue.bind(this, props.id, 'change')}
        value={props.title}
        onBlur={changeValue.bind(this, props.id, 'blur')}
        onKeyUp={changeValue.bind(this, props.id, 'keyup')}
        className="edit"
      />
    </li>
  )
}

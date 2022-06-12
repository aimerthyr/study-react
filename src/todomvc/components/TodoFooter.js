import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterCond, clearCompletedTodo } from "../store/action";
import classNames from "classnames";
const nav = [ { type: 'All'}, { type: 'Actived'}, { type: 'Completed'}];

export default function TodoFooter (props) {
  const list = useSelector((state) => state.todo);
  const currentFilter = useSelector(state => state.filter)
  const dispatch = useDispatch();
  const uncompletedCount = list.filter((v) => !v.checked).length;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{uncompletedCount}</strong> item left
      </span>
      <ul className="filters">
        {nav.map((v, idx) => {
          return (
            <li key={v.type}>
              <a onClick={ ()=> {dispatch(changeFilterCond(v.type))} } className={ classNames({ 'selected': currentFilter === v.type})} href="#/">
                { v.type }
              </a>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          dispatch(clearCompletedTodo());
        }}
        className="clear-completed"
      >
        Clear completed
      </button>
    </footer>
  );
}

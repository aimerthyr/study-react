import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCompletedTodo } from "../store/action";
import classNames from "classnames";
const nav = [ { type: 'All'}, { type: 'Actived'}, { type: 'Completed'}];

export default function TodoFooter (props) {
  const list = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const uncompletedCount = list.filter((v) => !v.checked).length;
  const [curIdx, setCurIdx] = useState(0)

  const chooseSort = (idx, type,e ) => {
    e.preventDefault();
    setCurIdx(idx)
    props.changeShowList(type)
  }
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{uncompletedCount}</strong> item left
      </span>
      <ul className="filters">
        {nav.map((v, idx) => {
          return (
            <li key={v.type}>
              <a onClick={ chooseSort.bind(this, idx, v.type) } className={ classNames({ 'selected': curIdx === idx})} href="#/">
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

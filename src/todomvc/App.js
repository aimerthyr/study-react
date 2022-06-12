import React, { useEffect, useState } from 'react'
import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'
import { useSelector } from 'react-redux';
export default function App () {
  const list = useSelector(state => state.todo)
  // useState会返回setXXX方法之后的最新值 所以如果这个值不是通过setXXX改变的那么 对应的状态不会改变
  const [showList, setShowList] = useState(() => list);

  useEffect(() => {
    window.localStorage.setItem('data', JSON.stringify(list))
    setShowList([...list])
  }, [list])

  const changeShowList = (type) => {
    if (type === 'All') {
      setShowList([...list])
    } else if (type === 'Actived') {
      setShowList(list.filter(v => !v.checked))
    } else if (type === 'Completed') {
      setShowList(list.filter(v => v.checked))
    }
  }
    return (
      <section className="todoapp">
        <TodoHeader></TodoHeader>
        <TodoMain showList={showList}></TodoMain>
        <TodoFooter changeShowList={changeShowList}></TodoFooter>
      </section>
    )
}

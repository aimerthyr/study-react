import { createContext, useEffect, useState } from 'react'
import Header from './Header'
import ShopList from './ShopList'
import SubmitBar from './SubmitBar'

export const Context = createContext();

const arr = [
  {
    id: 1,
    name: '衬衫',
    price: 108,
    count: 1,
    checked: true
  },
  {
    id: 2,
    name: '西装',
    price: 129,
    count: 1,
    checked: true

  },
  {
    id: 3,
    name: '外套',
    price: 198,
    count: 1,
    checked: false

  }
]
export default function ShopCar () {
  const [list, setList] = useState(() => {
    return JSON.parse(window.localStorage.getItem('list')) ?? arr
  })

  useEffect(() => {
    window.localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  const changeCheckProp = (id) => {
    setList(list.map(v => {
      if (v.id === id) {
        return {
          ...v,
          checked: !v.checked
        }
      } else {
        return v
      }
    }))
  }

  const changeCountProp = (id, type) => {
    setList(list.map(v => {
      if (type === 'del' && v.count !== 0 && v.id === id) {
        return {
          ...v,
          count: v.count - 1
        }
      } else if (type === 'add' && v.id === id) {
        return {
          ...v,
          count: v.count + 1
        }
      } else {
        return v
      }
    }))
  }

  const changeAllcheckProp = (checked) => {
    setList(list.map(v => {
      return {
        ...v,
        checked
      }
    }))
  }

  return (
    <>
      <Context.Provider value={{ list, changeCountProp }}>
        <Header></Header>
        <ShopList list={list} changeCheckProp={ changeCheckProp } ></ShopList>
        <SubmitBar list={list} changeAllcheckProp={ changeAllcheckProp }></SubmitBar>
      </Context.Provider>
    </>
  )
}
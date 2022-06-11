import { useContext } from "react"
import { Context } from './index'
export default function Count (props) {
  const context = useContext(Context)
  console.log(context)
  return (
    <>
      <button onClick={ ()=> { context.changeCountProp(props.id, 'del')  }  }>-</button>
      { props.count }
      <button onClick={ ()=> { context.changeCountProp(props.id, 'add')  }  }>+</button>
    </>
  )
}
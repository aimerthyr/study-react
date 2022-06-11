import Count from "./Count"
export default function ShopList (props) {
  const { list, changeCheckProp } = props


  return (
    <ul style={ {  background: 'pink'}} >
      {
        list.map(v => {
          return (
            <li key={v.id} style={ { display: 'flex', alignItems: 'center' , justifyContent: 'center', marginBottom: '10px',}}>
              <input type="checkbox" checked={ v.checked} onChange= { ()=> { changeCheckProp(v.id) } } />
              <span>{v.name}</span>
              <span>{v.price}</span>
              <div>
              <Count count={v.count} id={ v.id }></Count>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}
export default function SubmitBar (props) {
  const { list, changeAllcheckProp } = props
  const totalCount = list.filter(v => v.checked).reduce((pre, item) => pre + item.count, 0);
  const totalPrice = list.filter(v => v.checked).reduce((pre, item) => pre + item.count * item.price, 0)
  const isAllchecked = list.every(v => v.checked)
  return (
    <div style={ {textAlign: 'center', background: 'cyan'}}>
      <input type="checkbox" checked={ isAllchecked } onChange={ ()=> { changeAllcheckProp(!isAllchecked) } } />
      全选
      合计
      <span style={{ color: 'red' }}> { totalPrice }</span>
      <button>
        结算 ({ totalCount })
      </button>
    </div>
  )
}
import { Component } from "react";

class Son1 extends Component {
  render () {
    return (
      <div>
        <h1>大儿子组件</h1>
        <div>
          妈妈：<input value={this.props.mother} onChange={this.changeMotherName} type="text" />
        </div>
        <div>
          妻子：<input value={this.props.wife} onChange={this.changeWifeName} type="text" />
        </div>
        <div>
          弟媳：<input value={this.props.didiWife} onChange={this.changeDiDiWifeName} type="text" />
        </div>
      </div>
    )
  }

  changeDiDiWifeName = (e) => {
    this.props.changeSon2WifeNameProp(e.target.value)
  }

  changeWifeName = (e) => {
    this.props.changeSon1WifeNameProp(e.target.value)
  }



  changeMotherName = (e) => {
    this.props.changeWifeNameProp(e.target.value)
  }
}

class Son2 extends Component {
  render () {
    return (
      <div>
        <h1>小儿子组件</h1>
        <div>
          妈妈：<input value={this.props.mother} onChange={this.changeMotherName} type="text" />
        </div>
        <div>
          妻子：<input value={this.props.wife} onChange={this.changeWifeName} type="text" />
        </div>
        <div>
          嫂子：<input value={this.props.gegeWife} onChange={this.changeGeGeWifeName} type="text" />
        </div>

      </div>
    )
  }

  changeGeGeWifeName = (e) => {
    this.props.changeSon1WifeNameProp(e.target.value)
  }
  changeWifeName = (e) => {
    this.props.changeSon2WifeNameProp(e.target.value)
  }

  changeMotherName = (e) => {
    this.props.changeWifeNameProp(e.target.value)
  }
}

export default class Communicate extends Component {
  state = {
    wife: '',
    son1Wife: '',
    son2Wife: ''
  }
  render () {
    return (
      <div>
        <h1>父组件</h1>
        <div>
          妻子：<input value={this.state.wife} onChange={this.changeWifeName} type="text" />
        </div>
        <div>
          大儿媳妇：<input value={this.state.son1Wife} onChange={this.changeSon1WifeName} type="text" />
        </div>
        <div>
          小儿媳妇：<input value={this.state.son2Wife} onChange={this.changeSon2WifeName} type="text" />
        </div>
        <Son1 mother={this.state.wife} wife={this.state.son1Wife} didiWife={this.state.son2Wife} changeSon2WifeNameProp={this.changeSon2WifeNameProp}  changeSon1WifeNameProp={this.changeSon1WifeNameProp} changeWifeNameProp={this.changeWifeNameProp}></Son1>
        <Son2 mother={this.state.wife} wife={this.state.son2Wife} gegeWife={this.state.son1Wife} changeSon2WifeNameProp={this.changeSon2WifeNameProp} changeSon1WifeNameProp={this.changeSon1WifeNameProp} changeWifeNameProp={this.changeWifeNameProp}></Son2>
      </div>
    )
  }


  changeSon1WifeNameProp = (value) => {
    this.setState({
      son1Wife: value
    })
  }
  changeSon2WifeNameProp = (value) => {
    this.setState({
      son2Wife: value
    })
  }

  changeSon2WifeName = (e) => {
    this.setState({
      son2Wife: e.target.value
    })
  }

  changeSon1WifeName = (e) => {
    this.setState({
      son1Wife: e.target.value
    })
  }

  changeWifeNameProp = (value) => {
    this.setState({
      wife: value
    })
  }


  changeWifeName = (e) => {
    this.setState({
      wife: e.target.value
    })
  }
}
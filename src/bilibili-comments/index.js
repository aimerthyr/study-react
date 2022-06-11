import { Component, createRef } from "react";
import "./index.css";

export class Header extends Component {
  state = {
    tabs: [
      {
        id: 1,
        title: "按热度排序",
        type: "heat",
      },
      {
        id: 2,
        title: "按时间排序",
        type: "time",
      },
    ],
    currenIdx: 0,
  };
  render() {
    return (
      <div className="header">
        <div className="total"> 5 评论</div>
        <div className="tabs">
          <ul>
            {this.state.tabs.map((tab, index) => {
              return (
                <li
                  onClick={this.changeTab.bind(this, index, tab.type)}
                  className={this.state.currenIdx === index ? "actived" : ""}
                  key={tab.id}
                >
                  {tab.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  changeTab = (index,type) => {
    this.setState({
      currenIdx: index,
    });
  };
}

export class Comments extends Component {
  textareaRef = createRef();
  state = {
    commentList: [
      {
        uid: 1,
        name: "小明",
        content: "这个视频太好玩了",
        time: "2021-10-03 09:03:00",
        // 0无感 1赞 2踩
        attitude: 0,
        avatarURL: "",
      },
      {
        uid: 2,
        name: "小红",
        content: "完全不理解",
        time: "2021-09-03 09:03:00",
        // 0无感 1赞 2踩
        attitude: 1,
        avatarURL: "",
      },
    ],
    inputValue: ''
  };
  render() {
    return (
      <>
        <div className="container">
          <textarea ref={this.textareaRef}  name="" id="" cols="30" rows="10"></textarea>
          <button onClick={this.sendComment}>发表评论</button>
        </div>
        <div className="comments">
          {this.state.commentList.map((item) => {
            return (
              <div key={item.uid} className="comments-item">
                <div className="avatar">
                  <img src={item.avatarURL} alt="" />
                </div>
                <div className="detail">
                  <div>{item.name}</div>
                  <div>{item.content}</div>
                  <div className="bottom">
                    <div className="time">{item.time}</div>
                    <div onClick={ this.like.bind(this, item.uid, item.attitude === 1? 0: 1)} className={ `like ${item.attitude === 1?'liked':''}` }>
                      <i></i>
                    </div>
                    <div onClick={ this.hate.bind(this, item.uid, item.attitude === 2?0:2) } className={ `hate ${item.attitude === 2? 'hated': ''}` }>
                      <i></i>
                    </div>
                    <div onClick={this.del.bind(this, item.uid)} className="del">删除</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
  sendComment = () => {
    const value = this.textareaRef.current.value;
    this.setState({
      commentList: [...this.state.commentList, {
        uid: this.state.commentList.length + 1,
        name: "小民",
        content: value,
        time: new Date().toLocaleString(),
        attitude: 0,
        avatarURL: "",
      },]
    })
  }

  del = (id) => {
    this.setState({
      commentList: this.state.commentList.filter(item => {
        return item.uid !==id
      })
    })
  }

  like = (id, attitude) => {
    this.setState({
      commentList: this.state.commentList.map(item => {
        if (item.uid === id) {
          return {
            ...item,
            attitude
          }
        } else {
          return item
        }
      })
    })
  }

  hate = (id,attitude) => {
    this.setState({
      commentList: this.state.commentList.map(item => {
        if (item.uid === id) {
          return {
            ...item,
            attitude
          }
        } else {
          return item
        }
      })
    })
  }

}

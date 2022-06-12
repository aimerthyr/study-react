import { combineReducers } from "redux";

const list = JSON.parse(window.localStorage.getItem('data')) ?? [
  {
    id: 1,
    title: "吃饭",
    checked: false,
  },
  {
    id: 2,
    title: "睡觉",
    checked: true,
  },
];
 function todo(preState = list, action) {
  switch (action.type) {
    case "add":
      return [
        ...preState,
        { id: Date.now(), title: action.title, checked: false },
      ];
    case "check":
      return preState.map((v) => {
        if (v.id === action.id) {
          return {
            ...v,
            checked: !v.checked,
          };
        } else {
          return v;
        }
      });
    case "change":
      return preState.map((v) => {
        if (v.id === action.id) {
          return {
            ...v,
            title: action.title,
          };
        } else {
          return v;
        }
      });
    case "del":
      return preState.filter((v) => v.id !== action.id);
    case 'checkAll':
      return preState.map(v => {
        return {
          ...v,
          checked: action.checked
        }
      })
    case 'clearCompleted':
      return preState.filter(v => !v.checked)
    default:
      return preState;
  }
}

/** 筛选模块 */
function filter (preState = 'All', action) {
  if (action.type === 'changeFilter') {
    return action.filter
  }
  return preState
}

const rootReducer = combineReducers({
  todo,
  filter
})

export default rootReducer

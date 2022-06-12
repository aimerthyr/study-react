import ReactDOM from "react-dom";
import "./todomvc/styles/base.css";
import "./todomvc/styles/index.css";
import App from "./todomvc/App";
import store from "./todomvc/store/store";
import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={ store }>
    <App></App>
  </Provider>,
  document.getElementById("root")
);

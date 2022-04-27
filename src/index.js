import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Reducer from "./reducers/colors.reducers";

const Store = createStore(Reducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

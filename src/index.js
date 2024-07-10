import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { legacy_createStore as createStore } from "redux";
import reducer from "./reducer/reducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "./index.css";
import "./App.css";

const store = createStore(
  reducer,
  composeWithDevTools()
  // +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
const update = () => {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};
update();
store.subscribe(update);

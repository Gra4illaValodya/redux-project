import { legacy_createStore as createStore, bindActionCreators } from "redux";
import * as actions from "./actions/actions";
import reducer from "./reducer/reducer";
const App = () => {
  const store = createStore(reducer);

  const { dispatch } = store;

  // const bindActionCreator =
  //   (creator, dispatch) =>
  //   (...arg) => {
  //     dispatch(creator(...arg));
  //   };

  const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

  document.querySelector(".inc").addEventListener("click", inc);
  document.querySelector(".dec").addEventListener("click", dec);
  document.querySelector(".rnd").addEventListener("click", () => {
    const value = Math.floor(Math.random() * 100 + 1);
    rnd(value);
  });

  const update = () => {
    document.querySelector(".count").textContent = store.getState().value;
  };
  store.subscribe(update);
  return <div className="app">APP</div>;
};

export default App;

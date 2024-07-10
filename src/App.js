

import Counter from "./components/Counter";
const App = () => {

  // const { dispatch, getState, subscribe } = store;
  // const bindActionCreator =
  //   (creator, dispatch) =>
  //   (...arg) => {
  //     dispatch(creator(...arg));
  //   };
  // const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

  return (
    <div className="app">
      <Counter />
    </div>
  );
};

export default App;

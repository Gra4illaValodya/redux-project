import { connect, useDispatch, useSelector } from "react-redux";
import * as action from "../redux/actionCreactor";
import { bindActionCreators } from "redux";
const Counter = () => {
  const { counter } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h2>counter</h2>
      <div>
        <div className="counter-view">{counter}</div>
      </div>
      <div>
        <button onClick={() => dispatch(action.INC())} className="counter-btn">
          INCREAMENT
        </button>
        <button onClick={() => dispatch(action.DEC())} className="counter-btn">
          DECREAMENT
        </button>
        <button onClick={() => dispatch(action.RND())} className="counter-btn">
          RANDOM
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    counter: state.value,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(action, dispatch);
// };
// export default connect(mapStateToProps, action)(Counter);
export default Counter;

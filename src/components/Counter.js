import { connect, useSelector, useDispatch } from "react-redux";
import { inc, dec, rnd } from "../actions/actions";
import { bindActionCreators } from "redux";

const Counter = () => {
  const counter = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <div className="Counter">
      <div className="wrapper">
        <div className="count">{counter}</div>
        <div className="dec" onClick={() => dispatch(dec())}>
          DEC -
        </div>
        <div className="inc" onClick={() => dispatch(inc())}>
          INC +
        </div>
        <div className="rnd" onClick={() => dispatch(rnd())}>
          RND
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     value: state.value,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   const { inc, dec, rnd } = bindActionCreators(action, dispatch);
//   return {
//     inc,
//     dec,
//     rnd,
//   };
// };

export default Counter;
// connect(mapStateToProps, action)(Counter);

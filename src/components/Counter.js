import { connect } from "react-redux";
import * as action from "../actions/actions";
import { bindActionCreators } from "redux";
const Counter = ({ value, inc, dec, rnd }) => {
  return (
    <div className="Counter">
      <div className="wrapper">
        <div className="count">{value}</div>
        <div className="dec" onClick={dec}>
          DEC -
        </div>
        <div className="inc" onClick={inc}>
          INC +
        </div>
        <div className="rnd" onClick={rnd}>
          RND
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    value: state.value,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   const { inc, dec, rnd } = bindActionCreators(action, dispatch);
//   return {
//     inc,
//     dec,
//     rnd,
//   };
// };

export default connect(mapStateToProps, action)(Counter);

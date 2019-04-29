import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { yearNames } from "../constants/";

class Month extends PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: "CURRENT_MONTH"
    });
  }

  render() {
    let _ = this.props;
    return (
      <div className="d-flex justify-content-center pt-3">
        <div className="row">
          <div className="col">
            <button
              className="page-link rounded-circle"
              href="#"
              aria-label="Previous"
              onClick={() => _.dispatch({ type: "DECREMENT_MONTH" })}
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </div>
          <div className="col text-center px-5">
            <h3 className="text-info">
              {_.state && yearNames[_.state.currentMonth]}
            </h3>
            <h6 className="text-muted">{_.state && _.state.currentYear}</h6>
          </div>
          <div className="col">
            <button
              className="page-link rounded-circle"
              href="#"
              aria-label="Next"
              onClick={() => _.dispatch({ type: "INCREMENT_MONTH" })}
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps)(Month);

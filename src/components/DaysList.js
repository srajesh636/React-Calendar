import React, { PureComponent } from "react";
import DayColumn from "./DayColumn";
import { connect } from "react-redux";

class DaysList extends PureComponent {
  componentDidMount() {
    this.props.dispatch({ type: "CURRENT_DAYS" });
  }

  render(props) {
    let _ = this.props;
    return (
      <div className="container-fluid">
        {_.state &&
          _.state.days.map((i, index) => {
            return (
              <DayColumn days={_.state && _.state.days[index]} key={index} />
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};
export default connect(mapStateToProps)(DaysList);

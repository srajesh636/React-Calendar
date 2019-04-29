import React, { memo } from "react";
import Month from "../components/Month";
import DaysContainer from './DaysContainer'

let Calendar = memo(() => {
  return (
    <div className="container-fluid">
      <Month />
      <DaysContainer />
    </div>
  );
});

export default Calendar;

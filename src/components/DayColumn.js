import React, { memo } from "react";
import Day from "./Day";
let DayColumn = memo(({ days, name }) => {
  return (
    <div className="row">
      {days.map(i => {
        return (
          <div className="col border p-5" key={i}>
            <Day no={i} />
          </div>
        );
      })}
    </div>
  );
});

export default DayColumn;

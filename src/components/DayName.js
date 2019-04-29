import React, { memo } from "react";
import { daysNames } from "../constants";

let DayNames = memo(_ => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        {daysNames.map((i, index) => {
          return (
            <div className="col text-center" key={i}>
              <h6>{i}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
});
export default DayNames;

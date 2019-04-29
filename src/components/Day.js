import React, { memo } from "react";

let Day = memo(({ no }) => {
  return (
    <div className="text-center">
      <h5 className="text-secondary">{no}</h5>
    </div>
  );
});

export default Day;

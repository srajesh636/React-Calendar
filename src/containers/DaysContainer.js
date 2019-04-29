import React, { memo } from "react";
import DaysList from "../components/DaysList";
import DayNames from "../components/DayName";

let DaysContainer = memo(() => {
  return (
    <>
      <DayNames />
      <DaysList />
    </>
  );
});

export default DaysContainer;

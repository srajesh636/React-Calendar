import Calendar from "json-calendar";

let currentMonth = "CURRENT_MONTH";
let incrementMonth = "INCREMENT_MONTH";
let decrementMonth = "DECREMENT_MONTH";
let currentDays = "CURRENT_DAYS";
let today = new Date();
let currentYear = new Date().getFullYear();

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case currentMonth:
      return {
        ...state,
        currentMonth: today.getMonth(),
        currentYear: currentYear,
        days: getDays(state.currentMonth)
      };

    case incrementMonth:
      return {
        ...state,
        currentMonth: state.currentMonth === 11 ? 0 : state.currentMonth + 1,
        currentYear:
          state.currentMonth === 11 ? state.currentYear + 1 : state.currentYear,
        days: getDays(state.currentMonth + 1 )
      };
    case decrementMonth:
      return {
        ...state,
        currentMonth: state.currentMonth === 0 ? 11 : state.currentMonth - 1,
        currentYear:
          state.currentMonth === 0 ? state.currentYear - 1 : state.currentYear,
        days: getDays(state.currentMonth - 1)
      };
    case currentDays:
      return {
        ...state,
        currentMonth: today.getMonth(),
        days: getDays(state.currentMonth)
      };
    default:
      break;
  }
};

const getDays = month => {
  let data = new Calendar({ today: new Date(2019, month || 0, 1) });
  let days = data.weeks.map(w => w.map(d => d.day));
  return days;
};

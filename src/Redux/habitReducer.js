import { createSlice } from "@reduxjs/toolkit";

// Function to get today's date in YYYY-MM-DD format
const getFormattedDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Month starts from 0
  return `-${month}-${year}`;
};

export const details = [
  { day: "Mon", status: "none" },
  { day: "Tue", status: "none" },
  { day: "Wed", status: "none" },
  { day: "Thu", status: "none" },
  { day: "Fri", status: "none" },
  { day: "Sat", status: "none" },
  { day: "Sun", status: "none" },
];

// Add date to each detail
details.forEach((detail, index) => {
  detail.date = getFormattedDate(); // Assign today's date
});

// load habits from local storage if there are any
const habitsFromStorage = localStorage.getItem("newHabits")
  ? JSON.parse(localStorage.getItem("newHabits"))
  : [{ title: "Wake Up", description: "wake up at 3:45am", details }];

let habits = [...habitsFromStorage];

const initialState = {
  habits: habits,
};

// habitsReducer contains store, actions and reducers
const habitsReducer = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, { payload }) => {
      state.habits = [...state.habits, payload];
      habits = [...habits, payload];
      window.localStorage.setItem("newHabits", JSON.stringify(habits));
    },
    deleteHabit: (state, action) => {
      state.habits = state.habits.filter(
        (habit) => habit.title !== action.payload
      );
      window.localStorage.setItem("newHabits", JSON.stringify(state.habits));
    },
    changeStatus: (state, { payload }) => {
      state.habits.forEach((habit) => {
        if (habit.title === payload.title) {
          habit.details.forEach((detail) => {
            if (detail.day === payload.details[0].day) {
              detail.status = payload.details[0].status;
            }
          });
        }
      });
      window.localStorage.setItem("newHabits", JSON.stringify(state.habits));
    },
  },
});


export const { addHabit, deleteHabit, changeStatus } = habitsReducer.actions;

export default habitsReducer.reducer;

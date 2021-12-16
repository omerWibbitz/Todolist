import { createSlice } from "@reduxjs/toolkit";

const createTask = (title) => ({
  id: Math.floor(Math.random() * 100),
  title,
  completed: false,
});

const initialState = [createTask("task 1"), createTask("task 2")];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(createTask(action.payload));
    },
    toggleComplete: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      task.completed = !task.completed;
    },
  },
});

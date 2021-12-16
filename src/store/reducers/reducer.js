import { ADDTASK, DELETETASK, EDITTASK } from "../actions";

export const tasks = [
  {
    title: "create a todo list",
    id: 1,
    completed: false,
  },
];

export const reducer = (state = tasks, action) => {
  if (action.type === ADDTASK) {
    return [...state, { title: action.payload, id: state.length + 1 }];
  }

  if (action.type === DELETETASK) {
    return [...state, { completed: action.payload, id: state.length + 1 }];
  }

  return state;
};

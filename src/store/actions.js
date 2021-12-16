export const ADDTASK = "ADD";
export const DELETETASK = "DELETE";
export const EDITTASK = "EDIT";

export const addTask = (value) => ({ type: ADDTASK, payload: value });
export const deleteTask = (value) => ({ type: DELETETASK, payload: value });
export const editTask = (value) => ({ type: EDITTASK, payload: value });

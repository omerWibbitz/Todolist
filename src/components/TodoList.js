import { FILTERS } from "../constants";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { taskSlice } from "../store/taskSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState("all");

  const tasks = useSelector((state) => {
    const all = state.tasks;
    if (activeFilter === "completed") {
      return all.filter((task) => task.completed);
    }

    if (activeFilter === "incomplete") {
      return all.filter((task) => !task.completed);
    }

    return all;
  });

  const handleChangeFilter = (event) => {
    setActiveFilter(event.target.id);
  };

  const handleToggleCompleteTask = (task) => {
    dispatch(taskSlice.actions.toggleComplete(task.id));
  };

  return (
    <Fragment>
      <div className="tasks">
        {tasks.map((task) => (
          <div
            onClick={() => handleToggleCompleteTask(task)}
            className={`task ${task.completed ? "completed" : "incomplete"}`}
          >
            {task.title}
          </div>
        ))}
      </div>
      <div className="filters">
        {Object.keys(FILTERS).map((filterKey) => {
          const currentFilter = FILTERS[filterKey];
          return (
            <span
              className={`filter ${
                activeFilter === currentFilter && "selected"
              }`}
              onClick={handleChangeFilter}
              id={currentFilter}
            >
              {currentFilter}
            </span>
          );
        })}
      </div>
    </Fragment>
  );
};

export default TodoList;

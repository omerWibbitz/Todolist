import AddToDo from "./components/AddToDo";
import TodoList from "./components/TodoList";
import "./App.css";

const TodoListComponent = () => {
  return (
    <div className="todo-list">
      <div className="header">
        <h2>My To Do List</h2>
      </div>
      <AddToDo />
      <TodoList />
    </div>
  );
};

export default TodoListComponent;

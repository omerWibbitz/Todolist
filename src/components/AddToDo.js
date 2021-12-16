import {useDispatch} from "react-redux";
import {useState} from "react";
import {taskSlice} from "../store/taskSlice";

const AddToDo = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState("");

    const handleAddTask = () => {
        dispatch(taskSlice.actions.add(document.getElementById("myInput").value));
        setTask("");
    };

    const onChangeInput = (event) => {
        setTask(event.target.value);
    }

    return (
        <div className="add-to-do">
            <input
                type="text"
                id="myInput"
                placeholder="Add a task..."
                value={task}
                onChange={onChangeInput}
            />
            <span className="addBtn" onClick={handleAddTask}>
        Add
      </span>
        </div>
    );
};

export default AddToDo;

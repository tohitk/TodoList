import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const TodoForm = ({ onAddTask }) => {
  const [enteredTask, setEnteredTask] = useState("");
  const [showError, setShowError] = useState(false);

  const enteredTaskChangeHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  const addTaskHandler = (event) => {
    event.preventDefault();
    if (enteredTask.trim().length <= 0) return setShowError(true);
    onAddTask(enteredTask);
    setEnteredTask("");
  };

  return (
    <div>
      <form
        onSubmit={addTaskHandler}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        <TextField
          id="standard-error-helper-text"
          label="Enter task..."
          variant="standard"
          error={showError}
          helperText={showError ? "Please enter a valid task" : ""}
          onFocus={() => setShowError(false)}
          value={enteredTask}
          onChange={enteredTaskChangeHandler}
        />
        <Button variant="contained" type="submit">
          Add Task
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;

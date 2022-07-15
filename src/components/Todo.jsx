import React from "react";
import { Checkbox } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Todo = ({ completed, task, id, onChangeStatus, onDelete }) => {
  return (
    <label>
      <div
        style={{
          background: completed ? "lightgreen" : "yellow",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // width: "100%",
          margin: "6px 0px",
          padding: "0px 4px",
          border: "1px solid black",
          borderRadius: "6px",
        }}
      >
        <Checkbox checked={completed} onChange={() => onChangeStatus(id)} />
        <p style={{ textDecoration: completed ? "line-through" : "none" }}>
          {task}
        </p>
        <CloseIcon style={{ cursor: "pointer" }} onClick={() => onDelete(id)} />
      </div>
    </label>
  );
};

export default Todo;

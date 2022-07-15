import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onChangeStatus, onDelete }) => {
  return (
    <div style={{ maxHeight: "70vh", overflowY: "scroll" }}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          task={todo.task}
          completed={todo.completed}
          id={todo.id}
          onChangeStatus={onChangeStatus}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;

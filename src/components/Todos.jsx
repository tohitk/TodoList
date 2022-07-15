import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("@todos");
    if (savedTodos) return JSON.parse(savedTodos);
    else return [];
  });

  useEffect(() => {
    localStorage.setItem("@todos", JSON.stringify(todos));
  }, [todos]);

  const saveTaskHandler = (enteredTask) => {
    setTodos((prevTodos) => [
      { id: Math.random().toString(), task: enteredTask, completed: false },
      ...prevTodos,
    ]);
  };

  const clearCompletedTodosHandler = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const changeTaskStatusHandler = (id) => {
    const newTodos = [...todos];
    const checkedTodo = newTodos.find((todo) => todo.id === id);
    checkedTodo.completed = !checkedTodo.completed;
    setTodos(newTodos);
  };

  const deleteTaskHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoForm onAddTask={saveTaskHandler} />
      <TodoList
        todos={todos}
        onChangeStatus={changeTaskStatusHandler}
        onDelete={deleteTaskHandler}
      />
      <div style={{ marginTop: "12px" }}>
        <Button variant="outlined" onClick={clearCompletedTodosHandler}>
          Clear Completed
        </Button>
      </div>
    </div>
  );
};

export default Todos;

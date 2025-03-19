"use client";

import React from "react";
import TodoItem from "./TodoItem";
import useTodoQuery from "../../query/useTodoQuery";

const TodoList = () => {
  const { data: todos } = useTodoQuery();

  return (
    <ul className="space-y-2">
      {todos?.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

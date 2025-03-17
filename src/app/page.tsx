import React from "react";
import TodoForm from "../../components/todo/TodoForm";
import TodoList from "../../components/todo/TodoList";

const Homepage = async () => {
  return (
    <div className="container p-2 mx-auto space-y-4">
      <TodoList />
      <TodoForm />
    </div>
  );
};

export default Homepage;

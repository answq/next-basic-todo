import React from "react";
import { Todo } from "../../../../types/todo.type";

const ONE_MINUTE_SECONDS = 60;

const ISRpage = async () => {
  const response = await fetch("http://localhost:3000/todos", {
    next: {
      revalidate: ONE_MINUTE_SECONDS,
    },
  });
  const data: Todo[] = await response.json();
  return <div>ISRpage: {JSON.stringify(data)}</div>;
};

export default ISRpage;

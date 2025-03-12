import React from "react";
import Link from "next/link";

const Detailpage = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todo = await data.json();
  return (
    <div>
      Detailpage
      <h1>{todo.title}</h1>
      <Link href="/">Home Page</Link>
    </div>
  );
};

export default Detailpage;

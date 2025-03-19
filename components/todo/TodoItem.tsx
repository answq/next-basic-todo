"use client";

import React from "react";
import { Todo } from "../../types/todo.type";
import { deleteTodo } from "../../api/todo-api";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useToggleTodoMutation } from "../../query/useTodoMutation";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { mutate: toggleTodoCompleted } = useToggleTodoMutation();
  const { completed, id, text } = todo;

  return (
    <article className="flex flex-row items-center justify-between p-2 rounded-md border">
      <Link
        href={`/${id}`}
        className={cn("hover:underline", { "line-through": completed })}
      >
        <h2>{text}</h2>
      </Link>

      <div className="space-x-2">
        <Button
          onClick={() => toggleTodoCompleted({ id, completed: !completed })}
          variant="outline"
        >
          {completed ? "취소" : "완료"}
        </Button>
        <Button onClick={() => deleteTodo(id)} variant="destructive">
          삭제하기
        </Button>
      </div>
    </article>
  );
};

export default TodoItem;

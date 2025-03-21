"use client";

import React, { useId } from "react";
import { Todo } from "../../types/todo.type";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useToggleTodoMutation } from "../../query/useTodoMutation";
import { Checkbox, CheckedState } from "@radix-ui/react-checkbox";
import TodoDeleteButton from "./TodoDeleteButton";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { mutate: toggleTodoCompleted } = useToggleTodoMutation();
  const { completed, id, text } = todo;
  const checkboxId = useId();
  const onCheckedChange = (checked: CheckedState) => {
    if (checked === "indeterminate") return;
    toggleTodoCompleted({ id, completed: checked });
  };

  return (
    <article className="flex flex-row items-center justify-between p-2 rounded-md border">
      <div>
        <Checkbox
          id={checkboxId}
          checked={completed}
          onCheckedChange={onCheckedChange}
        />
        <Link
          href={`/${id}`}
          className={cn("hover:underline", { "line-through": completed })}
        >
          <h2>{text}</h2>
        </Link>
      </div>
      <div className="space-x-2">
        <TodoDeleteButton id={id} />
      </div>
    </article>
  );
};

export default TodoItem;

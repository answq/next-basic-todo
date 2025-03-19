import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/todo-api";

const useTodoQuery = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
};

export default useTodoQuery;

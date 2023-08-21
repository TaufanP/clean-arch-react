import { useQuery } from "@tanstack/react-query";
import { Todo } from "../../Domain/Models/Todo";
import { TodoRepository } from "../Repositories/TodoRepository";

export const useFetchTodos = (repository: TodoRepository) => {
  const { data, isLoading } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: () => repository.getTodos(),
  });

  return {
    todos: data?.slice(-10),
    isFetchTodosLoading: isLoading,
  };
};

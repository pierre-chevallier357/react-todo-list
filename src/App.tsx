import { useCallback, useMemo, useState } from "react";
import TodoInput from "./Components/TodoInput/TodoInput";
import TodoList from "./Components/TodoList/TodoList";
import { InputProps, TodosProps } from "./Props";
import { Todo } from "./Models/Todo";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const toggleIsDone = useCallback(
    (todo: Todo): void => {
      const updatingTodo: number = todos.findIndex((t) => t.id === todo.id);
      let newTodos = [...todos];
      newTodos[updatingTodo].isDone = !newTodos[updatingTodo].isDone;
      setTodos(newTodos);
    },
    [todos]
  );

  const removeTodo = useCallback(
    (todo: Todo): void =>
      setTodos((todos) => [...todos].filter((t) => t.id !== todo.id)),
    []
  );

  const todosProps: TodosProps = useMemo((): TodosProps => {
    return { todos, toggleIsDone, removeTodo };
  }, [todos, toggleIsDone, removeTodo]);

  const inputProps: InputProps = { setTodos };

  return (
    <>
      <TodoList props={todosProps}></TodoList>
      <TodoInput props={inputProps}></TodoInput>
    </>
  );
}

import { useCallback, useMemo, useState } from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import { Todo } from "./models/Todo";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const inputProps: { setTodos: Function } = { setTodos };

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

  const editTodo = useCallback(
    (todo: Todo, text: string): void => {
      const updatingTodo: number = todos.findIndex((t) => t.id === todo.id);
      let newTodos = [...todos];
      newTodos[updatingTodo].text = text;
      setTodos(newTodos);
    },
    [todos]
  );

  const todosProps = useMemo(() => {
    return { todos, editTodo, removeTodo, toggleIsDone };
  }, [todos, editTodo, removeTodo, toggleIsDone]);

  return (
    <div className="todo-app">
      <h1>Todo list</h1>
      <TodoList props={todosProps}></TodoList>
      <TodoInput props={inputProps}></TodoInput>
    </div>
  );
}

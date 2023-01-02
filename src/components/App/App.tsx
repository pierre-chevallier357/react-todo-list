import { useCallback, useMemo, useState } from "react";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import { Todo } from "../../models/Todo";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const inputProps: { setTodos: Function } = { setTodos };

  const toggleIsDone = useCallback(
    (todoId: number): void => {
      const updatingTodo: number = todos.findIndex((t) => t.id === todoId);
      let newTodos = [...todos];
      newTodos[updatingTodo].isDone = !newTodos[updatingTodo].isDone;
      setTodos(newTodos);
    },
    [todos]
  );

  const removeTodo = useCallback(
    (todoId: number): void =>
      setTodos((todos) => [...todos].filter((t) => t.id !== todoId)),
    []
  );

  const editTodo = useCallback(
    (todoId: number, text: string): void => {
      const updatingTodo: number = todos.findIndex((t) => t.id === todoId);
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
      <TodoList props={todosProps} />
      <TodoInput props={inputProps} />
    </div>
  );
}

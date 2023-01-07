import { useCallback, useState } from "react";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import { Todo } from "../../models/Todo";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const toggleIsDone = useCallback(
    (todoId: number): void => {
      const updatingTodo: number = todos.findIndex((t) => t.id === todoId);
      let newTodos = [...todos];
      newTodos[updatingTodo].isDone = !newTodos[updatingTodo].isDone;
      setTodos(newTodos);
    },
    [todos]
  );

  const removeTodo = useCallback((todoId: number): void => {
    setTodos((todos) => [...todos].filter((t) => t.id !== todoId));
  }, []);

  const editTodo = useCallback((todoId: number, text: string): void => {
    setTodos((todos) => {
      todos[todos.findIndex((t) => t.id === todoId)].text = text;
      return todos;
    });
  }, []);

  return (
    <div className="todo-app">
      <h1>Todo list</h1>
      <TodoList
        todos={todos}
        editTodo={editTodo}
        removeTodo={removeTodo}
        toggleIsDone={toggleIsDone}
      />
      <TodoInput setTodos={setTodos} />
    </div>
  );
}

import { useState } from "react";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import { Todo } from "../../models/Todo";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function toggleIsDone(todoId: number): void {
    const updatingTodo: number = todos.findIndex((t) => t.id === todoId);
    let newTodos = [...todos];
    newTodos[updatingTodo].isDone = !newTodos[updatingTodo].isDone;
    setTodos(newTodos);
  }

  function removeTodo(todoId: number): void {
    setTodos((todos) => [...todos].filter((t) => t.id !== todoId));
  }

  function editTodo(todoId: number, text: string): void {
    const updatingTodo: number = todos.findIndex((t) => t.id === todoId);
    let newTodos = [...todos];
    newTodos[updatingTodo].text = text;
    setTodos(newTodos);
  }

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

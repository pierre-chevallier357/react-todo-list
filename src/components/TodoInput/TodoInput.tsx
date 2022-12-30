import { useState } from "react";
import { InputProps } from "../../props";
import { Todo } from "../../models/Todo";

export default function TodoInput({ props }: { props: InputProps }) {
  const [inputText, setInputText] = useState("");

  function addTodo(e: any): void {
    if (e.key === "Enter") {
      props.setTodos((todos: Todo[]) => [
        ...todos,
        { id: getNewId(todos), text: e.target.value, isDone: false },
      ]);
      setInputText("");
    }
  }

  function getNewId(todos: Todo[]): number {
    return todos.length === 0 ? 0 : todos[todos.length - 1].id + 1;
  }

  return (
    <input
      type="text"
      onKeyDown={(e) => addTodo(e)}
      onChange={(e) => setInputText(e.target.value)}
      value={inputText}
      placeholder="Add a todo"
    />
  );
}

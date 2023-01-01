import { useState } from "react";
import { InputProps } from "../../props";
import { Todo } from "../../models/Todo";

export default function TodoInput({ props }: { props: InputProps }) {
  const [inputText, setInputText] = useState("");

  function addTodo(e: any): void {
    if (e.key === "Enter") {
      props.setTodos((todos: Todo[]) => [
        ...todos,
        { id: todos.length + 1, text: e.target.value, isDone: false },
      ]);
      setInputText("");
    }
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

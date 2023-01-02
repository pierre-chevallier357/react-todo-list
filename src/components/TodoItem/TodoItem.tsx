import { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import useDoubleClick from "../../hooks/useDoubleClick";
import { Todo } from "../../models/Todo";
import "./TodoItem.css";

interface Props {
  todo: Todo;
  editTodo: Function;
  removeTodo: Function;
  toggleIsDone: Function;
}

export default function TodoItem({
  todo,
  editTodo,
  removeTodo,
  toggleIsDone,
}: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputText, setInputText] = useState("");

  function enableEditingMode(): void {
    setIsEditing(true);
    setInputText(todo.text);
  }

  function disableEditingMode(e?: any): void {
    if (!e || e.key === "Enter") {
      editTodo(todo.id, inputText);
      setIsEditing(false);
    }
  }

  const handleClick = useDoubleClick(
    () => toggleIsDone(todo.id),
    enableEditingMode
  );

  const inputRef = useRef(null);
  useClickOutside(inputRef, disableEditingMode);

  return (
    <div className="todo">
      {!isEditing && (
        <li
          key={todo.id}
          onClick={handleClick}
          className={`cursor-pointer ${todo.isDone && "crossed-text"}`}
        >
          {todo.text}
        </li>
      )}
      {isEditing && (
        <input
          ref={inputRef}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => disableEditingMode(e)}
          autoFocus={true}
        />
      )}
      <button className="delete-button" onClick={() => removeTodo(todo.id)}>
        X
      </button>
    </div>
  );
}

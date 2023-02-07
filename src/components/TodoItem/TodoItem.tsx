import { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import useDoubleClick from "../../hooks/useDoubleClick";
import { Todo } from "../../models/Todo";
import "./TodoItem.css";

interface TodoItemProps {
  todo: Todo;
  editTodo: Function;
  removeTodo: Function;
  toggleIsDone: Function;
}

export default function TodoItem(props: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputText, setInputText] = useState("");

  function enableEditingMode(): void {
    setIsEditing(true);
    setInputText(props.todo.text);
  }

  function disableEditingMode(e?: any): void {
    if (!e || e.key === "Enter") {
      props.editTodo(props.todo.id, inputText);
      setIsEditing(false);
    }
  }

  const handleClick = useDoubleClick(
    () => props.toggleIsDone(props.todo.id),
    enableEditingMode
  );

  const inputRef = useRef(null);
  useClickOutside(inputRef, disableEditingMode);

  return (
    <div className="todo">
      {!isEditing && (
        <li
          key={props.todo.id}
          onClick={handleClick}
          className={`cursor-pointer ${props.todo.isDone && "crossed-text"}`}
        >
          {props.todo.text}
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
      <button
        className="delete-button"
        onClick={() => props.removeTodo(props.todo.id)}
      >
        X
      </button>
    </div>
  );
}

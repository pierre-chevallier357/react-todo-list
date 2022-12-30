import { useState } from "react";
import useDoubleClick from "../../hooks/useDoubleClick";
import { TodoProps } from "../../props";
import "./TodoItem.css";

export default function TodoItem({ props }: { props: TodoProps }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleClick = useDoubleClick(null, () => {
    setIsEditing(true);
    setInputText(props.todo.text);
  });

  function editTodo(e: any): void {
    if (e.key === "Enter") {
      props.editTodo(props.todo, inputText);
      setIsEditing(false);
    }
  }

  return (
    <div style={{ display: "flex" }}>
      {!isEditing && (
        <li
          key={props.todo.id}
          onClick={handleClick}
          className={`${props.todo.isDone ? "crossed-text" : ""}`}
        >
          {props.todo.text}
        </li>
      )}
      {isEditing && (
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => editTodo(e)}
          autoFocus={true}
        />
      )}
      &nbsp;
      <button onClick={() => props.removeTodo(props.todo)}>X</button>
    </div>
  );
}

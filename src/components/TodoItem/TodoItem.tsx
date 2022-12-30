import { TodoProps } from "../../props";
import "./TodoItem.css";

export default function TodoItem({ props }: { props: TodoProps }) {
  return (
    <div style={{ display: "flex" }}>
      <li
        key={props.todo.id}
        onClick={() => props.toggleIsDone(props.todo)}
        className={`${props.todo.isDone ? "crossed-text" : ""}`}
      >
        {props.todo.text}
      </li>
      &nbsp;
      <button onClick={() => props.removeTodo(props.todo)}>X</button>
    </div>
  );
}

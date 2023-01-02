import { Todo } from "../../models/Todo";
import TodoItem from "../TodoItem/TodoItem";

interface Props {
  todos: Todo[];
  editTodo: Function;
  removeTodo: Function;
  toggleIsDone: Function;
}

export default function TodoList({
  todos,
  editTodo,
  removeTodo,
  toggleIsDone,
}: Props) {
  return (
    <ul>
      {todos.map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editTodo={editTodo}
          removeTodo={removeTodo}
          toggleIsDone={toggleIsDone}
        />
      ))}
    </ul>
  );
}

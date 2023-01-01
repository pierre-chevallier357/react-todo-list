import { memo } from "react";
import { Todo } from "../../models/Todo";
import TodoItem from "../TodoItem/TodoItem";

interface Props {
  todos: Todo[];
  editTodo: Function;
  removeTodo: Function;
  toggleIsDone: Function;
}

const TodoList = memo(function TodoList({ props }: { props: Props }) {
  return (
    <ul>
      {props.todos.map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          props={{
            todo: todo,
            editTodo: props.editTodo,
            toggleIsDone: props.toggleIsDone,
            removeTodo: props.removeTodo,
          }}
        />
      ))}
    </ul>
  );
});

export default TodoList;

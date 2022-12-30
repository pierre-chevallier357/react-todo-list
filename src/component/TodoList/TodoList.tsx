import { memo } from "react";
import { TodosProps } from "../../prop";
import { Todo } from "../../model/Todo";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = memo(function TodoList({ props }: { props: TodosProps }) {
  return (
    <ul>
      {props.todos.map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          props={{
            todo: todo,
            removeTodo: props.removeTodo,
            toggleIsDone: props.toggleIsDone,
          }}
        ></TodoItem>
      ))}
    </ul>
  );
});

export default TodoList;

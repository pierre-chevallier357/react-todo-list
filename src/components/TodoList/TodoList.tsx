import { memo } from "react";
import { TodosProps } from "../../props/ndex";
import { Todo } from "../../models/Todo";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = memo(function TodoList({ props }: { props: TodosProps }) {
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
        ></TodoItem>
      ))}
    </ul>
  );
});

export default TodoList;

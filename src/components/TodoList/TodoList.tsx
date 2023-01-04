import { Todo } from "../../models/Todo";
import TodoItem from "../TodoItem/TodoItem";
import React from "react";

interface Props {
  todos: Todo[];
  editTodo: Function;
  removeTodo: Function;
  toggleIsDone: Function;
}

function TodoList({ todos, editTodo, removeTodo, toggleIsDone }: Props) {
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
export default React.memo(TodoList);

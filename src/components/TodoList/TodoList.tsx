import { Todo } from "../../models/Todo";
import TodoItem from "../TodoItem/TodoItem";
import React from "react";

interface TodoListProps {
  todos: Todo[];
  editTodo: Function;
  removeTodo: Function;
  toggleIsDone: Function;
}

function TodoList(props: TodoListProps) {
  return (
    <ul>
      {props.todos.map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editTodo={props.editTodo}
          removeTodo={props.removeTodo}
          toggleIsDone={props.toggleIsDone}
        />
      ))}
    </ul>
  );
}
export default React.memo(TodoList);

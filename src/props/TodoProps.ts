import { Todo } from "../models/Todo";

export interface TodoProps {
  todo: Todo;
  editTodo: Function;
  removeTodo: Function;
  toggleIsDone: Function;
}

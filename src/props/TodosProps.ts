import { Todo } from "../models/Todo";

export interface TodosProps {
  todos: Todo[];
  editTodo: Function;
  removeTodo: Function;
  toggleIsDone: Function;
}

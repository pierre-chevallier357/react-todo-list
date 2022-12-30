import { Todo } from "../models/Todo";

export interface TodosProps {
  todos: Todo[];
  toggleIsDone: Function;
  removeTodo: Function;
}

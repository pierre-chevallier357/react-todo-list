import { Todo } from "../Models/Todo";

export interface TodosProps {
  todos: Todo[];
  toggleIsDone: Function;
  removeTodo: Function;
}

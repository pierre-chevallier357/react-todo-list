import { Todo } from "../model/Todo";

export interface TodosProps {
  todos: Todo[];
  toggleIsDone: Function;
  removeTodo: Function;
}

import { Todo } from "../Models/Todo";

export interface TodoProps {
  todo: Todo;
  toggleIsDone: Function;
  removeTodo: Function;
}

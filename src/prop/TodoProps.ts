import { Todo } from "../model/Todo";

export interface TodoProps {
  todo: Todo;
  toggleIsDone: Function;
  removeTodo: Function;
}

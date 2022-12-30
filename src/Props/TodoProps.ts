import { Todo } from "../models/Todo";

export interface TodoProps {
  todo: Todo;
  toggleIsDone: Function;
  removeTodo: Function;
}

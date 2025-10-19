import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import './ToDoList.scss'

export const ToDoList = () => {
  return (
    <div className="todo-container">
      <ul className="todo-list failed">
        <ToDoListItem />
      </ul>
      <ul className="todo-list completed">
       <ToDoListItem />
      </ul>
    </div>
  );
};

import { ToDo } from '../../../models/todo-item';
import './ToDoListItem.scss'

export const ToDoListItem = (props: {todoItem: ToDo, updateToDo: Function, deleateToDo: Function}) => {
  return (
    <li className="todo-list-item__wrapper">
      <span>{props.todoItem.title}</span>
      <div className="todo-list-item__buttons">
        <button className="btn-trash" onClick={() => props.deleateToDo(props.todoItem)}></button>
        <button className={props.todoItem.isDone ? 'btn-check' : 'btn-uncheck'} onClick={() => props.updateToDo(props.todoItem)}></button>
      </div>
    </li>
  );
};

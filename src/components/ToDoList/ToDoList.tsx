import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import './ToDoList.scss'
import { ToDo } from "../../models/todo-item";



export const ToDoList = (props: { todos: ToDo[], updateToDo: Function, deleateToDo: Function }) => {

  const chekedList = () => {
    return props.todos
          .filter((item) => !item.isDone)
          .map((item, idx) => {
            return <ToDoListItem todoItem={item} key={idx} updateToDo={props.updateToDo} deleateToDo={props.deleateToDo} />;
          })
  }

    const unchekedList = () => {
    return props.todos
          .filter((item) => item.isDone)
          .map((item, idx) => {
            return <ToDoListItem todoItem={item} key={idx} updateToDo={props.updateToDo} deleateToDo={props.deleateToDo} />;
          })
  }


  return (
    <div className="todo-container">
      <ul className="todo-list failed">
        { chekedList() }
      </ul>
      <ul className="todo-list completed">
        { unchekedList() }
      </ul>
    </div>
  );
};

import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import { ToDo } from "../../models/todo-item";
import { ToDoListContainer, ToDoListUl } from "./ToDoList.styled";



export const ToDoList = (props: { todos: ToDo[], updateToDo: Function, deleateToDo: Function }) => {

  const chekedList = () => {
    return props.todos
          .filter((item) => !item.isDone)
          .map((item) => {
            return <ToDoListItem todoItem={item} key={item.id} updateToDo={props.updateToDo} deleateToDo={props.deleateToDo} />;
          })
  }

    const unchekedList = () => {
    return props.todos
          .filter((item) => item.isDone)
          .map((item) => {
            return <ToDoListItem todoItem={item} key={item.id} updateToDo={props.updateToDo} deleateToDo={props.deleateToDo} />;
          })
  }


  return (
    <ToDoListContainer className="todo-container">
      <ToDoListUl className="todo-list failed">
        { chekedList() }
      </ToDoListUl>
      <ToDoListUl className="todo-list completed">
        { unchekedList() }
      </ToDoListUl>
    </ToDoListContainer>
  );
};

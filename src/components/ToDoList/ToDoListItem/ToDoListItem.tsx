import { ToDo } from '../../../models/todo-item';
import { ToDoItem, ToDoItemButton, ToDoItemButtons, ToDoItemText } from './ToDoListItem.styled';
import { RootState } from "../../../store";
import { useSelector } from "react-redux";

import checkIcon from '../../../assets/images/check.png'
import uncheckIcon from '../../../assets/images/uncheck.png'
import trashIcon from '../../../assets/images/trash.png'

export const ToDoListItem = (props: {todoItem: ToDo, updateToDo: Function, deleateToDo: Function}) => {
const theme = useSelector((state: RootState) => state.themeList.theme)


  return (
    <ToDoItem>
      <ToDoItemText>{props.todoItem.title}</ToDoItemText>
      <ToDoItemButtons>
        <ToDoItemButton icon={trashIcon} onClick={() => props.deleateToDo(props.todoItem)}></ToDoItemButton>
        <ToDoItemButton icon={props.todoItem.isDone ? checkIcon : uncheckIcon} onClick={() => props.updateToDo(props.todoItem)}></ToDoItemButton>
      </ToDoItemButtons>
    </ToDoItem>
  );
};

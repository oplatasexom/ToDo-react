import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/todo-item";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { createAction, deleteAction, updateAction } from "../feature/todoList";

export const ToDoListPage = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos)
  const dispatch = useDispatch()

  const createNewToDo = (title: string) => {
    dispatch(createAction(title))
  }

  const updateToDo = (todoItem: ToDo) => {
    dispatch(updateAction(todoItem))
  }

    const deleateToDo = (todoItem: ToDo) => {
      dispatch(deleteAction(todoItem))
  }


  return (
    <>
    <Form createNewToDo={createNewToDo}/>
    <ToDoList todos={todoList} updateToDo={updateToDo} deleateToDo={deleateToDo} />
    </>
  );
};

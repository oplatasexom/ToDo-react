import { useState } from "react";
import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/todo-item";

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>([])

  const createNewToDo = (title: string) => {
    const newToDo: ToDo = {
      id: todos.length,
      title: title,
      isDone: false
    }

    setTodos([...todos, newToDo])
  }

  const updateToDo = (todoItem: ToDo) => {
    const newTodos = todos.map((item) => {
      if (item.id === todoItem.id) {
        item.isDone = !item.isDone
      }
      return item
    })
    setTodos(newTodos)
  }

    const deleateToDo = (todoItem: ToDo) => {
      const newTodos = todos.filter((item) => item.id !== todoItem.id)
      setTodos(newTodos)
  }


  return (
    <>
    <Header />
    <Form createNewToDo={createNewToDo}/>
    <ToDoList todos={todos} updateToDo={updateToDo} deleateToDo={deleateToDo} />
    </>
  );
};

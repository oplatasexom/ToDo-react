import { useEffect, useState } from "react"
import { ToDo } from "../models/todo-item"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../store"

export const ItemDescription = ( ) => {
    const todoList = useSelector((state: RootState) => state.todoList.todos)
    const { id } = useParams()
    const navigate = useNavigate()
    const [todo, setTodo] = useState<ToDo>()

    useEffect(() => {
        const searchToDo = todoList.find((todo) => String(todo.id) === id)

        if (searchToDo) {
            setTodo(searchToDo)
        } else {
            navigate('/404')
        }

    }, [id, todoList, navigate])

    return (
        <div className="container">
            <h1>{todo?.title}</h1>
        </div>
    )
}
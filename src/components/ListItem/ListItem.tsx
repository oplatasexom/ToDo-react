import { ToDo } from "../../models/todo-item"
import { DateDiv, ListItemLink } from "./ListItem.styled"

export const ListItem = ({ todo }: { todo: ToDo }) => {
    const formattedDate = todo.createdAt ? 
        new Date(todo.createdAt).toLocaleString('ru-RU', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
        : null

    return (
        <ListItemLink $isDone={todo.isDone} to={`/list/${todo.id}`}>
            {todo.title}
            <DateDiv className="Date">
                {formattedDate && (
                <small>{formattedDate}</small>
            )}
            </DateDiv>
        </ListItemLink>
    )
}
import { Link } from "react-router-dom"
import { Header } from "../components/Header/Header"

export const NotFound = () => {
    return (
        <div className="container">
            <h1>Not Found</h1>
            <Link to="/">To Home</Link>
        </div>
    )
}
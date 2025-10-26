import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { NotFound } from "./pages/404";
import { ToDoListPage } from "./pages/ToDoListPage";
import { ViewListPage } from "./pages/ViewListPage";
import { ItemDescription } from "./pages/ItemDescription";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />, 
    children: [
      {
        path: '/',
        element: <ToDoListPage /> 
      },
      {
        path: '/list',
        element: <ViewListPage />
      },
      {
        path: '/list/:id',
        element: <ItemDescription />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound /> 
  }
], { basename: '/app/' })
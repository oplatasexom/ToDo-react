import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ToDo } from '../models/todo-item'
import { v4 as uuid } from 'uuid';

export interface TodoState {
  todos: ToDo[]
}

const initialState: TodoState = {
  todos: [],
}

export const TodoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    createAction: (state, action: PayloadAction<string>) => {
        const newToDo: ToDo = {
            id: uuid(),
            title: action.payload,
            isDone: false,
            createdAt: new Date().toISOString()
        };
        state.todos = [...state.todos, newToDo]
    },
    updateAction: (state, action: PayloadAction<ToDo>) => {
        const newTodos = state.todos.map((item) => {
            if (item.id === action.payload.id) {
              item.isDone = !item.isDone;
            }
            return item;
          });
        state.todos = newTodos
    },
    deleteAction: (state, action: PayloadAction<ToDo>) => {
      const newTodos = state.todos.filter((item) => item.id !== action.payload.id)
      state.todos = newTodos
    },
  },
})

export const { createAction, updateAction, deleteAction } = TodoSlice.actions

export default TodoSlice.reducer
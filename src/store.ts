import { configureStore, combineReducers } from '@reduxjs/toolkit'
import todoReducer from './feature/todoList'
import themeReducer from './feature/themeList'

const rootReducer = combineReducers({
  todoList: todoReducer,
  themeList: themeReducer
})

const saveToLocalStorage = (state: RootState) => {
  try {
      const appState = JSON.stringify(state)
      localStorage.setItem('appState', appState)
  } catch (e) {
      console.warn(e)
  }
}

const loadFromLocalStorage = () => {
  try {
      const appState = localStorage.getItem('appState')
      if (!appState) return undefined
      return JSON.parse(appState)
  } catch (e) {
      console.warn(e)
      return undefined
  }
}

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadFromLocalStorage()
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
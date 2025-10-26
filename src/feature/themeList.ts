import { createSlice } from '@reduxjs/toolkit'
import { Theme } from '../models/themeModal'
import { themes } from '../styles/themes'

export interface ThemeState {
  theme: Theme
}

const initialState: ThemeState = {
  theme: themes['light']
}

export const ThemeSlice = createSlice({
  name: 'themeList',
  initialState,
  reducers: {
    toggleThemeAction: (state) => {
        state.theme = state.theme.name === 'light' ? themes['dark'] : themes['light']
    },
  },
})

export const { toggleThemeAction } = ThemeSlice.actions

export default ThemeSlice.reducer
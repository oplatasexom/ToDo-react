import { Theme, Themes } from "../models/themeModal";

const light: Theme = {
    name: 'light',
    colors: {
        backgroundPrimary: '#4682b4',
        backgroundSecondary: '#edf0f1',
    }
}

const dark: Theme = {
    name: 'dark',
    colors: {
        backgroundPrimary: '#4682b4',
        backgroundSecondary: '#2e2e2eff',
    }
}

export const themes: Themes = { light, dark }
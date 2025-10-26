import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { GlobalStyle } from "../styles/GlobalStyle"
import { ThemeProvider } from "styled-components"
import { useSelector } from "react-redux"
import { RootState } from "../store"

export const Layout = () => {
    const theme = useSelector((state: RootState) => state.themeList.theme)

    return (
        <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <Outlet />
        </ThemeProvider>
        </>
    )
}
import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        box-sizing: border-box;
    }

    body {
        transition: background-color .2s ease;
        background-color: ${({theme}) => theme.colors.backgroundSecondary};
        padding: 50px 0 0 0;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        line-height: 1.429;
        color: black;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }


`
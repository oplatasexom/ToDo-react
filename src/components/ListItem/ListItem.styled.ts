import styled from "styled-components";
import { Link } from "react-router-dom"

export const ListItemLink = styled(Link)<{ $isDone: boolean}>`
    text-decoration: none;
    padding: 10px;

    width: 100%;
    min-height: 50px;
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => (props.theme.name === 'light' ? '#444' : '#fff')};
    line-height: 22px;

    display: flex;
    justify-content: space-between;

    background: ${(props) => (props.theme.name === 'light' ? '#fff' : '#2196f3')};
    border-radius: 5px;
    position: relative;
    box-shadow: 0 1px 2px rgba(44, 62, 80, 0.10);
    margin: 0 0 10px 0;
    padding: 14px;
    word-break: break-word;

    &:last-child {
        margin: 0;
    }

    &:hover {
        opacity: .8;
    }
`

export const DateDiv = styled.div``
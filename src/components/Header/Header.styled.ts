import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    background-color: #4682b4;
    display: flex;
    align-items: center;
`

export const HeaderContainerDiv = styled.div`
    position: relative;
    max-width: 97%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    padding: 10px;
    color: #fff;

    &.active {
        color: #ffffff33;
    }
`

export const ChangeThemeDiv = styled.div``

export const ToggleThemeBtn = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 30px;

    background: none;
    border: none
`

export const ToggleThemeIcon = styled.img`
    width: 30px;
    height: 30px;
    transition: transform .25s ease, opacity .3s ease;

    &:hover {
        transform: rotate(30deg)
    }
`
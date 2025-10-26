import styled from "styled-components";

export const ToDoListContainer = styled.div`
    width: 100%;
    padding: 15px;
`

export const ToDoListUl = styled.ul`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 0;
    list-style: none;

    &.failed:empty:after {
        content: 'Нет задач на выполнение';
    }

    &.failed:after {
        width: 100%;
        display: block;
        text-align: center;
        font-size: 12px;
        color: #aaa;
    }

    &.completed {
        position: relative;
        padding: 60px 0 0 0;
    }

    &.completed:empty:after {
        content: 'Нет выполненых задач';
    }

    &.completed:before {
        content: '';
        width: 150px;
        height: 1px;
        background: #d8e5e0;

        position: absolute;
        top: 25px;
        left: calc(50% - 75px);
    }

    &.completed:after {
        width: 100%;
        display: block;
        text-align: center;
        font-size: 12px;
        color: #aaa;
    }
`
import styled from "styled-components";

export const Container = styled.div`
    &:hover{
        ul {
            visibility: visible;
            opacity: 1;
        }
    }

`;

export const Ul = styled.ul`
    list-style: none;
    background-color: #fff;
    box-shadow: rgb(0 0 20 / 50%) 2px 2px 2px;
    border-radius: 3px 3px;
    top: 70px;
    width: 100px;
    position: absolute;
    visibility: hidden;
    transition: all 0.3s ease 0s;
    opacity: 0;
    z-index: 9;
    @media(max-width: 768px) {
        top: 160px;
        width: 100px;
    }
`;

export const LiDropdown = styled.li`
    color: #212121;
    padding: 1em 1em;
    display: flex;
    justify-content: center;
    gap: 10px;
    &:hover {
        background-color: #005999;
        color: #ffffff;
    }
`;
import styled from "styled-components"

export const MiniHeader = styled.header `
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HomeLink = styled.a `
    
`

export const HomeIcon = styled.img `
    width: 2.5vw;
    position: absolute;
    top: 3%;
    left: 2%;
    &:hover {
        cursor: pointer;
    }
`

export const Title = styled.h1 `
    text-align: center;
    font-size: 2em;
`
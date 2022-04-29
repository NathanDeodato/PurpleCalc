import styled from "styled-components"

export const MiniMain = styled.main `
    height: 70vh;
    display: flex;
    align-items: center;
`

export const CalcContainer = styled.div `
    width: 28vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    background-color: #7B68EE;
    border-radius: 20px;
`

export const ConfigBox = styled.div `
    width: 100%;
    height: 5%;
`

export const VisorBox = styled.div `
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: black;
    background-color: #A192FB;
`

export const VisorOld = styled.div `
    width: 100%;
    height: 30%;
    font-size: 0.8em;
    
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Visor = styled.div `
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const ClearCalc = styled.img `
    width: 8%;
    position: relative;
    left: -30%;
    &:hover {
        cursor: pointer;
    }
`

export const TextNumOld = styled.p `
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TextSymbOld = styled.p `
    width: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TextNum = styled.p `
    width: 15%;
    height: 25%;
    font-size: 1.2em;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TextSymb = styled.p `
    width: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const VisorEqual = styled.p `
    width: 5%;
  
    font-size: 1.8em;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Result = styled.p `
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ButtonBox = styled.div `
    width: 90%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const ButtonMiniBox = styled.div `
    display: flex;
    justify-content: space-around;
`

export const ButtonNum = styled.button `
    width: 5vw;
    height: 4.5vw;
    
    background-color: #A192FB;
    border: none;
    outline: none;
    border-radius: 10px;
    box-shadow: 3px 3px 2px rgb(37, 37, 37);
    &:hover {
        cursor: pointer;
        box-shadow: 6px 6px 2px rgb(37, 37, 37);
    }
`

export const ButtonImg = styled.img `
    width: 1.5vw;
`

export const ButtonZero = styled.button `
    width: 7vw;
    height: 4.5vw;
    
    background-color: #A192FB;
    border: none;
    border-radius: 10px;
    box-shadow: 4px 4px 2px rgb(37, 37, 37);
    &:hover {
        cursor: pointer;
        box-shadow: 6px 6px 2px rgb(37, 37, 37);
    }
`

export const ButtonEqual = styled.button `
    width: 9vw;
    height: 4.5vw;
    
    background-color: #A192FB;
    border: none;
    border-radius: 10px;
    box-shadow: 4px 4px 2px rgb(37, 37, 37);
    &:hover {
        cursor: pointer;
        box-shadow: 6px 6px 2px rgb(37, 37, 37);
    }
`
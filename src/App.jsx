// React
import React, { Component } from "react"

// Style
import "./App.css"

// Styled-Components
import { 
  MiniHeader, 
  HomeLink, 
  HomeIcon, 
  Title } from "./Styles/Header"

  import { 
  MiniMain, 
  CalcContainer, 
  ConfigBox, 
  VisorBox,
  VisorOld, 
  Visor, 
  ClearCalc,
  TextNumOld, 
  TextSymbOld, 
  TextNum, 
  TextSymb,
  VisorEqual,
  Result,
  ButtonBox, 
  ButtonMiniBox,
  ButtonNum,
  ButtonImg,
  ButtonZero,
  ButtonEqual } from "./Styles/Main"

  import { 
    MiniFooter, 
    CopyNT 
  } from "./Styles/Footer"

// Numbers calc
import { 
  zero, 
  one, 
  two, 
  three, 
  four, 
  five, 
  six, 
  seven, 
  eigth, 
  nine } from "../src/Assets"

// Operations calc
import { 
  add, 
  subtra, 
  multip, 
  divis, 
  equal, 
  clear } from "../src/Assets"

// systemhome
import { home } from "../src/Assets"

export default class CalcApp extends Component {
  state = {
    numberOne: "",
    numberTwo: "",

    numberOneOld: "",
    numberTwoOld: "",
    
    
    operationActive: false,
    operationSymbList: ["+", "-", "×", "÷"],
    
    operationSymb: "",
    operationSymbOld: "",

    numberResult: "",
    numberResultOld: "",
  }

  // Nuns

  zeroN = () => {
    if (this.state.operationActive == false) {
      this.setState ({
        numberOne: this.state.numberOne + "0"
      })
    } else {
      this.setState ({
        numberTwo: this.state.numberTwo + "0"
      })
    }
  }

  oneN = () => {
    if (this.state.operationActive == false) {
      this.setState ({
        numberOne: this.state.numberOne + "1"
      })
    } else {
      this.setState ({
        numberTwo: this.state.numberTwo + "1"
      })
    }
  }

  twoN = () => {
    if (this.state.operationActive == false) {
      this.setState ({
        numberOne: this.state.numberOne + "2"
      })
    } else {
      this.setState ({
        numberTwo: this.state.numberTwo + "2"
      })
    }
  }

  threeN = () => {
    if (this.state.operationActive == false) {
      this.setState ({
        numberOne: this.state.numberOne + "3"
      })
    } else {
      this.setState ({
        numberTwo: this.state.numberTwo + "3"
      })
    }
  }

  fourN = () => {
    if (this.state.operationActive == false) {
      this.setState ({
        numberOne: this.state.numberOne + "4"
      })
    } else {
      this.setState ({
        numberTwo: this.state.numberTwo + "4"
      })
    }
  }

  fiveN = () => {
    if (this.state.operationActive == false) {
      this.setState ({
        numberOne: this.state.numberOne + "5"
      })
    } else {
      this.setState ({
        numberTwo: this.state.numberTwo + "5"
      })
    }
  }

  sixN = () => {
    if (this.state.operationActive == false) {
      this.setState ({
        numberOne: this.state.numberOne + "6"
      })
    } else {
      this.setState ({
        numberTwo: this.state.numberTwo + "6"
      })
    }
  }

  sevenN = () => {
    if (this.state.operationActive == false) {
      this.setState ({
        numberOne: this.state.numberOne + "7"
      })
    } else {
      this.setState ({
        numberTwo: this.state.numberTwo + "7"
      })
    }
  }

  eightN = () => {
    if (this.state.operationActive == false) {
      this.setState ({
        numberOne: this.state.numberOne + "8"
      })
    } else {
      this.setState ({
        numberTwo: this.state.numberTwo + "8"
      })
    }
  }

  nineN = () => {
    if (this.state.operationActive == false) {
      this.setState ({
        numberOne: this.state.numberOne + "9"
      })
    } else {
      this.setState ({
        numberTwo: this.state.numberTwo + "9"
      })
    }
  }

  // Operations

  add = () => {
    this.setState ({
      add: true,
      operationActive: true,
      operationSymb: this.state.operationSymbList[0],
      operationSymbOld: this.state.operationSymbList[0],
    })
  }

  subt = () => {
    this.setState ({
      sub: true,
      operationActive: true,
      operationSymb: this.state.operationSymbList[1],
      operationSymbOld: this.state.operationSymbList[1],
    })
  }

  mult = () => {
    this.setState ({
      mul: true,
      operationActive: true,
      operationSymb: this.state.operationSymbList[2],
      operationSymbOld: this.state.operationSymbList[2],
    })
  }

  divi = () => {
    this.setState ({
      div: true,
      operationActive: true,
      operationSymb: this.state.operationSymbList[3],
      operationSymbOld: this.state.operationSymbList[3],
    })
  }

  // equal
  equal = () => {
    this.setState ({
      numberOneOld: this.state.numberOne,
      numberTwoOld: this.state.numberTwo,
      numberResultOld: this.state.numberResult,
    })
    
    if (this.state.add == true) {
      this.setState ({
        numberResult: Number(this.state.numberOne) + Number(this.state.numberTwo),
        numberResultOld: Number(this.state.numberOne) + Number(this.state.numberTwo),
      })
    }

    if (this.state.sub == true) {
      this.setState ({
        numberResult: Number(this.state.numberOne) - Number(this.state.numberTwo),
        numberResultOld: Number(this.state.numberOne) - Number(this.state.numberTwo),
      })
    }

    if (this.state.mul == true) {
      this.setState ({
        numberResult: Number(this.state.numberOne) * Number(this.state.numberTwo),
        numberResultOld: Number(this.state.numberOne) * Number(this.state.numberTwo),
      })
    }

    if (this.state.sub == true) {
      this.setState ({
        numberResult: Number(this.state.numberOne) / Number(this.state.numberTwo),
        numberResultOld: Number(this.state.numberOne) / Number(this.state.numberTwo),
      })
    }
  }

  // clear
  clear = () => {
    this.setState ({
      numberOne: "",
      numberTwo: "",
      numberResult: "",

      operationActive: false,
      operationSymb: "",
      
      add: false,
      sub: false,
      mul: false,
      div: false
    })
  }

  render() {
    return (
      
      <div>
          
        <MiniHeader>

          <HomeLink href="https://purplesystem.netlify.app/">

            <HomeIcon className="systemHome" src={home}></HomeIcon>

          </HomeLink>

          <Title>
            Purple Calc
          </Title>

        </MiniHeader>

        <MiniMain>
    
          <CalcContainer>
          
            <ConfigBox>
    
            </ConfigBox>
            
            <VisorBox>

              <VisorOld>
                
                <TextNumOld>
                  {this.state.numberOneOld}
                </TextNumOld>

                <TextSymbOld>
                  {this.state.operationSymbOld}
                </TextSymbOld>

                <TextNumOld>
                  {this.state.numberTwoOld}
                </TextNumOld>
                
                <VisorEqual>
                  =
                </VisorEqual>

                <TextNumOld>
                  {this.state.numberResultOld}
                </TextNumOld>

              </VisorOld>

              <Visor>

                <ClearCalc src={clear} onClick={this.clear}></ClearCalc>

                <TextNum>
                  {this.state.numberOne}
                </TextNum>

                <TextSymb>
                  {this.state.operationSymb}
                </TextSymb>

                <TextNum>
                  {this.state.numberTwo}
                </TextNum>

                <VisorEqual>
                  =
                </VisorEqual>

                <Result>
                  {this.state.numberResult}
                </Result>

              </Visor>
    
            </VisorBox>
            
            <ButtonBox>

                <ButtonMiniBox>
    
                <ButtonNum onClick={this.oneN}>
                    <ButtonImg src={one}></ButtonImg>
                </ButtonNum>
    
                <ButtonNum onClick={this.twoN}>
                    <ButtonImg src={two}></ButtonImg>
                </ButtonNum>
    
                <ButtonNum onClick={this.threeN}>
                    <ButtonImg src={three}></ButtonImg>
                </ButtonNum>
    
                <ButtonNum onClick={this.add}>
                    <ButtonImg src={add}></ButtonImg>
                </ButtonNum>
    
                </ButtonMiniBox>
                
                <ButtonMiniBox>
                
                <ButtonNum onClick={this.fourN}>
                    <ButtonImg src={four}></ButtonImg>
                </ButtonNum>
    
                <ButtonNum onClick={this.fiveN}>
                    <ButtonImg src={five}></ButtonImg>
                </ButtonNum>
    
                <ButtonNum onClick={this.sixN}>
                    <ButtonImg src={six}></ButtonImg>
                </ButtonNum>
    
                <ButtonNum onClick={this.subt}>
                    <ButtonImg src={subtra}></ButtonImg>
                </ButtonNum>
    
                </ButtonMiniBox>
    
                <ButtonMiniBox>
                
                <ButtonNum onClick={this.sevenN}>
                    <ButtonImg src={seven}></ButtonImg>
                </ButtonNum>
    
                <ButtonNum onClick={this.eightN}>
                    <ButtonImg src={eigth}></ButtonImg>
                </ButtonNum>
    
                <ButtonNum onClick={this.nineN}>
                    <ButtonImg src={nine}></ButtonImg>
                </ButtonNum>
    
                <ButtonNum onClick={this.mult}>
                    <ButtonImg src={multip}></ButtonImg>
                </ButtonNum>
    
                </ButtonMiniBox>
    
                <ButtonMiniBox>
                
                <ButtonZero onClick={this.zeroN}>
                    <ButtonImg src={zero}></ButtonImg>
                </ButtonZero>
    
                <ButtonEqual onClick={this.equal}>
                    <ButtonImg src={equal}></ButtonImg>
                </ButtonEqual>
    
                <ButtonNum onClick={this.divi}>
                    <ButtonImg src={divis}></ButtonImg>
                </ButtonNum>

                </ButtonMiniBox>
      
              </ButtonBox>
  
          </CalcContainer>
            
        </MiniMain>

        <MiniFooter>

          <CopyNT>
            &copy; Deodatont 2022
          </CopyNT>

        </MiniFooter>

      </div>

    )
  }
}
import React, { FC, ReactElement, useState  } from 'react'
import './style.css'

const crossI: string = require('../../assets/CombinedShapeCopy.png')
const circleIcon: string  = require('../../assets/Oval Copy.png');

type GameButtonType = {
  setPlayerTurn: React.Dispatch<React.SetStateAction<string>>,
  player1: string,
  player2: string,
  playerTurn: string
}

type buttonClickedType = number | null

type buttonIconType =  ReactElement |  null


const GameButtonComponent:FC<GameButtonType> = ({ setPlayerTurn, player1, player2, playerTurn}) :ReactElement | null => {
  const [buttons, setButtons] = useState<number[] | string[]>(Array.from(Array(9).keys()));
  const [clickedBy, setClickedBy] = useState<buttonClickedType>(null)

 
  // console.log('these are the buttons clicked ogebni',buttons);
  const playerThatWins = (buttons: number[] | string[]): any => {
    const arrayOfWinnings = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [2,4,6]
    ]

    for(let i = 0; i < arrayOfWinnings.length; i++ ){

      const [x, y, z] = arrayOfWinnings[i];
      if(buttons[x] && buttons[x] === buttons[y] && buttons[x] === buttons[z]){
        if(buttons[x]){
          
        }
      }
    }
  }

  
  
  return (
    <div className='game-button-component-cntainer'>
        {
          buttons.map((el: any , i: number): ReactElement | null => {

              return (
                <button type="button"  className='click-btn' onClick={() => {
                  playerTurn === 'O' ? buttons[i] = 'O' : buttons[i] = 'X';
                  // player2 === 'O' ? buttons[i] = 'O' : buttons[i] = 'X';
                  setButtons(buttons);
                  playerTurn === player1 ? setPlayerTurn(player2) : setPlayerTurn(player1);      
                }}
                key={i}
                >
                 {
                    buttons[i] === 'O' && <img src={circleIcon} alt=''/>
                 }
                 {
                  buttons[i] === 'X' && <img src={crossI} alt='' /> 
                 }
                </button>
              )
          } )
        }
    </div>
  )
}

export default GameButtonComponent


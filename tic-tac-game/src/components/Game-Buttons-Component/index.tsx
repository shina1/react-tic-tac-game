import React, { FC, ReactElement  } from 'react'
import './style.css'

const crossI = require('../../assets/CombinedShapeCopy.png')
const circleIcon  = require('../../assets/Oval Copy.png');

type GameButtonType = {
  setPlayerValue: Function,
  player: string,
  buttonClicked: any
}


const GameButtonComponent:FC<GameButtonType> = ({ setPlayerValue, player }) :ReactElement | null => {

   // const staticArrayOfNumber: number[] = [...Array(10).keys()]
  // line 27 was flagged due to Downlevel iteration for ES3/ES5 for TypeScript error. 
  const staticArrayOfNumber: number[] = Array.from(Array(9).keys())

  const handleButtonClick = (buttonIndex: number): void => {
    setPlayerValue(player);
    console.log(buttonIndex);
  }
 
  return (
    <div className='game-button-component-cntainer'>
        {
          staticArrayOfNumber.map((el: number, i: number): ReactElement | null => {
              return (
                <button type="button" className='click-btn' onClick={() => handleButtonClick(i)} key={i}>{el === i && <img src={player === 'O' ? circleIcon : crossI} alt="" />} </button>
              )
          } )
        }
    </div>
  )
}

export default GameButtonComponent

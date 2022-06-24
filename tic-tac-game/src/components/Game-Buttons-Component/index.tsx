import React, { FC } from 'react'
import './style.css'

const crossI = require('../../assets/CombinedShapeCopy.png')
const circleIcon  = require('../../assets/Oval Copy.png');

type GameButtonType = {
  setPlayerValue: Function,
  player: string
}

const GameButtonComponent:FC<GameButtonType> = ({ setPlayerValue, player }) => {
 
  return (
    <div className='game-button-component-cntainer'>
        <button type="button" className='click-btn' onClick={() => setPlayerValue(player)}> <img src={player === 'O' ? circleIcon : crossI} alt="" /></button>
        {/* <button type="button" className='click-btn' >{i === 0 && <img src={player === 'O' ? circleIcon : crossI} alt="" />}</button> */}
        <button type="button" className='click-btn' onClick={() => setPlayerValue(player)}><img src={player === 'O' ? circleIcon : crossI} alt="" /></button>
        <button type="button" className='click-btn' onClick={() => setPlayerValue(player)}><img src={player === 'O' ? circleIcon : crossI} alt="" /></button>
        <button type="button" className='click-btn' onClick={() => setPlayerValue(player)}><img src={player === 'O' ? circleIcon : crossI} alt="" /></button>
        <button type="button" className='click-btn' onClick={() => setPlayerValue(player)}><img src={player === 'O' ? circleIcon : crossI} alt="" /></button>
        <button type="button" className='click-btn' onClick={() => setPlayerValue(player)}><img src={player === 'O' ? circleIcon : crossI} alt="" /></button>
        <button type="button" className='click-btn' onClick={() => setPlayerValue(player)}><img src={player === 'O' ? circleIcon : crossI} alt="" /></button>
        <button type="button" className='click-btn' onClick={() => setPlayerValue(player)}><img src={player === 'O' ? circleIcon : crossI} alt="" /></button>
    </div>
  )
}

export default GameButtonComponent

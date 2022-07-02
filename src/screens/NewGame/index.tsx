import React, {FC, useState} from 'react'
// import { Link } from 'react-router-dom';
import './style.css'

import crossIcon from '../../assets/CombinedShapeCopy.png';
const circleIcon  = require('../../assets/Oval Copy.png');
const crossIconGrey = require('../../assets/Combined Shape Copy 2.png');
const circleIconGrey = require('../../assets/Oval Copy-grey.png');

type Game = {
  setPageHandler: Function,
  setPlayer1: Function,
  setPlayer2: Function,
  setPlayerCpu: Function,
}

const NewGame:FC<Game> = ({setPageHandler, setPlayer1 , setPlayer2, setPlayerCpu}) => {
  
  return (
    <div className='container self-contianer'>
      <div className='newGame-container'>
        <div className='top-icons'>
          <img src={crossIcon} alt='cross icon' />
          <img src={circleIcon} alt='circle icon' />
        </div>
        <div className='choose-player-card'>
          <h2>PICK PLAYER 1'S MARK</h2>
          <div className='player-choice-grp-btn'>
            <button className='player-choice-btn btn-x' onClick={() => {setPlayer1('X'); setPlayer2('O')}}>
              <img src={crossIconGrey} alt="grey icon" />
            </button>
            <button className='player-choice-btn btn-o' onClick={() => {setPlayer1('O'); setPlayer2('X')}}>
              <img src={circleIconGrey} alt="grey icon" />
            </button>
          </div>
          <p>REMEBER: X GOES FIRST</p>
        </div>
        <div className='btn-group'>
          <button className='btn-new-game btn-cpu' onClick={() => {setPageHandler(); setPlayerCpu(true)} }>NEW GAME (VS CPU)</button>
          <button className='btn-new-game btn-player' onClick={() => setPageHandler()}>NEW GAME (VS PLAYER)</button>
        </div>
      </div>
    </div>
  )
}

export default NewGame

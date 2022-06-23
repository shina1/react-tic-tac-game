import React from 'react'
import './style.css'
// import {crossIcon} from ;
// import from ;
const crossIcon = require('../../assets/CombinedShapeCopy.png');
const circleIcon  = require('../../assets/Oval Copy.png');
const crossIconGrey = require('../../assets/Combined Shape Copy 2.png');
const circleIconGrey = require('../../assets/Oval Copy-grey.png');

const NewGame = () => {
  return (
    <div className='container'>
      <div className='newGame-container'>
        <div className='top-icons'>
          <img src={crossIcon} alt='cross icon' />
          <img src={circleIcon} alt='circle icon' />
        </div>
        <div className='choose-player-card'>
          <h2>PICK PLAYER 1'S MARK</h2>
          <div className='player-choice-grp-btn'>
            <button className='player-choice-btn btn-x'>
              <img src={crossIconGrey} alt="grey icon" />
            </button>
            <button className='player-choice-btn btn-o'>
              <img src={circleIconGrey} alt="grey icon" />
            </button>
          </div>
          <p>REMEBER: X GOES FIRST</p>
        </div>
        <div className='btn-group'>
          <button className='btn-new-game btn-cpu'>NEW GAME (VS CPU)</button>
          <button className='btn-new-game btn-player'>NEW GAME (VS PLAYER)</button>
        </div>
      </div>
    </div>
  )
}

export default NewGame

import { ReloadOutlined } from '@ant-design/icons';
import React, { FC, useState } from 'react'
import GameButtonComponent from '../../components/Game-Buttons-Component';
import ResetModalComponent from '../../components/Modal-Reset';
import ScoreTrackerComponent from '../../components/Score-Tracker-Component';

import './style.css'
const crossIcon = require('../../assets/CombinedShapeCopy.png');
const circleIcon  = require('../../assets/Oval Copy.png');
const crossIconGrey = require('../../assets/Combined Shape Copy 2.png');


type GameBoardType = {
  player: string
  setPlayer: Function
}

const GameBoard: FC<GameBoardType> = ({ player, setPlayer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(null)
  const setPlayerValue = (player: string): void => {
      if(player === 'X') {
        setPlayer('O')
      }else{
        setPlayer('X')
      }
  }
 
  return (
    
    <div className='container'>
      <div className='gameboard-container'>
            <div className='top-info'>
                <div className='top-imported-icons'>
                    <img src={crossIcon} alt="imported-ic" />
                    <img src={circleIcon} alt="imported-ic" />
                </div>
                <div className='player-turn-indicator'><img src={player === 'X' ? circleIcon : crossIconGrey} alt="" /> <p>TURN</p></div>
                <button className='reset-icon' onClick={() => setIsOpen(true)}><ReloadOutlined /></button>
            </div>
            {
              isOpen && <ResetModalComponent setIsOpen={setIsOpen} />
            }
            <GameButtonComponent setPlayerValue={setPlayerValue} player={player} buttonClicked={buttonClicked} />
            <ScoreTrackerComponent />
      </div>
    </div>
  )
}

export default GameBoard

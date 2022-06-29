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
  player1: string,
  player2: string,
  setPlayer1: Function,
  setPlayer2: Function
}

const GameBoard: FC<GameBoardType> = ({ player1, player2, setPlayer1, setPlayer2 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [playerTurn, setPlayerTurn] = useState('X');
 
  return (
    
    <div className='container'>
      <div className='gameboard-container'>
            <div className='top-info'>
                <div className='top-imported-icons'>
                    <img src={crossIcon} alt="imported-ic" />
                    <img src={circleIcon} alt="imported-ic" />
                </div>
                <div className='player-turn-indicator'><img src={playerTurn === 'X' ? crossIconGrey : circleIcon} alt="" /> <p>TURN</p></div>
                <button className='reset-icon' onClick={() => setIsOpen(true)}><ReloadOutlined /></button>
            </div>
            {
              isOpen && <ResetModalComponent setIsOpen={setIsOpen} />
            }
            <GameButtonComponent setPlayerTurn={setPlayerTurn} player1={player1} player2={player2} playerTurn={playerTurn} />
            <ScoreTrackerComponent />
      </div>
    </div>
  )
}

export default GameBoard

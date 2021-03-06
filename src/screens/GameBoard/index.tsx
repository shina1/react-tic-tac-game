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
  playerCpu: boolean,
  setPlayer1: Function,
  setPlayer2: Function,
}

const GameBoard: FC<GameBoardType> = ({ player1, player2, setPlayer1, setPlayer2, playerCpu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [playerTurn, setPlayerTurn] = useState('X');
  const [playerXScore, setPlayerXScore] = useState(0);
  const [playerOScore, setPlayerOScore] = useState(0);
  const [tieScore, setTieScore] = useState(0);
 
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
            <GameButtonComponent setPlayerTurn={setPlayerTurn} player1={player1} player2={player2} playerTurn={playerTurn} setPlayerXScore={setPlayerXScore}  setPlayerOScore={setPlayerOScore} setTieScore={setTieScore} playerXScore={playerXScore} playerOScore={playerOScore} tieScore={tieScore} playerCpu={playerCpu}/>
            <ScoreTrackerComponent playerXScore={playerXScore} playerOScore={playerOScore} tieScore={tieScore}/>
      </div>
    </div>
  )
}

export default GameBoard

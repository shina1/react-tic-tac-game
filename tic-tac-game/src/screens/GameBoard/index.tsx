import { ReloadOutlined } from '@ant-design/icons';
import React, { FC } from 'react'
import GameButtonComponent from '../../components/Game-Buttons-Component';
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
                <div className='player-turn-indicator'><img src={player === 'X' ? crossIconGrey : circleIcon} alt="" /> <p>TURN</p></div>
                <div className='reset-icon'><ReloadOutlined /></div>
            </div>
            <GameButtonComponent setPlayerValue={setPlayerValue} player={player} />
            <ScoreTrackerComponent />
      </div>
    </div>
  )
}

export default GameBoard

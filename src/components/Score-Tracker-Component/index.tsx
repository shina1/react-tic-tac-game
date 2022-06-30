import React,{FC} from 'react'
import './style.css'


type ScoretrackerType = {
  playerXScore: number,
  playerOScore: number,
  tieScore: number,
}

const ScoreTrackerComponent: FC<ScoretrackerType> = ({playerXScore, playerOScore, tieScore}) => {
  return (
    <div className='score-tracker-component-container'>
        <div className='player-x-score score-baord'>
            <p>X (YOU)</p>
            <span>{playerXScore}</span>
        </div>
        <div className='ties-score score-baord'>
            <p>TIES</p>
            <span>{tieScore}</span>
        </div>
        <div className='player-o-score score-baord'>
            <p>O (CPU)</p>
            <span>{playerOScore}</span>
        </div>
    </div>
  )
}

export default ScoreTrackerComponent

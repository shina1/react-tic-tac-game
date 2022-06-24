import React from 'react'
import './style.css'

const ScoreTrackerComponent = () => {
  return (
    <div className='score-tracker-component-container'>
        <div className='player-x-score score-baord'>
            <p>X (YOU)</p>
            <span>30</span>
        </div>
        <div className='ties-score score-baord'>
            <p>TIES</p>
            <span>11</span>
        </div>
        <div className='player-o-score score-baord'>
            <p>O (CPU)</p>
            <span>42</span>
        </div>
    </div>
  )
}

export default ScoreTrackerComponent

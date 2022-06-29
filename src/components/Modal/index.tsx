import React, { FC, useEffect, useState} from 'react';
import './style.css';

import crossIcon from '../../assets/CombinedShapeCopy.png';
const circleIcon  = require('../../assets/Oval Copy.png');

type ResetModalComponentType = {
    // setIsopen: Function,
    message: string,
    winner?: string | number,
    setIsOpen: Function,
    setButtons: Function,
    setStopGame: Function,
}

const ModalComponent: FC<ResetModalComponentType> = ({ message, winner, setIsOpen, setButtons, setStopGame}) => {
    // const [isOpen, setIsOpen] = useState(false);

    // useEffect(()=> {
      // setIsOpen(openModal)

    // }, [openModal])
    
  return (
    <>
     <div className='modal-component-darkBG' >
        <div className='modal-component-centered'>
            <div className="modal-component-modal">
                <div className='modal-component-Header'>
                    <h4>{message}</h4>
                </div>
                <div className="modal-component-Content">
                    <img src={winner === 'X' ? circleIcon : crossIcon} alt="winner icon" /> <h3>TAKES THE ROUND </h3>
                </div>
                {/* <div className="modalActions"> */}
                    <div className="modal-component-actionsContainer">
                    <button className="modal-component-cancelBtn" onClick={() => {setIsOpen(false)}}>
                        QUIT
                        </button>
                        <button className="modal-component-deleteBtn" onClick={() => {setIsOpen(false); setButtons(Array.from(Array(9).fill(''))); setStopGame(false)}}>NEXT ROUND</button>
                    {/* </div> */}
                </div>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default ModalComponent

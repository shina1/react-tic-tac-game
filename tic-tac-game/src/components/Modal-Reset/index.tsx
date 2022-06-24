import React, { FC } from 'react';
import './style.css';

type ResetModalComponentType = {
    setIsOpen: Function
}

const ResetModalComponent: FC<ResetModalComponentType> = ({ setIsOpen }) => {
  return (
    <>
      <div className='darkBG' onClick={() => setIsOpen(false)}>
        <div className='centered'>
            <div className="modal">
                <div className="modalContent">
                    <h3>RESET GAME?</h3>
                </div>
                {/* <div className="modalActions"> */}
                    <div className="actionsContainer">
                    <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                        NO, CANCEL
                        </button>
                        <button className="deleteBtn" onClick={() => setIsOpen(false)}>YES, RESET</button>
                    {/* </div> */}
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ResetModalComponent

import React, { FC } from 'react';
import './style.css';

type ResetModalComponentType = {
    setIsOpen: Function
}

const ResetModalComponent: FC<ResetModalComponentType> = ({ setIsOpen }) => {
  return (
    <>
      <div className='darkBG' onClick={() => setIsOpen(false)}></div>
    </>
  )
}

export default ResetModalComponent

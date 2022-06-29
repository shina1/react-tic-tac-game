import React, { FC, ReactElement, useEffect, useState  } from 'react'
import ModalComponent from '../Modal';
import './style.css'

const crossI: string = require('../../assets/CombinedShapeCopy.png')
const circleIcon: string  = require('../../assets/Oval Copy.png');

type GameButtonType = {
  setPlayerTurn: React.Dispatch<React.SetStateAction<string>>,
  player1: string,
  player2: string,
  playerTurn: string
}

type buttonClickedType = number | null

type buttonIconType =  ReactElement |  null



const GameButtonComponent:FC<GameButtonType> = ({ setPlayerTurn, player1, player2, playerTurn}) :ReactElement | null => {
  const [buttons, setButtons] = useState<string[]>(Array.from(Array(9).fill('')));
  const [stopGame, setStopGame] = useState(false);
  const [roundWinner, setRoundWinner] = useState('');
  const [tie, setTie] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

 
  console.log('these are the buttons clicked ogebni',playerTurn);

  const playerThatWins = (buttons:string[]): any => {
    const arrayOfWinnings = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [2,4,6]
    ]

    for(let i = 0; i < arrayOfWinnings.length; i++ ){
    const [x, y, z] = arrayOfWinnings[i];
       if(buttons[x] && buttons[x] === buttons[y] && buttons[x] === buttons[z]){
            return buttons[x]
      }
  }
  return null
}

const winner = playerThatWins(buttons);
console.log('the winner is', winner);


const checkForTies = (buttons: string[], winner:any,): any =>{
  if(buttons.every((item: string) => item !== "") && !winner){
    setTie(true);
    setIsOpen(true);
    // alert('there was a tie')
  }
}


useEffect(() => {
  checkForTies(buttons, winner);
  
}, [buttons,winner, setIsOpen , isOpen])



  //  for alerting the round winner
   useEffect(() => {
    if(winner === 'X' || winner === 'O'){
      setRoundWinner(winner);
      setStopGame(true);
      setPlayerTurn(winner === 'X' ? 'O' : 'X');
      setIsOpen(true);
      // alert(`Player ${winner} wins this round`);
    }
   }, [winner, setPlayerTurn])

 
   console.log(`Player ${roundWinner} wins this round`);
  
  return (
    <div className='game-button-component-cntainer'>
        {
          buttons.map((el: any , i: number): ReactElement | null => {

              return (
                <button type="button"  className='click-btn' disabled={buttons[i] !== '' || stopGame === true} onClick={() => {
                  playerTurn === 'O' ? buttons[i] = 'O' : buttons[i] = 'X';
                  // player2 === 'O' ? buttons[i] = 'O' : buttons[i] = 'X';
                  setButtons(buttons);
                  playerTurn === player1 ? setPlayerTurn(player2) : setPlayerTurn(player1);      
                }}
                key={i}
                >
                 {
                    buttons[i] === 'O' && <img src={circleIcon} alt=''/>
                 }
                 {
                  buttons[i] === 'X' && <img src={crossI} alt='' /> 
                 }
                </button>
              )
          } )
        }
        {
           (roundWinner && isOpen) && <ModalComponent message='you win' winner={roundWinner}  setIsOpen={setIsOpen} setButtons={setButtons} setStopGame={setStopGame}/>
        }
        {
          (tie && isOpen ) && <ModalComponent message='THIS ROUND WAS A TIE' setIsOpen={setIsOpen} setButtons={setButtons} setStopGame={setStopGame}/>
        }
    </div>
  )
}

export default GameButtonComponent


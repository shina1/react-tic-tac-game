import React, { FC, ReactElement, useEffect, useState  } from 'react'
import ModalComponent from '../Modal';
import './style.css'

const crossI: string = require('../../assets/CombinedShapeCopy.png')
const circleIcon: string  = require('../../assets/Oval Copy.png');

type GameButtonType = {
  setPlayerTurn: React.Dispatch<React.SetStateAction<string>>,
  player1: string,
  player2: string,
  playerTurn: string,
  playerCpu: boolean,
  setPlayerXScore: Function,
  setPlayerOScore: Function,
  setTieScore: Function,
  playerXScore: number,
  playerOScore: number,
  tieScore: number,

}

type buttonClickedType = number | null

type buttonIconType =  ReactElement |  null



const GameButtonComponent:FC<GameButtonType> = ({ setPlayerTurn, player1, player2, playerTurn, setPlayerXScore,setPlayerOScore, setTieScore, playerXScore, playerOScore, tieScore, playerCpu}) :ReactElement | null => {
  const [buttons, setButtons] = useState<string[]>(Array.from(Array(9).fill('')));
  const [stopGame, setStopGame] = useState(false);
  const [roundWinner, setRoundWinner] = useState('');
  const [tie, setTie] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

 
  console.log('these are the buttons clicked ogebni',playerTurn);
  console.log('you are playing with the computer', playerCpu);
  
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
      // destructure the values of the arrayOfWninings array
    const [x, y, z] = arrayOfWinnings[i];
    // check if we have a move on the board, then check if that same move is the same with that of the destructured array
       if(buttons[x] && buttons[x] === buttons[y] && buttons[x] === buttons[z]){
            return buttons[x]
      }
  }
  return null
}

const winner = playerThatWins(buttons);
console.log('the winner is', winner);

function smartCPUPlayer(): void{
  if(playerCpu === true){
    console.log('the cpu palys as',player2); 
  }
}
smartCPUPlayer()

const checkForTies = (buttons: string[], winner: string | null): any =>{
  if(buttons.every((item: string) => item !== "")  && !winner){
    setTie(true);
    setTieScore(tieScore + 1)
    setIsOpen(true);
    setStopGame(true);
    // alert('there was a tie');
  }
}

console.log('is this a tie?', tie);
  //  for alerting the round winner
   useEffect(() => {
    if(winner === 'X' || winner === 'O'){
      setRoundWinner(winner);
      setStopGame(true);
      setPlayerTurn(winner === 'X' ? 'O' : 'X');
      setIsOpen(true);
    }
   }, [winner, setPlayerTurn, setPlayerOScore, playerOScore, setPlayerXScore, playerXScore])
  //  set winners score

  // const setWinnersScore = (winner: string, playerOScore: number, playerXScore: number): void => {
     
  // }

  useEffect(() => {
    if(winner === 'O'){
      setPlayerOScore(playerOScore + 1);
    }else if(winner === 'X'){
      setPlayerXScore(playerXScore + 1);
    } 
    // setWinnersScore(winner, playerOScore, playerXScore);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winner])
 
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
                  checkForTies(buttons, winner) ;
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
           (roundWinner && isOpen ) && <ModalComponent message='you win' winner={roundWinner}  setIsOpen={setIsOpen} setButtons={setButtons} setStopGame={setStopGame} setTie={setTie}/>
        }
        {
          (tie && isOpen) && <ModalComponent message='THIS ROUND WAS A TIE' setIsOpen={setIsOpen} setButtons={setButtons} setStopGame={setStopGame} setTie={setTie} tie={tie}/>
        }
    </div>
  ) 
}

export default GameButtonComponent


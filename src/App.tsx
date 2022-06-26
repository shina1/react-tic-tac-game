import React, { useState } from 'react';
import GameBoard from './screens/GameBoard';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import GameBoard from './screens/GameBoard';
import NewGame from './screens/NewGame';



function App() {
  const [page , setPage] = useState(0);
  const [player1, setPlayer1] = useState('X');
  const [player2, setPlayer2] = useState('O');

  const setPageHandler = (): void => {
      setPage(1);
  }
  return (
    // <BrowserRouter>
    //     <Routes>
    //         <Route path='/'  element={<NewGame />} />
    //         <Route path='/game-board' element={<GameBoard />} />
    //     </Routes>
    // </BrowserRouter>
    <>
        {
          page === 0 && <NewGame setPageHandler={setPageHandler} setPlayer1={setPlayer1} setPlayer2={setPlayer2} />
        }
        {
          page === 1 && <GameBoard  player1={player1} player2={player2} setPlayer1={setPlayer1} setPlayer2={setPlayer2}/>
        }
    </>
  );
}

export default App;

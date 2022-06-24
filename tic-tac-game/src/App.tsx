import React, { useState } from 'react';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
import GameBoard from './screens/GameBoard';
import NewGame from './screens/NewGame';



function App() {
  const [page , setPage] = useState(0);
  const [player, setPlayer] = useState('');

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
          page === 0 && <NewGame setPageHandler={setPageHandler} setPlayer={setPlayer} />
        }
        {
          page === 1 && <GameBoard  player={player} setPlayer={setPlayer}/>
        }
    </>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import './index.css'
import { StartScreen } from './comp/start-screen';
import { Body } from './comp/body';
import { Scenarios } from './comp/scenario-boxes';
import { Choices } from './comp/choices';

function App() {
  const [gameStarted, setGameStarted] = useState(false)

  const startGame = () => {
    setGameStarted(true)
  }

  return (
    <>
      <div>
        {!gameStarted && <StartScreen onStart={startGame}/>}
      </div>
      <div className='bg-yellow-50 min-h-screen'>
        {gameStarted && (
          <>
          <Body/>
          <Scenarios scenarioKey={'default'}/>
          <Choices/>
          </>
        )}
      </div>
    </>
  );
}

export default App;

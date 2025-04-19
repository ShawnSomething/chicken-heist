import React, { useState } from 'react';
import './App.css';
import './index.css';
import { StartScreen } from './comp/start-screen';
import { Body } from './comp/body';
import { Scenarios } from './comp/scenario-boxes';
import { Choices } from './comp/choices';
import { storyKey, StoryNode } from './game-logic';
import comm from './comm device.mp4'

function App() {
  const [screen, setScreen] = useState<"start" | "game" | "lose" | "win">("start");
  const [winType, setWinType] = useState<"norm" | "best" | null>(null);
  const [currentId, setCurrentId] = useState<number>(1);

  const startGame = () => {
    setCurrentId(1);
    setScreen("game");
  };

  const restartGame = () => {
    setScreen("start");
    setCurrentId(1);
    setWinType(null);
  };

  const currentNode: StoryNode | undefined = storyKey.find(node => node.id === currentId);

  const handleChoice = (nextId: number) => {
    if (nextId === -1) {
      restartGame()
    } else {
      setCurrentId(nextId)
    }
  };

  return (
    <>
      <div>
        {screen === "start" && <StartScreen onStart={startGame} />}
      </div>
      <div className='bg-yellow-50 min-h-screen'>
        {screen !== "start" && currentNode && (
          <>
            <Body/>
            <Scenarios scenarioKey={currentNode.scenarioKey} text={currentNode.text} />
            <Choices choiceKey={currentNode.choiceKey} options={currentNode.options} onClick={handleChoice} />
          </>
        )}

        {screen === "lose" && (
          <Choices options={[{ text: "Restart", nextId: 1 }]} onClick={restartGame} choiceKey={'default'} />
        )}

        {screen === "win" && winType === "norm" && (
          <Choices options={[{ text: "Play Again", nextId: 1 }]} onClick={restartGame} choiceKey={'default'} />
        )}

        {screen === "win" && winType === "best" && (
          <Choices options={[{ text: "Try Again", nextId: 1 }]} onClick={restartGame} choiceKey={'default'} />
        )}
      </div>
    </>
  );
}

export default App;

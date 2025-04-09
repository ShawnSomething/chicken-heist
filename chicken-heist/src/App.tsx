import React from 'react';
import './App.css';
import './index.css'
import { Body } from './comp/body';
import { Scenarios } from './comp/scenario-boxes';
import { Choices } from './comp/choices';

function App() {
  return (
    <>
      <div className='bg-yellow-50 min-h-screen'>
        <Body></Body>
        <Scenarios></Scenarios>
        <Choices></Choices>
      </div>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import './index.css'
import { Body } from './comp/body';
import { Scenarios } from './comp/scenario-boxes';
import { Choices } from './comp/choices';

function App() {
  return (
    <>
      <Body></Body>
      <Scenarios></Scenarios>
      <Choices></Choices>
    </>
  );
}

export default App;

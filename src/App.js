import React from 'react';
import './App.css';
import Canvas from './components/Canvas/Canvas'
import Button from './components/Button/Button';


const App = () => {
  return (
    <div>
    <Canvas></Canvas>
    <Button type="btn" color="green-btn"></Button>
    </div>
  );
}

export default App;

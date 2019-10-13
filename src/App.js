import React from 'react';
import PaintUI from './components/PaintUI/PaintUI';
import './App.css';


const App = () => {
  const className = "paint-ui";
  return (
    <PaintUI className={className}></PaintUI>
  );
}

export default App;

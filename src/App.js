// App.js
import React from 'react';
import './App.css';
import DraggableTextBox from './Text';
import ImageDisplay from './ImageDisplay';
function App() {
  return (
    <div className="App">
      <DraggableTextBox />
      <ImageDisplay />
    </div>
  );
}

export default App;

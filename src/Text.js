// ResizableDraggableTextBox.js
import React, { useState } from 'react';
import Draggable from 'react-draggable';
// import { Resizable } from 'react-resizable';

const ResizableDraggableTextBox = () => {
  const [text, setText] = useState('Resizable & Draggable Text Box');
  // const [position, setPosition] = useState({ x: 50, y: 50 });
//   const [size, setSize] = useState({ width: 50, height: 10 });

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // const handleDrag = (e, data) => {
  //   setPosition({ x: data.x, y: data.y });
  // };

//   const handleResize = (e, { size }) => {
//     setSize(size);
//   };

  return (
    //   <Resizable
    //     width={size.width}
    //     height={size.height}
    //     onResize={handleResize}
    //     style={{padding:'10px', margin:'20px'}}
    //   >
        <div className="textbox" style={{padding: '10px', margin:'20px'}}>
                <Draggable
                style={{margin:'10px', padding:'10px'}}> 
                <textarea
                    value={text}
                    onChange={handleTextChange}
                    placeholder="Enter text"
                    rows="4"
                    cols="50"
                    style={{ width: '50%', height: '50%' }}
                />
                </Draggable>
        </div>
    //   </Resizable>
  );
};

export default ResizableDraggableTextBox;

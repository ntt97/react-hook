import React, { useState } from 'react';



function getRandomColor() {
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
}

function App() {
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box-color') || 'deepink';
        
        return initColor;
    });
    const handleBoxClick = () => {
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box-color',newColor);
    }
    return (
        <div className="App" >
            <div onClick={handleBoxClick} className="color-box" style={{ backgroundColor: color }}></div>

        </div>
    );
}

export default App;

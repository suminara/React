import React, { useState } from 'react';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // 초기 배경색은 하얀색

  // 랜덤한 색상을 생성하는 함수
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // 버튼 클릭 시 배경색 변경
  const changeBackgroundColor = () => {
    const newColor = getRandomColor();
    setBackgroundColor(newColor);
  };

  return (
    <div style={{ backgroundColor, width: '100vw', height: '100vh', transition: 'background-color 0.3s' }}>
      <button onClick={changeBackgroundColor}>배경색 변경</button>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';

export default function App() {
  const [hello, setHello] = useState(0);

  useEffect(() => {
    if (hello === 0) {
      const intervalId = setInterval(() => console.log('안녕하세요!'), 1000);

      // 컴포넌트가 언마운트될 때 clearInterval을 호출하여 setInterval 정리
      return () => clearInterval(intervalId);
    }
  }, [hello]);

  const handleClick = () => {
    setHello(hello + 1);
    console.log('안녕하세요!');
    console.log('안녕하세요!');
    console.log('안녕하세요!');
    console.log('안녕하세요!');
    console.log('안녕하세요!');
  };

  return (
    <div>
      <button onClick={handleClick}>클릭!</button>
    </div>
  );
}

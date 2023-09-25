// import { useRef, useEffect } from 'react';

// function App() {
//   const myRef = useRef(null);

//   useEffect(() => {
//     myRef.current.focus();
//   }, []);

//   return <input ref={myRef} />;
// }

import { useRef, useEffect } from 'react';

function App() {
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  });

  const count = 0; // 어딘가에서 업데이트된 상태
  const prevCount = prevCountRef.current;

  return (
    <div>
      <p>이전 카운트: {prevCount}</p>
      <p>현재 카운트: {count}</p>
    </div>
  );
}

export default App;


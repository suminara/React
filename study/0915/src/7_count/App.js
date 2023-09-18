import React, { useState } from 'react'

export default function App() {
    const [num,setNum] = useState(0);

    function handleNum(e){
        if (e.target.id==='plus'){setNum(num+1)}
        else{setNum(num-1)}
    };

  return (
    <div>
        <p>{num}</p>
        <button id='plus' onClick={handleNum}>+</button>
        <button id='minus' onClick={handleNum}>-</button>
    </div>
  )
}

// import React, { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     if (count < 10) {
//       setCount(count + 1);
//     }
//   };

//   const handleDecrement = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={handleIncrement}>증가 (+)</button>
//       <button onClick={handleDecrement}>감소 (-)</button>
//     </div>
//   );
// }

// export default App;

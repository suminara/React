import React, { useState } from 'react'

export default function App() {
  const initialList = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" },
    { id: 4, name: "Eve" },
  ];
  
  const [list,setList] = useState(initialList)

  function ascending () {
    const ascList = [...list].sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    setList(ascList)
  };
  function descending () {
    const desList = [...list].sort((a, b) => {
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;
    });
    setList(desList)
  };
  return (
    <ul>
      {list.map(i=><li key={i.id}>{i.name}</li>)}
      <button onClick={ascending}>a-z</button>
      <button onClick={descending}>z-a</button>
    </ul>
  )
}


// import React, { useState } from 'react';

// export default function App() {
//   const initialList = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Alice" },
//     { id: 3, name: "Bob" },
//     { id: 4, name: "Eve" },
//   ];

//   const [list, setList] = useState(initialList);
//   const [ascendingOrder, setAscendingOrder] = useState(true);

//   const toggleOrder = () => {
//     setAscendingOrder(!ascendingOrder);
//   };

//   const sortedList = [...list].sort((a, b) => {
//     const comparison = a.name.localeCompare(b.name);
//     return ascendingOrder ? comparison : -comparison;
//   });

//   return (
//     <div>
//       <ul>
//         {sortedList.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//       <button onClick={toggleOrder}>
//         {ascendingOrder ? 'a-z' : 'z-a'}
//       </button>
//     </div>
//   );
// }

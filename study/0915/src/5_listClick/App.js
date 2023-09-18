import React, { useState } from 'react';
import List from './List'

export default function App() {
  const data = [
    { id: 1, name: 'Alice', email: 'alice@example.com', job: 'Engineer' },
    { id: 2, name: 'Bob', email: 'bob@example.com', job: 'Designer' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', job: 'Manager' }
];

const [selected, setSelected] = useState(null);

const handleItemClick = (id) => {
  if (selected === id) {
    setSelected(null);
  } else {
    setSelected(id);
  }
};


  return (
    <ul>
      {data.map(i=>(<List key={i.id} 
      item={i} 
      isSelected={selected === i.id}
      onItemClick={handleItemClick}/>))}
    </ul>
  )
}

import React, { useState } from 'react'

export default function App() {
  const data = [
    { title: "항목 1", content: "이 항목의 내용은 여기에 있습니다." },
    { title: "항목 2", content: "이 항목의 내용은 여기에 있습니다." },
    { title: "항목 3", content: "이 항목의 내용은 여기에 있습니다." },
  ];
  
  const [selected,setSelected] = useState(null)

  function handleSelect (타이틀) {
    // if (타이틀 !== selected){
      setSelected(타이틀); // 새로운 항목을 선택하면 해당 항목의 내용을 표시합니다.
    // }
  };
  
  return (
    <ul>
      {data.map((i) => (
        <li
          key={i.title}
          onClick={()=>handleSelect(i.title)}
        >
          {i.title}
          {selected === i.title && <p>{i.content}</p>}
        </li>
      ))}
    </ul>
  )
}

import React, { useState } from 'react'

export default function App() {
  const menu = [
    {name:'about',content:'aboutaboutabout'},
    {name:'product',content:'productproduct'},
    {name:'contact',content:'contactcontact'}];

  const [selected,setSelected] = useState(null)

    function handleClick (name) {
      setSelected(name)
    }

  return (
    <ul>
      {menu.map(i=><li key={i.name} onClick={()=>handleClick(i.name)}>
        <span style={{ color: selected === i.name ? 'blue' : 'black' }}>{i.name}</span>
      <p>{selected===i.name && i.content}</p>
      </li>)}
    </ul>
  )
}

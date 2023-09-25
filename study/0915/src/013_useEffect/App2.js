import React, { useEffect, useState } from 'react'

export default function App() {
const [count, setCount] = useState(0)



useEffect(()=>{
  console.log("컴포넌트가 마운트되었습니다!")

  if (count!==0){
    console.log("컴포넌트가 업데이트되었습니다!")
  }
  return()=>{
    console.log("컴포넌트가 클린업되었습니다!")
  }
},[count])

  return (
    <div>
      {count}
      <button onClick={()=>setCount(count+1)}>클릭!</button>
    </div>
  )
}

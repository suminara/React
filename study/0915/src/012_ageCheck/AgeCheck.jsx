import React, { useState } from 'react'

export default function AgeCheck() {
  const [state, setState] = useState('');

  function askAge() {
    const answer = prompt('나이를 입력해 주세요','')
    if (answer >= 18){setState('성인 환영합니다!')}
    else if(answer < 18){setState('미성년자 환영합니다!')}
    else {setState('올바르지 않은 값입니다!')}
  };

  return (
    <div>
      <button onClick={askAge}>click!</button>
      <p style={{color: state==='성인 환영합니다!'?'red':(state==='미성년자 환영합니다!'?'blue':'black')}}>{state}</p>
    </div>
  )
}

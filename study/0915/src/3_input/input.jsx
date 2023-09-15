import React, { useState } from 'react';

export default function Input() {
  const [submit,setSubmit] = useState('')
  const [list, setList] = useState([]);//

  function sub(){
    const input = document.querySelector('input[type="text"]');
    setSubmit(input.value)
    
    if (input.value.trim() !== '') {
      setList([...list, input.value]); // 새로운 값을 리스트에 추가
      setSubmit(''); // 입력값 초기화
      input.value = ''}
  }

  return (
    <div>
      <input type="text" />
      <button onClick={sub}>submit</button>
      <p>{submit}</p>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li> // 리스트 아이템 표시
        ))}
      </ul>
    </div>
  )
}

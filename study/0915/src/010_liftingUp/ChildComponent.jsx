import React, { useState } from 'react';

export default function ChildComponent({ onInputChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onInputChange(newValue);// 부모에게 데이터 전달
  };

  return (
    <input
      type="text"
      value={inputValue}//동기화
      onChange={handleInputChange}
    />
  );
}

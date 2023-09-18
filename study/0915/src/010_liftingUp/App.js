import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

export default function App() {
  const [dataFromChild, setDataFromChild] = useState('');

  const handleChildInputChange = (data) => {
    // 자식 컴포넌트에서 전달된 데이터를 부모 상태에 저장
    setDataFromChild(data);
  };

  return (
    <div>
      <p>자식 컴포넌트에서 받은 데이터: {dataFromChild}</p>
      <ChildComponent onInputChange={handleChildInputChange} />
    </div>
  );
}

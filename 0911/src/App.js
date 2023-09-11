import React, { useState } from "react";
import BtnList from "./component/btnList";
import Info from "./component/info";

function App() {
  const [state, setState] = useState('');
  const handleButtonClick = (text) => {
    setState(text); // 클릭한 버튼 내용을 상태에 저장
  };


  return (
    <div>
      <BtnList onButtonClick={handleButtonClick}/>
      <Info state={state}/>
    </div>
  );
}
export default App;

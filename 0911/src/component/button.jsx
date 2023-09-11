import React, { useState } from "react";

function Button(props) {
    const btnStyle = {
      width: '300px',
      height: '30px'
    }

    const clickBtn = () => {
      if (props.onClick) {
        props.onClick(); // 클릭 이벤트 핸들러 호출
      }
    }
  
    return (
      <div>
        <button style={btnStyle} onClick={clickBtn}>기분이: {props.state}</button>
      </div>
    );
  }
  export default Button;
  
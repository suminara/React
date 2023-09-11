import React from "react";

function Info(props) {
    const infoStyle = {
        width: '300px',
        height: '300px',
        border: '3px solid black',
        borderRadius: '10px'
    }


    return (
      <div>
        <h1 style={infoStyle}>{props.state ? `기분이 : ${props.state}` : '아직 선택하지 않았어요...'}</h1>
      </div>
    );
  }
  export default Info;
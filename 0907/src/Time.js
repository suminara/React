import React from 'react';

function Time() {
  const year = new Date().getFullYear()
  const month = new Date().getMonth()
  const date = new Date().getDate()
  const hour = new Date().getHours()
  const min = new Date().getMinutes()
  const sec = new Date().getSeconds()
  const firstStyle = {
    color: 'white',
    backgroundColor: 'black',
  };

  return (
    <React.Fragment>
      <h2 style={firstStyle}>안녕, 라이캣! 1호</h2>
      <h2>안녕, 라이캣! 2호</h2>
      <div style={firstStyle}>
        <p style={{color: 'red'}}>년: {year}</p>
        <p>월/일: {month+1}/{date}</p>
        <p>시간: {hour}시 {min}분 {sec}초</p>
      </div>
    </React.Fragment>
  );
}

export default Time;

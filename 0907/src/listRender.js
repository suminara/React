import React from 'react';

function listRender() {
    let list = [
        { no: 1, area: "대전", visited: false },
        { no: 2, area: "부산", visited: true },
        { no: 3, area: "목포", visited: false },
        { no: 4, area: "제주도", visited: false },
    ];
    const liStyle = {
        listStyle: 'none',
        border: '1px solid black',
        padding: 0
    };
    const inStyle = {
        borderBottom: '1px solid black'
    }

return (
    <ul style={liStyle}>
      {list.map((item) => (
        <li key={item.no} style={{ ...inStyle, backgroundColor: item.visited ? 'blue' : 'white' }}>
          {item.area}
        </li>
      ))}
    </ul>
)

}

export default listRender;

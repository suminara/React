function List () {
  const data = 
  [
      { name: "벨라", species: "고양이", age: "5", id: 111 },
      { name: "루시", species: "강아지", age: "3", id: 112 },
      { name: "데이지", species: "토끼", age: "2", id: 113 },
      { name: "몰리", species: "고양이", age: "1", id: 114 },
      { name: "매기", species: "강아지", age: "6", id: 115 }
    ]

    const listItems = data.map((item) => (
      <li key={item.id}>{item.name}는 {item.species}입니다. 그리고 {item.age}살 입니다.</li>
    ));

  return (
    <ul>
      {listItems}
    </ul>
  )
}

function App() {
  

  return (
    <div>
      <List/>
    </div>
  );
}
export default App;

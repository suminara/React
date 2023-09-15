import Dl from "./dl";

function App() {
  const items = [
    { id: 1, name: 'Apple', desc: '빨간건 사과' },
    { id: 2, name: 'Banana', desc: '바나나는 길어' },
    { id: 3, name: 'Cherry', desc: '체리는 비싸' }
];
  return (
    <div>
      {items.map(i=><Dl key={i.id} props={i}/>)}
    </div>
  );
}
export default App;

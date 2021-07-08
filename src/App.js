import PersonCard from './components/PersonCard'

function App() {
  return (
    <div>
      <PersonCard person = {{name:"John, doe", age:45, color:"Black"}}/>
      <PersonCard person = {{name:"Smith, John", age:88, color:"Brown"}}/>
      <PersonCard person = {{name:"Fillmore, Millard", age:50, color:"Brown"}}/>
      <PersonCard person = {{name:"Smith, Maria", age:62, color:"Brown"}}/>
    </div>
  );
}

export default App;

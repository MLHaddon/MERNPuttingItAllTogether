import PersonCard from './PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard className="card" firstName="Jane" lastName="Doe" age={20} hairColor="Brown" />
      <PersonCard className="card" firstName="John" lastName="Doe" age={22} hairColor="Black" />
      <PersonCard className="card" firstName="Jack" lastName="Frost" age={200} hairColor="Blonde" />
      <PersonCard className="card" firstName="John" lastName="Mcain" age={46} hairColor="Balding" />
    </div>
  );
}

export default App;
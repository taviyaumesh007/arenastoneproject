import './App.css';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  return (
    <div className="App">
      {apiKey}
    </div>
  );
}

export default App;

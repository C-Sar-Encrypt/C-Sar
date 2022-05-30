import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="App-Title">
          <h1> C-Sar</h1>
        </section>
        <section className="App-buttons">
          <div><button name="encrypt " className="button">Encriptar</button></div>
          <div><button name="decrypt" className="button">Descifrar</button></div>
        </section>
      </header>
    </div>
  );
}

export default App;

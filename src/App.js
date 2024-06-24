import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>Hola Dojo!</h1>
      <h2>
        Things I need to do:
        </h2>
      <ul class="dojo">
        <li>Lear React</li>
        <li>Climb Mt Everest</li>
        <li>Run a marathon</li>
        <li>Feed the dogs</li>
      </ul>   
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;

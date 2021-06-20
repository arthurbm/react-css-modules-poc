import './App.css';
import './global.css'
import BoxText from './components/BoxText';
import { SimpleSlider } from './components';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <BoxText text="Hello" />
        </header>
        <SimpleSlider/>
      </div>
    </>
  );
}

export default App;

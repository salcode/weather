import { useReducer } from 'react';
import reducer from './reducer';
import Weather from './components/Weather';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    {}
  );
  return (
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
      </header>
      <Weather
        data={state.weather}
      />
    </div>
  );
}

export default App;

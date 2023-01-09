import {
  useEffect,
  useReducer,
} from 'react';
import fetchWeather from './utils/fetchWeather';
import reducer from './reducer';
import Weather from './components/Weather';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    {}
  );

  useEffect(() => {
    (async () => {
      try {
        const weather = await fetchWeather();
        console.log({ weather });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

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

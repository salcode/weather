import {
  useEffect,
  useReducer,
} from 'react';
import fetchWeather from './utils/fetchWeather';
import reducer from './reducer';
import useInterval from './hooks/useInterval';
import WeatherReport from './components/WeatherReport';

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
        dispatch({
          type: 'setWeather',
          value: weather,
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useInterval(async () => {
    try {
      const weather = await fetchWeather();
      dispatch({
        type: 'setWeather',
        value: weather,
      });
    } catch (error) {
      console.error(error);
    }
  }, 30000);

  return (
    <div className="App">
      <WeatherReport
        data={state.weather}
      />
    </div>
  );
}

export default App;

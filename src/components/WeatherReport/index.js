import Current from '../Current';
import Today from '../Today';
import Week from '../Week';

export default function WeatherReport({
  data,
}) {
  if (! data) {
    return null;
  }
  console.log({data});
  return(<>
    <div className="section">
      <Current
        current={data.current}
      />
    </div>

    <div className="section">
      <Today
        daily={data.daily}
        hourly={data.hourly}
      />
    </div>

    <div className="section">
      <Week
        daily={data.daily}
      />
    </div>

    <p>
      {data.current.temp}&deg; F
      <img src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`} />
      {data.current.weather[0].description}
    </p>
  </>);
}

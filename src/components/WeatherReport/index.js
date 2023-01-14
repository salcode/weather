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
    <Current
      current={data.current}
    />
    <Today
      daily={data.daily}
      hourly={data.hourly}
    />
    <Week
      daily={data.daily}
    />
    <p>
      {data.current.temp}&deg; F
      <img src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`} />
      {data.current.weather[0].description}
    </p>
  </>);
}

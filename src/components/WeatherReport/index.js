import Current from '../Current';
import OpenWeatherAttribution from '../OpenWeatherAttribution';
import Today from '../Today';
import Week from '../Week';

export default function WeatherReport({
  data,
}) {
  if (! data) {
    return null;
  }
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

    <div className="section">
      <OpenWeatherAttribution />
      <p>
        <a href="https://www.flaticon.com/free-icons/weather" title="weather icons">Weather icons created by Freepik - Flaticon</a>
      </p>
    </div>
  </>);
}

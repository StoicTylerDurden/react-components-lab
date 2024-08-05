import './WeatherForecast.css';
const WeatherForecast = ({weather}) => {
    const {day, img, imgAlt, conditions, time} = weather;
    return (
        <div className="weather">
            <h2>Day of the Week {day}</h2>
            <img src={img} alt={imgAlt} />
            <p><span>conditions: </span>{conditions}</p>
            <p><span>time:{time} </span></p>
        </div>
    )
}
export default WeatherForecast;


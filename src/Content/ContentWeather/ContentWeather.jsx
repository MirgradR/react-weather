import wind from '../../img/weather/icwind.png'
import rain from '../../img/weather/icrain.png'
import hum from '../../img/weather/ichum.png'
import './ContentWeather.css'

const ContentWeather = (props) => {
    return (
        <div className = {'content__weather'}>
            <div className = {'content__weather-item'}>
                <img src = {wind} alt = {'wind'} />
                <h4 className = {'weather-item__title'}>Wind</h4>
                <span>{props.weather.wind} m/s</span>
            </div>
            <div className = {'content__weather-item'}>
                <img src = {hum} alt = {'hum'} />
                <h4 className = {'weather-item__title'}>Hum</h4>
                <span>{props.weather.humidity} %</span>
            </div>
            <div className = {'content__weather-item'}>
                <img src = {rain} alt = {'rain'} />
                <h4 className = {'weather-item__title'}>Rain</h4>
                <span>{props.weather.rain}</span>
            </div>  
        </div>
    )
}
export default ContentWeather
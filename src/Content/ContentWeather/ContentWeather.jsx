import wind from '../../img/wheather/icwind.png'
import rain from '../../img/wheather/icrain.png'
import hum from '../../img/wheather/ichum.png'
import './ContentWeather.css'

const ContentWeather = (props) => {
    return (
        <div className = {'content__weather'}>
            <div className = {'content__weather-item'}>
                <img src = {wind} alt = {'wind'} />
                <h4 className = {'weather-item__title'}>Wind</h4>
                <span>0.89 m/s</span>
            </div>
            <div className = {'content__weather-item'}>
                <img src = {hum} alt = {'hum'} />
                <h4 className = {'weather-item__title'}>Hum</h4>
                <span>79%</span>
            </div>
            <div className = {'content__weather-item'}>
                <img src = {rain} alt = {'rain'} />
                <h4 className = {'weather-item__title'}>Rain</h4>
                <span>sunny</span>
            </div>  
        </div>
    )
}
export default ContentWeather
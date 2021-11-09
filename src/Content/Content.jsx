import './Content.css'
import logo from '../img/wheather/01d.png'
import ContentDate from './ContentDate/ContentDate'
import ContentWeather from './ContentWeather/ContentWeather'

const Content = (props) => {
    return (
        <div className ={'content'}>
            <img src = {logo} alt = 'icon' className = {'content__weather-img'}/>
            <h2 className = {'content__city'}>Krasnodar</h2>
            <h3 className = {'content__temperature'}>17 <span>&#176;C</span></h3>
            <ContentDate />
            <ContentWeather />
        </div>
    )
}
export default Content
import { connect } from 'react-redux'
import { getWeatherThunkCreator } from '../redux/weatherReducer'
import './Header.css'
import HeaderSearchForm from './HeaderSearchForm/HeaderSearchForm'

const Header = (props) => {
    return (
        <header className = {'header'}>
            <HeaderSearchForm getWeather = {props.getWeather}/>            
        </header>
    )
}
const mapStateToProps = (state) => {
    return {
        weather: state.weather
    }
}
const HeaderContainer = connect(mapStateToProps, { getWeather: getWeatherThunkCreator })(Header)

export default HeaderContainer
import './Content.css'
import ContentDate from './ContentDate/ContentDate'
import ContentWeather from './ContentWeather/ContentWeather'
import { connect } from 'react-redux'
import { getWeatherThunkCreator } from '../redux/weatherReducer'
import { countDateThunkCreator } from '../redux/dateReducer'
import { useEffect } from 'react'
import IconWeather from './imagesList'

const Content = (props) => {
    useEffect( () => {
        if (!props.weather.city) {
            props.getWeather(props.weather.city)
            props.getDate(props.weather.timezone)
        }
    },[])

    useEffect(() => {
        const updateTime = setInterval(() => {
            props.getDate(props.weather.timezone)
        }, 60000)
        return () => {
            clearInterval(updateTime)
        }
    }, [props.weather.timezone])

    if (!props.weather.city) {
        return <div className = {'preloader'}>...Loading...</div>
    }
    
    return (
        <div className ={'content'}>
            <IconWeather icon = {props.weather.img} />
            <h2 className = {'content__city'}>{props.weather.city}</h2>
            <h3 className = {'content__temperature'}>{props.weather.temperature} <span>&#176;C</span></h3>
            <ContentDate date = {props.date} />
            <ContentWeather weather = {props.weather} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather,
        date: state.date
    }
}

const ContentContainer = connect(mapStateToProps, { getWeather: getWeatherThunkCreator, getDate: countDateThunkCreator }) (Content)

export default ContentContainer
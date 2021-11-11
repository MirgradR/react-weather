import { weatherAPI } from '../API/API'
import { countDateThunkCreator } from './dateReducer'

const GET_WEATHER = 'GET-WEATHER'

const initState = {}

export const weatherReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_WEATHER:
            return action.payload
        default:
            return state
    }
}

export const weatherActionCreator = (weather) => {
    
    return {
        type: GET_WEATHER,
        payload: weather
    }
}

const createDataWeather = (data) => {
    const { name, main, wind, timezone, weather } = data
    let weatherData = {}
    weatherData.city = name
    weatherData.temperature = Math.round(main.temp - 273)
    weatherData.wind = wind.speed
    weatherData.timezone = timezone
    weatherData.humidity = main.humidity
    weatherData.rain = weather[0]['description']
    weatherData.img = weather[0]['icon']
    return weatherData
}

export const getWeatherThunkCreator = (city) => {
    return async (dispatch) => {
        try {
            const response = await weatherAPI.getWeather(city)
            let weatherData = createDataWeather(response.data)
            dispatch(weatherActionCreator(weatherData))
            dispatch(countDateThunkCreator(weatherData.timezone))
        } catch (err) {
            console.log(err)
        }
    }
}



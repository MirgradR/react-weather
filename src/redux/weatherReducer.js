import logo from '../img/wheather/01d.png'

const GET_WEATHER = 'GET-WEATHER'


const initState = {
    img: logo,
    city: 'Krasnodar',
    temperature: 18,
    date: '09.11.2021',
    dayOfWeek: 'Tuesday',
    time: '15:46',
    wind: 0.89,
    hum: 79,
    rain: 'sunny'
}

export const weatherReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_WEATHER:
            return action.weather
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
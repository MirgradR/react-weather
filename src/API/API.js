import axios from "axios"

let key = 'f7926112ea8a257c4d52a68840b2a89a'

export const weatherAPI = {
    getWeather(city = 'Moscow') {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).then(data => data)
    }
} 

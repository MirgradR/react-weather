import img01d from'./../img/weather/01d.png'
import img01n from'./../img/weather/01n.png'
import img02d from'./../img/weather/02d.png'
import img02n from'./../img/weather/02n.png'
import img03d from'./../img/weather/03d.png'
import img03n from'./../img/weather/03n.png'
import img04n from'./../img/weather/04n.png'
import img04d from'./../img/weather/04d.png'
import img09d from'./../img/weather/09d.png'
import img09n from'./../img/weather/09n.png'
import img10d from'./../img/weather/10d.png'
import img10n from'./../img/weather/10n.png'
import img11d from'./../img/weather/11d.png'
import img11n from'./../img/weather/11n.png'
import img13d from'./../img/weather/13d.png'
import img13n from'./../img/weather/13n.png'
import img50d from'./../img/weather/50d.png'
import img50n from'./../img/weather/50n.png'

const IconWeather = ({ icon }) => {
    const imgList = [img01d, img01n, img02d, img02n, img03d, img03n, img04n, img04d, img09d, img09n, img10d, img10n, img11d, img11n, img13d, img13n, img50d, img50n]
    const objs = {}
    let img = null
    for (let i in imgList) {
        let key = imgList[i]
        objs[key] = key
    }
    for (let i in objs) {
        if (i.split('/')[3].split('.')[0] === icon) {
            img = objs[i]
        }  
    }
    if (!icon) {
        return <img src = {img01d} alt = 'icon' className = {'content__weather-img'}/>
    }
    return (
        <img src = {img} alt = 'icon' className = {'content__weather-img'}/>
    )
}

export default IconWeather
export const countDate = (timezone = 10800) => {
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const monthOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Deс"]
    
    let date = new Date()
    let localTime = timezone / 3600
    let getday = date.getDate()
    let getyear = date.getFullYear()
    let getweekday = dayOfWeek[date.getDay()] 
    let getmonth = monthOfYear[date.getMonth()]
    let hours = date.getUTCHours()
    let minutes = date.getMinutes()


    let correctTime = hours + localTime
    if (minutes < 10) minutes = '0' + minutes
    if (correctTime >= 24) {
        correctTime = correctTime - 24
        hours = '0'
        if (date.getDay() === 6) {
            getweekday = dayOfWeek[0]
        } else {
            getweekday = dayOfWeek[date.getDay() + 1]
        }
        hours = hours + +correctTime
        getday = getday + 1
    } else if (correctTime < 0) {
        if (date.getDay() === 0) {
            getweekday = dayOfWeek[6]
        } else {
            getweekday = dayOfWeek[date.getDay() - 1]
        }
        hours = 24 + +correctTime
        getday = getday - 1
    } else {
        getweekday = dayOfWeek[date.getDay()]
        hours = hours + +localTime
    }

    const dateObj = {}
    dateObj.day = getday
    dateObj.dayOfWeek = getweekday
    dateObj.monthOfYear = getmonth
    dateObj.year = getyear
    dateObj.hours = hours
    dateObj.minutes = minutes

    return dateObj
}
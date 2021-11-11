

const ContentDate = (props) => {
    
    const { day, dayOfWeek, monthOfYear, year, hours, minutes } = props.date
    return (
        <div className = {'content__date'}>
            <h4 className = {'content__date-date'}>{day}th {monthOfYear} {year}</h4>
            <h4 className = {'content__date-week'}>{dayOfWeek} | {hours}:{minutes}</h4>
        </div>
    )
}
export default ContentDate
import './extraForForms.css'

export const errorsForm = (text) => {
    return (
        <div className = {'error-form'}>{text}</div>
    )
}

export const validate = (values) => {
    const errors = {}
    if (!values.search) {
        errors.search = 'Choose a city'
    } 
    return errors
}
import './extraForForms.css'

export const errorsForm = (props) => {
    return (
        <div className = {'error-form'}>{props.children}</div>
    )
}

export const validate = (values) => {
    const errors = {}
    if (!values.search) {
        errors.search = 'Choose a city'
    } 
    return errors
}
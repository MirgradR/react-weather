import {Field, Formik, Form, ErrorMessage} from 'formik'
import { errorsForm, validate } from '../../extraForForm/extraForForms'
import './SearchFormStyle.css'
import searchIcon from '../../img/searchicon.png'

const HeaderSearchForm = (props) => {
    const searchCity = (value) => {
        console.log(value)
    }
    return (
       <Formik initialValues = {{ search: '' }} validateOnBlur validate = {validate} onSubmit = {(values) => searchCity(values)}>
           {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, isSubmitting}) => (
               <Form className = {'search-form'} onSubmit = {handleSubmit}>
                  <Field className = {'search-form__input'} type = {'input'} name = {'search'} placeholder = {'Paris'} />  
                  <button className = {'search-form__btn'} type = 'submit' disabled = {isSubmitting}><img src = {searchIcon} alt = {'Search'}/></button>
                  <ErrorMessage name = {'search'} component = {errorsForm}/>
               </Form>    
           )}
       </Formik>
    )
}
export default HeaderSearchForm
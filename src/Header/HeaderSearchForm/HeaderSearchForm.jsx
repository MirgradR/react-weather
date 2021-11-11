import { errorsForm } from '../../extraForForm/extraForForms'
import './SearchFormStyle.css'
import searchIcon from '../../img/searchicon.png'
import { useForm } from "react-hook-form"

const HeaderSearchForm = (props) => {
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const searchCity = (value) => {   
        props.getWeather(value.search)
        reset()
    }
    return (
        <form className={'search-form'} onSubmit={handleSubmit(searchCity)}>
            <input {...register("search", { required: true })} className={'search-form__input'} name={'search'} placeholder={'Paris'} />
            <button className={'search-form__btn'} type='submit'><img src={searchIcon} alt={'Search'} /></button>
            {errors.search && errorsForm('Choose a city')}  
        </form>
    )
}

export default HeaderSearchForm
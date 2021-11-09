import './Header.css'
import HeaderSearchForm from './HeaderSearchForm/HeaderSearchForm'

const Header = (props) => {
    return (
        <header className = {'header'}>
            <HeaderSearchForm />            
        </header>
    )
}
export default Header
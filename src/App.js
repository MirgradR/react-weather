import { Provider } from 'react-redux';
import './App.css';
import ContentContainer from './Content/Content';
import HeaderContainer from './Header/Header';
import store from './redux-store';

const App = (props) => {
  return (
    <div className={'weather-app'}>
      <HeaderContainer />
      <ContentContainer />
    </div>
  )
}

const AppContainer = () => {
  return (
    <Provider store = {store}>
      <App />
    </Provider>
  )
}

export default AppContainer;

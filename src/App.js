import { Provider } from 'react-redux';
import './App.css';
import Content from './Content/Content';
import Header from './Header/Header';
import store from './redux-store';

const App = (props) => {
  return (
    <div className={'weather-app'}>
      <Header />
      <Content />
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

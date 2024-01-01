import { BrowserRouter } from 'react-router-dom'
import AppRouter from './pages/router/AppRouter';
import { Provider } from 'react-redux';
import Store from './redux/store';

function App() {

  return (
    <Provider
      store={Store}
    >
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
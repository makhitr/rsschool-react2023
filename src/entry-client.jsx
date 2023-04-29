import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './app/store';

const serverStore = typeof window !== 'undefined' ? setupStore(window.__PRELOADED_STATE__) : '';

delete window.__PRELOADED_STATE__;

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <Provider store={serverStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

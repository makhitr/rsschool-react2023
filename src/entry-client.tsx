import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './app/store';
import { RootState } from './app/store';

declare global {
  interface Window {
    __PRELOADED_STATE__?: RootState;
  }
}

const serverStore = setupStore(window.__PRELOADED_STATE__);

delete window.__PRELOADED_STATE__;

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <Provider store={serverStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { Provider } from 'react-redux';
import { RootState, setupStore } from './app/store';
import { type RenderToPipeableStreamOptions } from 'react-dom/server';

export const render = (
  url: string | Partial<Location>,
  preloadedState: RootState,
  options: RenderToPipeableStreamOptions
) => {
  const store = setupStore(preloadedState);

  return ReactDOMServer.renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  );
};

// import { configureStore } from '@reduxjs/toolkit';
// import appReducer from './appSlice';

// export const store = configureStore({
//   reducer: {
//     app: appReducer,
//   },
// });

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';

import appReducer from './appSlice';

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  app: appReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const store = setupStore();
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counter/counterSlice.js'; 

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer
//   }
// });

export const createReduxStore = (initValue = {}) => {
  return configureStore({
    reducer: {
      counter: counterReducer
    },
    preloadedState: initValue
  });
};

export const store = createReduxStore();
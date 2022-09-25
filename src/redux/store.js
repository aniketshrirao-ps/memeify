import { configureStore } from '@reduxjs/toolkit';
import memeReducer from './slices/memes';

// eslint-disable-next-line import/named

const store = configureStore({
  reducer: {
    meme: memeReducer,
  },
});

export default store;

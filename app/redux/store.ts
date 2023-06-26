import {configureStore} from '@reduxjs/toolkit';
import {apiSlice} from './api-slice';
import movieSlice from './movie-slice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    movies: movieSlice,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

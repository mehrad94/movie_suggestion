import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {
  IGenre,
  IMovieFull,
  IMovieReduxState,
  MovieType1,
  NewsType,
} from '../interfaces';
import {EMPTY_SELECTED_MOVIE} from '../values/constants';

const initialState: IMovieReduxState = {
  selectedMovieStore: EMPTY_SELECTED_MOVIE,
  movieGenreStore: [],
  tvShowGenreStore: [],
  popularMovieStore: [],
  popularTvShowStore: [],
  latestNewsStore: [],
  top250MovieStore: [],
  top250ShowStore: [],
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    selectedMovieStore: (state, action: PayloadAction<IMovieFull>) =>
      (state = {...state, selectedMovieStore: action.payload}),
    top250MovieStore: (state, action: PayloadAction<MovieType1[]>) =>
      (state = {...state, top250MovieStore: action.payload}),
    top250ShowStore: (state, action: PayloadAction<MovieType1[]>) =>
      (state = {...state, top250ShowStore: action.payload}),
    popularMovieStore: (state, action: PayloadAction<MovieType1[]>) =>
      (state = {...state, popularMovieStore: action.payload}),
    popularTvShowStore: (state, action: PayloadAction<MovieType1[]>) =>
      (state = {...state, popularTvShowStore: action.payload}),
    latestNewsStore: (state, action: PayloadAction<NewsType[]>) => {
      return (state = {...state, latestNewsStore: action.payload});
    },
    movieGenreStore: (state, action: PayloadAction<IGenre[]>) =>
      (state = {...state, movieGenreStore: action.payload}),
    tvShowGenreStore: (state, action: PayloadAction<IGenre[]>) =>
      (state = {...state, tvShowGenreStore: action.payload}),
  },
});
export const {
  selectedMovieStore,
  top250MovieStore,
  top250ShowStore,
  popularMovieStore,
  popularTvShowStore,
  latestNewsStore,
  movieGenreStore,
  tvShowGenreStore,
} = movieSlice.actions;

export default movieSlice.reducer;

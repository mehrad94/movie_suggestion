import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
  IGenreResponse,
  IMovieFull,
  ISearchResponse,
  MovieType1,
  NewsType,
} from '../interfaces';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://92.205.183.154:3001/api/v1',
  }),
  endpoints: builder => ({
    boxOffice: builder.query<any, void>({
      query: () => '/special-list/movie/box-office',
    }),
    popularMovie: builder.query<MovieType1[], void>({
      query: () => '/special-list/movie/popular',
    }),
    popularTvShow: builder.query<MovieType1[], void>({
      query: () => '/special-list/show/popular',
    }),
    latestNews: builder.query<NewsType[], void>({
      query: () => '/special-list/latest',
    }),
    topMovie: builder.query<MovieType1[], void>({
      query: () => '/special-list/movie/250',
    }),
    search: builder.query<ISearchResponse, string>({
      query: searchParam => `/movie/s/${searchParam}`,
    }),
    getMovieGenre: builder.query<IGenreResponse[], void>({
      query: () => 'utility/genre/movie',
    }),
    getShowGenre: builder.query<IGenreResponse[], void>({
      query: () => 'utility/genre/show',
    }),
    getMovieInfo: builder.query<IMovieFull, string>({
      query: movieId => `movie/${movieId}`,
    }),
  }),
});

export const {
  useTopMovieQuery,
  useLatestNewsQuery,
  useBoxOfficeQuery,
  usePopularMovieQuery,
  usePopularTvShowQuery,
  useSearchQuery,
  useGetMovieGenreQuery,
  useGetShowGenreQuery,
  useGetMovieInfoQuery,
} = apiSlice;

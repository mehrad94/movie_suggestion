import {Movie, ISearchMotion, ITmdbBResponseMovie} from './../interfaces/index';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {TMDB_API_KEY} from '../values/constants';

interface doubleString {
  motionId: string;
  motionType: string;
}

export const tmdbSlice = createApi({
  reducerPath: 'tmdb',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
    prepareHeaders(headers) {
      headers.set('Authorization', `Bearer ${TMDB_API_KEY}`);
      return headers;
    },
  }),
  endpoints: builder => ({
    discoverMovie: builder.query<ITmdbBResponseMovie, string>({
      query: tvOrMovie => `/discover/${tvOrMovie}`,
    }),
    fetchMotion: builder.query<Movie, doubleString>({
      query: ({motionId, motionType}: doubleString) =>
        `/${motionType}/${motionId}`,
      transformErrorResponse: e => console.log({e}),
      // transformResponse: (response: any) => response.data,
    }),
    fetchMotionRecommendations: builder.query<Movie, doubleString>({
      query: ({motionId, motionType}: doubleString) =>
        `/${motionType}/${motionId}/recommendations`,
      transformErrorResponse: e => console.log({e}),
      // transformResponse: (response: any) => response.data,
    }),
    searchMulti: builder.query<any, ISearchMotion>({
      query: ({query, motionType}: ISearchMotion) =>
        `/search/${motionType}?query=${query}`,
      transformErrorResponse: e => console.log({e}),
      transformResponse: (response: any) => response,
    }),
  }),
});

export const {
  useDiscoverMovieQuery,
  useFetchMotionQuery,
  useFetchMotionRecommendationsQuery,
  useSearchMultiQuery,
} = tmdbSlice;

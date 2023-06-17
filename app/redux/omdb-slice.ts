import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface MovieRate {
  Source: string;
  Value: string;
}

export const omdbSlice = createApi({
  reducerPath: 'omdb',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://www.omdbapi.com/',
  }),
  endpoints: builder => ({
    fetchMovieRates: builder.query<MovieRate[], string>({
      query: (i: string) => `?apikey=e9e0064a&i=${i}`,
      transformErrorResponse: e => console.log({e}),
      transformResponse: (response: any) => response.Ratings,
    }),
  }),
});

export const {useFetchMovieRatesQuery} = omdbSlice;

import {NavigatorScreenParams} from '@react-navigation/native';
export interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ISearchMotion {
  query: any;
  motionType: 'multi' | 'movie' | 'tv' | 'person';
}

export interface ITmdbBResponseMovie {
  results: Movie[];
  page: string;
  total_pages: string;
  total_results: string;
}

export interface MovieType1 {
  link: string;
  movieId: string;
  poster: string;
  rating: string;
  title: string;
  year: string;
}

export interface NewsType {
  banner: string;
  title: string;
  link: string;
  duration: string;
}

export interface ISearchResponse {
  people: {
    link: string;
    avatar: string;
    title: string;
    subtitle: string;
  }[];
  titles: {
    link: string;
    avatar: string;
    title: string;
    year: string;
    stars: string[];
  }[];
}

export interface IGenreResponse {
  title: string;
}

export interface IGenre {
  title: string;
}

export type IRootStackParams = {
  SCREEN_SPLASH: undefined;
  SCREEN_MOVIE: undefined;
  BOTTOM_TAB_STACK: IRootBottomTabParams;
};

export type IRootStackParamList = {
  SCREEN_MOVIE: undefined;
  SCREEN_SPLASH: undefined;
  BOTTOM_TAB_STACK: NavigatorScreenParams<IRootBottomTabParams>;
};

export type IRootBottomTabParams = {
  SCREEN_HOME: undefined;
  SCREEN_TOP: undefined;
  SCREEN_SEARCH: undefined;
};

export interface IMoreLike {
  poster: string;
  url: string;
  rating: string;
  title: string;
}

export interface IMovieFull {
  poster: string;
  movieTitle: string;
  rating: string;
  releasedYear: string;
  pg: string;
  duration: string;
  directors: string[];
  writers: string[];
  cast: ICast[];
  genres: string[];
  storyline: string;
  moreLike: IMoreLike[];
  gallery: string[];
}

export interface ICast {
  name: string;
  avatar: string;
  character: string;
  profile: string;
}
export type IMovieReduxState = {
  selectedMovieStore: IMovieFull;
  tvShowGenreStore: IGenre[];
  movieGenreStore: IGenre[];
  popularMovieStore: MovieType1[];
  popularTvShowStore: MovieType1[];
  latestNewsStore: NewsType[];
  top250MovieStore: MovieType1[];
  top250ShowStore: MovieType1[];
};

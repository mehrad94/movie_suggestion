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

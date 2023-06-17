function makePosterPath(path: string, size: string) {
  return `https://image.tmdb.org/t/p/${size}${path}`;
}

export default makePosterPath;

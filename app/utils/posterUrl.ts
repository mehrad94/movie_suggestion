function makePosterPath(url: string, size: string = '1024') {
  return url.split('_V1_')[0] + `FMjpg_UX${size}_.jpg`;
}

export default makePosterPath;

function idExtractor(url: string) {
  const regex = /\/title\/(tt\d+)/;
  const match = url.match(regex);
  return match![1];
}

export default idExtractor;

export const categoriesDict = (cat: string) => {
  switch (cat) {
    case 'All':
      return 'multi';
    case 'Movies':
      return 'movie';
    case 'Tv Series':
      return 'tv';
    case 'People':
      return 'person';
    default:
      return 'multi';
  }
};

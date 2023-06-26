import {
  SCREEN_HOME,
  SCREEN_NEWS,
  SCREEN_SEARCH,
  SCREEN_TOP,
} from '../values/constants';

function iconNameGenerator(screenName: string) {
  switch (screenName) {
    case SCREEN_HOME:
      return 'home';
    case SCREEN_SEARCH:
      return 'search';
    case SCREEN_NEWS:
      return 'newspaper';
    case SCREEN_TOP:
      return 'trophy';
    default:
      return 'home';
  }
}

export default iconNameGenerator;

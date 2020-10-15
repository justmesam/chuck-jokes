import { State } from '../types'
import {  FETCH_CATEGORIES, FETCH_JOKE_BY_CATEGORY } from './queries'

export default (state: State, action: any) => {
  console.log(state, action);
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      };
    case FETCH_JOKE_BY_CATEGORY:
      return {
        ...state,
        joke: action.joke
      };
    default:
      return state
  }
}

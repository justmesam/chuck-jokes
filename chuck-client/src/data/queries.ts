import { gql } from '@apollo/client';

export const CATEGORIES = gql`
query {
  categories {
    category
  }
}
`;

export const JOKE_BY_CATEGORY = gql`
  query($category: String) {
    joke(category: $category) {
      iconUrl
      value
      id
      url
    }
  }
`;

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_JOKE_BY_CATEGORY = 'FETCH_JOKE_BY_CATEGORY'

import {  CATEGORIES, JOKE_BY_CATEGORY, FETCH_CATEGORIES, FETCH_JOKE_BY_CATEGORY } from './queries'
import { Category, Joke } from '../types'
import { client } from '../index'

export const addCategories = (categories: Category[]) => ({
  type: FETCH_CATEGORIES,
  categories
})

export const addJoke = (joke: Joke) => ({
  type: FETCH_JOKE_BY_CATEGORY,
  joke
})

export const fetchCategories = async (dispatch: any) => {
  try {
    const response = await client.query({query: CATEGORIES})
    const {data, loading} = response
    if(!loading && data) {
      dispatch(addCategories(data.categories))
    }
  } catch(error) {
    console.log(error);

  }
}

export const fetchRandomJoke = async (category: string, dispatch: any) => {
  try {
    const response = await client.query({query: JOKE_BY_CATEGORY, variables:{ category }})
    const {data, loading} = response
    if(!loading && data) {
      dispatch(addJoke(data.joke))
    }
  } catch(error) {
    console.log(error);

  }
}

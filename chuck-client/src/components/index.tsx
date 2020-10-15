import React, { useContext, useEffect, useState } from "react";

import { StoreContext } from '../context'
import { fetchCategories, fetchRandomJoke } from '../data/actions'


const App = () => {
  const [showJoke, setShowJoke] = useState(false)
  const [activeCategory, setActive] = useState('')
  const store = useContext(StoreContext)
  const { state, dispatch} = store

  useEffect(() => {
    fetchCategories(dispatch)
  }, [])

  const handleShowJoke = (category: string) => {
    if (activeCategory === category) {
      setShowJoke(false)
      setActive('')
      return;
    }
    setActive(category)
    setShowJoke(true)
    fetchRandomJoke(category, dispatch)

  }

  return (
      <div className="app">
        <div
          className="header"
        > Get Random jokes by selecting category</div>
        {state.categories.map((category:any, i:any) => {
          return (
            <div
              className={`category-tile ${
                showJoke ?'open' : 'closed'
                } ${
                  activeCategory === category.category && `active`
                }`}
              key={i}
              onClick={() => handleShowJoke(category.category)}
            >
              <span>{category.category}</span>
            </div>
          )
        })}
        <>

        {showJoke && (
          <a href={state.joke.url} target="blank" className="joke-card">
            <h3>Joke;</h3>
            <span>
              <img src={state.joke.iconUrl} width="60" height="60"/>
              <>{state.joke.value}</>
            </span>
          </a>
        )}
        </>
      </div>
  );
}

export default App

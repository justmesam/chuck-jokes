import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import StoreProvider from './context'
import App from './components'
import './styles/index.scss'

export const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache({
    resultCaching: false,
    addTypename: false
  })
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <StoreProvider>
        <App />
      </StoreProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

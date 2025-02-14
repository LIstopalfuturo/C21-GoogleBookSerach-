import React, { Suspense } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';

import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

// Create an http link with credentials included
const httpLink = createHttpLink({
  uri: '/graphql',
  credentials: 'include'
});

// Create an auth link that adds the token to headers
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  };
});

// Configure Apollo Client with error handling
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ErrorBoundary>
        <Router>
          <div className="flex-column justify-flex-start min-100-vh">
            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<SearchBooks />} />
                <Route path="/saved" element={<SavedBooks />} />
                <Route path="*" element={<h1 className="display-2">Wrong page!</h1>} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </ErrorBoundary>
    </ApolloProvider>
  );
}

export default App;

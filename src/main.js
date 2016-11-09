import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './App.jsx';

import BookListsPage from './containers/BookListsPage.jsx';
import BookPage from './containers/BookPage.jsx';
import AuthorListsPage from './containers/AuthorListsPage.jsx';
import AuthorPage from './containers/AuthorPage.jsx';
import GenreListPage from './containers/GenreListsPage.jsx';
import GenrePage from './containers/GenrePage.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/books' component={BookListsPage} />
      <Route path='/books/:id' component={BookPage} />
      <Route path='/authors' component={AuthorListsPage} />
      <Route path='/authors/:id' component={AuthorPage} />
      <Route path='/genres' component={GenreListPage}>
        <Route path='/genres/:id' component={GenrePage} />
      </Route>
    </Route>
  </Router>,
  document.getElementById('mount-point')
);

import AppDispatcher from '../dispatcher/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';

import api from '../api';

const GenreActions = {

  loadGenre(genreId) {
    api.loadGenre(genreId)
    .then(data => {
      AppDispatcher.dispatch({
        type: AppConstants.GENRE_LOAD_SUCCESS,
        books: data,
      });
    })
    .catch((err) => {
      AppDispatcher.dispatch({
        type: AppConstants.GENRE_LOAD_FAIL,
        error: err,
      });
    });
  },

};

export default GenreActions;

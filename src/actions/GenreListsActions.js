import AppDispatcher from '../dispatcher/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';

import api from '../api';

const GenreListsActions = {

  loadGenreLists() {
    api.loadGenreLists()
    .then(data => {
      AppDispatcher.dispatch({
        type: AppConstants.GENRE_LISTS_LOAD_SUCCESS,
        genres: data,
      });
    })
    .catch((err) => {
      AppDispatcher.dispatch({
        type: AppConstants.GENRE_LISTS_LOAD_FAIL,
        error: err,
      });
    });
  },

};

export default GenreListsActions;

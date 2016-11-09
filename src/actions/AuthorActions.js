import AppDispatcher from '../dispatcher/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';

import api from '../api';

const AuthorActions = {

  loadAuthor(idAuthor) {
    api.loadAuthor(idAuthor)
    .then(data => {
      AppDispatcher.dispatch({
        type: AppConstants.AUTHOR_LOAD_SUCCESS,
        author: data,
      });
    })
    .catch((err) => {
      AppDispatcher.dispatch({
        type: AppConstants.AUTHOR_LOAD_FAIL,
        error: err,
      });
    });
  },

};

export default AuthorActions;

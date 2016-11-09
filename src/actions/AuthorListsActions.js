import AppDispatcher from '../dispatcher/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';

import api from '../api';

const AuthorListsActions = {

  loadAuthorLists() {
    api.loadAuthorLists()
    .then(data => {
      AppDispatcher.dispatch({
        type: AppConstants.AUTHOR_LISTS_LOAD_SUCCESS,
        authors: data,
      });
    })
    .catch((err) => {
      AppDispatcher.dispatch({
        type: AppConstants.AUTHOR_LISTS_LOAD_FAIL,
        error: err,
      });
    });
  },

};

export default AuthorListsActions;

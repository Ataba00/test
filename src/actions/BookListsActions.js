import AppDispatcher from '../dispatcher/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';

import api from '../api';

const BookListsActions = {

  loadBookLists() {
    api.loadBookLists()
    .then(data => {
      AppDispatcher.dispatch({
        type: AppConstants.BOOK_LISTS_LOAD_SUCCESS,
        books: data,
      });
    })
    .catch((err) => {
      AppDispatcher.dispatch({
        type: AppConstants.BOOK_LISTS_LOAD_FAIL,
        error: err,
      });
    });
  },

};

export default BookListsActions;

import AppDispatcher from '../dispatcher/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';

import api from '../api';

const BookActions = {

  loadBook(idBook) {
    api.loadBook(idBook)
    .then(data => {
      AppDispatcher.dispatch({
        type: AppConstants.BOOK_LOAD_SUCCESS,
        book: data,
      });
    })
    .catch((err) => {
      AppDispatcher.dispatch({
        type: AppConstants.BOOK_LOAD_FAIL,
        error: err,
      });
    });
  },

};

export default BookActions;

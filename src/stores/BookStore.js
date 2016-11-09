import EventEmmiter from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';

const CHANGE_EVENT = 'change';

let _book = {
      author: [],
      genre: [],
    };

let _error = null;

const BookStore = Object.assign({}, EventEmmiter.prototype, {

    getBook() {
      return _book;
    },

    emitChange() {
      this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },
  });

AppDispatcher.register(action => {
  switch (action.type) {
    case AppConstants.BOOK_LOAD_SUCCESS:
      _book = action.book;
      BookStore.emitChange();
      break;

    case AppConstants.BOOK_LOAD_FAIL:
      _book = [];
      _error = action.error;
      BookStore.emitChange();
      break;

    default:
  }
});

export default BookStore;

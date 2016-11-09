import EventEmmiter from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';

const CHANGE_EVENT = 'change';

let _bookLists = [];
let _error = null;

const BookListsPage = Object.assign({}, EventEmmiter.prototype, {

    getBookLists() {
      return _bookLists;
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
  console.log(action.type, action);
  switch (action.type) {
    case AppConstants.BOOK_LISTS_LOAD_SUCCESS:
      _bookLists = action.books;

      BookListsPage.emitChange();
      break;

    case AppConstants.BOOK_LISTS_LOAD_FAIL:
      _bookLists = [];
      _error = action.error;

      BookListsPage.emitChange();
      break;

    default:
  }
});

export default BookListsPage;

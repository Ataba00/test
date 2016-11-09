import EventEmmiter from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';

const CHANGE_EVENT = 'change';

let _bookLists = [];
let _error = null;

const GenreStore = Object.assign({}, EventEmmiter.prototype, {

    getGenreLists() {
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
  switch (action.type) {
    case AppConstants.GENRE_LOAD_SUCCESS:
      _bookLists = action.books;

      GenreStore.emitChange();
      break;

    case AppConstants.GENRE_LOAD_FAIL:
      _bookLists = [];
      _error = action.error;
      GenreStore.emitChange();
      break;

    default:
  }
});

export default GenreStore;

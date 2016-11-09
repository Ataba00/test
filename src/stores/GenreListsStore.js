import EventEmmiter from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';

const CHANGE_EVENT = 'change';

let _genreLists = [];
let _error = null;

const GenreListsPage = Object.assign({}, EventEmmiter.prototype, {

    getGenreLists() {
      return _genreLists;
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
    case AppConstants.GENRE_LISTS_LOAD_SUCCESS:
      _genreLists = action.genres;

      GenreListsPage.emitChange();
      break;

    case AppConstants.GENRE_LISTS_LOAD_FAIL:
      _genreLists = [];
      _error = action.error;

      GenreListsPage.emitChange();
      break;

    default:
  }
});

export default GenreListsPage;

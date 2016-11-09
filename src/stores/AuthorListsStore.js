import EventEmmiter from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';

const CHANGE_EVENT = 'change';

let _authorLists = [];
let _error = null;

const AuthorListsStore = Object.assign({}, EventEmmiter.prototype, {

    getAuthorLists() {
      return _authorLists;
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
    case AppConstants.AUTHOR_LISTS_LOAD_SUCCESS:
      _authorLists = action.authors;
      AuthorListsStore.emitChange();
      break;

    case AppConstants.AUTHOR_LISTS_LOAD_FAIL:
      _authorLists = [];
      _error = action.error;
      AuthorListsStore.emitChange();
      break;

    default:
  }
});

export default AuthorListsStore;

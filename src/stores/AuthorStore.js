import EventEmmiter from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';

const CHANGE_EVENT = 'change';

let _author = {
  books: [
    {
      id: '',
      name: '',
    },
  ],
};
let _error = null;

const AuthorStore = Object.assign({}, EventEmmiter.prototype, {

    getAuthor() {
      return _author;
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
    case AppConstants.AUTHOR_LOAD_SUCCESS:
      _author = action.author;
      AuthorStore.emitChange();
      break;

    case AppConstants.AUTHOR_LOAD_FAIL:
      _author = [];
      _error = action.error;
      AuthorStore.emitChange();
      break;

    default:
  }
});

export default AuthorStore;

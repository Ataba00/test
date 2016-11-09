import React from 'react';

import BookListsStore from '../stores/BookListsStore';
import BookListsActions from '../actions/BookListsActions';

import BookListsPage from '../components/BookListsPage.jsx';

function getStateFromFlux() {
  return {
    bookLists: BookListsStore.getBookLists(),
  };
}

class BookListsPageContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ...getStateFromFlux(),
    };
    this._onChange = ::this._onChange;
  }

  componentWillMount() {
    BookListsActions.loadBookLists();
  }

  componentDidMount() {
    BookListsStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    BookListsStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <BookListsPage
        bookLists={this.state.bookLists}
        />
    );
  }

  _onChange() {
    this.setState(getStateFromFlux());
  }

}

export default BookListsPageContainer;

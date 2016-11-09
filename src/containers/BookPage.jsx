import React from 'react';

import BookStore from '../stores/BookStore';
import BookActions from '../actions/BookActions';

import BookPage from '../components/BookPage.jsx';

function getStateFromFlux() {
  return {
    book: BookStore.getBook(),
  };
}

class BookPageContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ...getStateFromFlux(),
    };
    this._onChange = ::this._onChange;
  }

  componentWillMount() {
    BookActions.loadBook(this.props.params.id);
  }

  componentDidMount() {
    BookStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    BookStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <BookPage
        book={this.state.book}
      />
    );
  }

  _onChange() {
    this.setState(getStateFromFlux());
  }

}

export default BookPageContainer;

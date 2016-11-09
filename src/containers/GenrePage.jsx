import React from 'react';

import GenreStore from '../stores/GenreStore';
import GenreActions from '../actions/GenreActions';

import BookListsPage from '../components/BookListsPage.jsx';

function getStateFromFlux() {
  return {
    bookLists: GenreStore.getGenreLists(),
  };
}

class GenerPageContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ...getStateFromFlux(),
    };
    this._onChange = ::this._onChange;
  }

  componentWillMount() {
    GenreActions.loadGenre(this.props.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      GenreActions.loadGenre(nextProps.params.id);
    }
  }

  componentDidMount() {
    GenreStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    GenreStore.removeChangeListener(this._onChange);
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

export default GenerPageContainer;

import React from 'react';

import GenreListsStore from '../stores/GenreListsStore';
import GenreListsActions from '../actions/GenreListsActions';

import GenreListsPage from '../components/GenreListsPage.jsx';

function getStateFromFlux() {
  return {
    genreLists: GenreListsStore.getGenreLists(),
  };
}

class GenreListsPageContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ...getStateFromFlux(),
    };
    this._onChange = ::this._onChange;
  }

  componentWillMount() {
    GenreListsActions.loadGenreLists();
  }

  componentDidMount() {
    GenreListsStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    GenreListsStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <GenreListsPage
        genreLists={this.state.genreLists}
        page={this.props.children}
        selectedId={this.props.params.id}
        />
    );
  }

  _onChange() {
    this.setState(getStateFromFlux());
  }

}

export default GenreListsPageContainer;

import React from 'react';

import AuthorListsStore from '../stores/AuthorListsStore';
import AuthorListsActions from '../actions/AuthorListsActions';

import AuthorListsPage from '../components/AuthorListsPage.jsx';

function getStateFromFlux() {
  return {
    authorLists: AuthorListsStore.getAuthorLists(),
  };
}

class AuthorListsPageContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ...getStateFromFlux(),
    };
    this._onChange = ::this._onChange;
  }

  componentWillMount() {
    AuthorListsActions.loadAuthorLists();
  }

  componentDidMount() {
    AuthorListsStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AuthorListsStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <AuthorListsPage
        authorLists={this.state.authorLists}
      />
    );
  }

  _onChange() {
    this.setState(getStateFromFlux());
  }

}

export default AuthorListsPageContainer;

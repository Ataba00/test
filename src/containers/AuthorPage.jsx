import React from 'react';

import AuthorStore from '../stores/AuthorStore';
import AuthorActions from '../actions/AuthorActions';

import AuthorPage from '../components/AuthorPage.jsx';

function getStateFromFlux() {
  return {
    author: AuthorStore.getAuthor(),
  };
}

class AuthorPageContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ...getStateFromFlux(),
    };
    this._onChange = ::this._onChange;
  }

  componentWillMount() {
    AuthorActions.loadAuthor(this.props.params.id);
  }

  componentDidMount() {
    AuthorStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AuthorStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <AuthorPage
        author={this.state.author}
      />
    );
  }

  _onChange() {
    this.setState(getStateFromFlux());
  }

}

export default AuthorPageContainer;

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ListIcon from 'material-ui/svg-icons/action/view-list';

import './styles/base.less';
import './styles/App.less';

class App extends React.Component {

  render() {
    const { router } = this.context;
    return (
      <MuiThemeProvider>
        <div className = 'App'>
          <div className='ListsPage__menu'>
            <List className='ListsPage__list'>
              <h3 className='ListsPage__title'>Andrey Tabachenko</h3>
              <Divider />
              <List className='ListsPage__list'>
                <ListItem
                  leftIcon={<ListIcon />}
                  primaryText="List of Books"
                  onClick={router.push.bind(null, `/books`)}
                  style={
                    this.props.location.pathname === '/books'
                    ?
                    { backgroundColor: 'rgba(0,0,0,0.1)' }
                    :
                    null
                  }
                />
                <ListItem
                  leftIcon={<ListIcon />}
                  primaryText="List of Authors"
                  onClick={router.push.bind(null, `/authors`)}
                  style={
                    this.props.location.pathname === '/authors'
                    ?
                    { backgroundColor: 'rgba(0,0,0,0.1)' }
                    :
                    null
                  }
                />
                <ListItem
                  leftIcon={<ListIcon />}
                  primaryText="List of Genres"
                  onClick={router.push.bind(null, `/genres`)}
                  style={
                    this.props.location.pathname === '/genres'
                    ?
                    { backgroundColor: 'rgba(0,0,0,0.1)' }
                    :
                    null
                  }
                />
              </List>
            </List>
          </div>
          <div className='ListsPage__content'>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default App;

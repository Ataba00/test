import React from 'react';

import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ChromeReaderMode from 'material-ui/svg-icons/action/chrome-reader-mode';
import LinkIcon from 'material-ui/svg-icons/content/link';

import './AuthorListsPage.less';

class AuthorListsPage extends React.Component {

  render() {
    const { router } = this.context;
    return (
      <List className='author__lists'>
        {
          this.props.authorLists.map(author => {
            let books = author.books.map(book =>
              <ListItem
                key={book.id}
                primaryText={book.title}
                onClick={router.push.bind(null, `/books/${book.id}`)}
                leftIcon={<ChromeReaderMode />}
              />
            );
            return (
              <ListItem
                key={`L${author.id}`}
                primaryText={author.name}
                leftAvatar={<Avatar src={author.image} />}
                primaryTogglesNestedList={true}
                initiallyOpen={true}
                nestedItems={[
                  <ListItem className='author__list'
                    key={author.id}
                    primaryText={'About Author'}
                    onClick={router.push.bind(null, `/authors/${author.id}`)}
                    leftIcon={<LinkIcon />}
                    />,
                  ...books
                ]}
              />
            );
          })
        }
      </List>
    );
  }
}

AuthorListsPage.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default AuthorListsPage;

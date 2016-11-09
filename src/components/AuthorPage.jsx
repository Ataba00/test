import React from 'react';

import { List, ListItem } from 'material-ui/List';
import ChromeReaderMode from 'material-ui/svg-icons/action/chrome-reader-mode';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import './AuthorPage.less';

const customContentStyle = {
  width: '100%',
  maxWidth: '500px',
};

class AuthorPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
    this.handleOpen = ::this.handleOpen;
    this.handleClose = ::this.handleClose;
  }

  handleOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };

  render() {
    const { router } = this.context;
    let { author } = this.props;
    return (
      <div className='author__page'>
        <Card>
          <CardHeader className='author__header'
            title={author.name}
            avatar={author.image}
            onClick={this.handleOpen}
          />
          <CardTitle title='Biography' />
          <CardText>{author.biography}</CardText>
          <CardTitle title='Books' />
          <List>
            {
              author.books.map(book =>
                  <ListItem
                    key={book.id}
                    primaryText={book.title}
                    leftIcon={<ChromeReaderMode />}
                    onClick={router.push.bind(null, `/books/${book.id}`)}
                  />
              )
            }
          </List>
        </Card>
        <Dialog
          actions={
            <FlatButton
              label="Cancel"
              primary={true}
              onTouchTap={this.handleClose}
            />
          }
          contentStyle={customContentStyle}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <img className='modal-image' src={author.image} />
        </Dialog>
      </div>
    );
  }
}

AuthorPage.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default AuthorPage;

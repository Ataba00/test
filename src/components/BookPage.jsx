import React from 'react';

import { List, ListItem } from 'material-ui/List';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Assistant from 'material-ui/svg-icons/image/assistant';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const customContentStyle = {
  width: '100%',
  maxWidth: '500px',
};

class BookPage extends React.Component {
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
    let { book } = this.props;
    return (
      <div className='book__page'>
        <Card>
          <CardHeader className='book__header'
            title={book.title}
            avatar={book.image}
            onClick={this.handleOpen}
          />
          <CardTitle title='Description' />
          <CardText>{book.desc}</CardText>
          <CardTitle title={book.author.length == 1 ? 'Author' : 'Authors'} />
          <List>
            {
              book.author.map(author =>
                  <ListItem
                    key={author.id}
                    primaryText={author.name}
                    leftIcon={<PermIdentity />}
                    onClick={router.push.bind(null, `/authors/${author.id}`)}
                  />
              )
            }
          </List>
          <CardTitle title={book.genre.length == 1 ? 'Genre' : 'Genres'} />
          <List>
            {
              book.genre.map(genre =>
                <ListItem
                  key={genre.id}
                  primaryText={genre.genre}
                  leftIcon={<Assistant />}
                  onClick={router.push.bind(null, `/genres/${genre.id}`)}
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
          <img className='modal-image' src={book.image} />
        </Dialog>
      </div>
    );
  }
}

BookPage.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default BookPage;

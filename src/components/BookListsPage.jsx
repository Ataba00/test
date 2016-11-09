import React from 'react';

import { List, ListItem } from 'material-ui/List';
import { GridList, GridTile } from 'material-ui/GridList';

import './BookListsPage.less';

class BookListsPage extends React.Component {

  render() {
    const { router } = this.context;
    return (
      <GridList
        cellHeight={380}
        cols={3}
        >
        {
          this.props.bookLists.map(book =>
            <GridTile
              key={book.id}
              title={<span
                  className="book__link"
                  onClick={router.push.bind(null, `/books/${book.id}`)}
                >{book.title}</span>}
              titleBackground="rgba(0,0,0,0.7)"
              subtitle={
                <span>by
                  {
                    book.author.map(author =>
                      <span className='author__link'
                        key={author.id}
                        onClick={router.push.bind(null, `/authors/${author.id}`)}
                        > {author.name}</span>
                    )
                  }
                </span>
              }
              >
              <img src={book.image} />
            </GridTile>
          )
        }
      </GridList>
    );
  }
}

BookListsPage.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default BookListsPage;

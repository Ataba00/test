const AUTHORS = 'https://api.myjson.com/bins/3tk88';
const BOOKS = 'https://api.myjson.com/bins/1n9pk';

export default {
  loadBookLists() {
    return this.makeRequest(BOOKS);
  },

  loadBook(idBook) {
    return this.makeRequest(BOOKS)
    .then(data => {
      for (let item of data) {
        if (item.id == idBook) {
          return item;
        }
      }
    });
  },

  loadAuthorLists() {
    return this.makeRequest(AUTHORS);
  },

  loadAuthor(idAuthor) {
    return this.makeRequest(AUTHORS)
    .then(data => {
      for (let item of data) {
        if (item.id == idAuthor) {
          return item;
        }
      }
    });
  },

  loadGenreLists() {
    return this.makeRequest(BOOKS)
    .then(data => {
      let genres = [];
      let subStr = '';
      for (let book of data) {
        for (let g of book.genre) {
          if (subStr.indexOf(g.id) == -1) {
            subStr += g.id;
            genres.push(g);
          }
        }
      }

      return genres;
    });
  },

  loadGenre(genreId) {
    return this.makeRequest(BOOKS)
    .then(data => data.filter(item => {
      for (let itemGenre of item.genre) {
        if (itemGenre.id == genreId) return true;
      }
    }));
  },

  makeRequest(url) {
    return fetch(url).then(resp => resp.json());
  },
};

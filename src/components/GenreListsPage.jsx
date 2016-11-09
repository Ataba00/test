import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';

import './GenreListsPage.less';

class GenreListsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.handleChange = ::this.handleChange;
  }

  componentWillReceiveProps(nextProps) {
    nextProps.selectedId
    ?
      this.setState({
        value: nextProps.genreLists.map(item => item.id).indexOf(nextProps.selectedId) + 1,
      })
    :
      this.setState({ value: 0 });
  }

  handleChange(event, index, value) {
    this.setState({ value });
  };

  render() {
    const { router } = this.context;
    const { genreLists } = this.props;
    return (
      <div>
        <Paper className='genre__lists'>
          <DropDownMenu
            style={{ width: 200 }}
            value={this.state.value}
            onChange={this.handleChange}
            >
            {
              genreLists.map((genre, i) =>
                <MenuItem
                  value={i + 1}
                  key={genre.id}
                  primaryText={genre.genre}
                  onClick={router.push.bind(null, `/genres/${genre.id}`)}
                />
              )
            }
          </DropDownMenu>
        </Paper>
        <div>{this.props.page}</div>
      </div>
    );
  }
}

GenreListsPage.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default GenreListsPage;

import './Search.css';

import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import MoviesApiService from '../../services/MoviesApiService';

class Search extends React.Component {
  moviesApiService = new MoviesApiService();

  state = {
    value: '',
  };

  static defaultProps = {
    changeMovies: () => {},
    currentPage: 1,
  };

  static propTypes = {
    changeMovies: PropTypes.func,
    currentPage: PropTypes.number,
    setSearchValueSaved: PropTypes.func.isRequired,
    searchValueSaved: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { searchValueSaved } = this.props;
    this.setState({value: searchValueSaved})
  }

  componentDidUpdate(prevProp, prevState) {
    const { currentPage } = this.props;
    const { value } = this.state;
    const { changeMovies } = this.props;

    if ((prevState.value !== value || prevProp.currentPage !== currentPage) && value !== '') {
      changeMovies(value, currentPage);
    }
  }

  componentWillUnmount () {
    const { setSearchValueSaved } = this.props;
    const { value } = this.state;
    setSearchValueSaved(value)
  }

  changedInput = (inpValue) => {
    this.setState({ value: inpValue.target.value });
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Type to search..."
        className="search"
        onKeyUp={debounce((event) => {
          this.changedInput(event);
        }, 1000)}
      />
    );
  }
}

export default Search;

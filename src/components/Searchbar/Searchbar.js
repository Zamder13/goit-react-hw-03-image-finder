import { Component } from 'react';
import { IoSearch } from 'react-icons/io5';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

class SearchBar extends Component {
  state = {
    query: '',
  };

  handleSearch = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase().trim() });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.searchForm_button}>
            <IoSearch size={24} />
          </button>

          <input
            className={css.searchForm_input}
            type="text"
            autoComplete="off"
            value={query}
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleSearch}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;

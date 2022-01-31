import { Component } from 'react';

class SearchBar extends Component {
  state = {
    query: null,
  };

  handleSearch = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase().trim() });
    console.log(event.currentTarget.value);
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      return;
    }

    this.props.onSearch(this.state.query);
    console.log(this.state.query);

    this.setState({ query: null });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleSearch}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;

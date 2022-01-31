import React, { Component } from 'react';
// import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';

class App extends Component {
  state = {
    query: null,
  };

  formSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <SearchBar onSearch={this.formSubmit} />
        <ImageGallery images={this.state.query} />
      </>
    );
  }
}
export default App;

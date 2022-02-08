import React, { Component } from 'react';
import SearchBar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import fetchPhotos from '../API/API';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    photos: '',
    loading: false,
    query: null,
    page: 1,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const prevQuery = prevState.query;
    const prevPage = prevState.page;
    const prevPhotos = prevState.photos;
    const { page, query } = this.state;

    if (prevPage !== page) {
      this.setState({ loading: true });
      this.updateState();
    }

    if (prevQuery !== query) {
      if (prevPhotos !== '') {
        this.setState({ photos: '', page: 1 });
      }

      this.updateState();
    }
  }

  updateState = () => {
    const { page, query } = this.state;

    this.setState({ loading: true });
    setTimeout(() => {
      fetchPhotos(query, page)
        .then(data => {
          if (data.length === 0) {
            toast.info('Sorry, not found');
          }
          this.setState(({ photos }) => ({
            photos: [...photos, ...data],
          }));
        })
        .then(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        })
        .catch(error => this.setState({ error }))
        .finally(this.setState({ loading: false }));
    }, 1000);
  };

  onLoadMOre = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  formSubmit = query => {
    this.setState({ query });
  };

  render() {
    const { photos, loading } = this.state;
    return (
      <>
        <ToastContainer autoClose={3000} />
        <SearchBar onSearch={this.formSubmit} />
        {photos && <ImageGallery images={photos} />}
        {loading && <Loader />}
        {photos.length > 0 && <Button click={this.onLoadMOre} />}
      </>
    );
  }
}

App.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({
      photos: PropTypes.string.isRequired,
      query: PropTypes.string.isRequired,
      page: PropTypes.string.isRequired,
      error: PropTypes.string.isRequired,
    }),
  ),
};

export default App;

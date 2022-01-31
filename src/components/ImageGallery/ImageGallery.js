import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';

const URL = 'https://pixabay.com/api/';
const API_KEY = '24441832-e1f7ed32578d6107b72c2a05f';

class ImageGallery extends Component {
  state = {
    photos: [],
    loading: false,
    query: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    // const page = this.state.page;

    const prevName = prevProps.images;
    const nextName = this.props.images;

    if (prevState.page !== this.state.page) {
      this.loadPhotos(nextName);
    }

    if (prevName === nextName) {
      // this.loadPhotos();
    }

    if (prevName !== nextName) {
      console.log('change name query');
      console.log('prevProp.images', prevProps.images);
      console.log('this.props.images', this.props.images);

      this.setState({ loading: true });
      this.loadPhotos(nextName);
    }
  }

  componentDidMount() {
    // const { page } = this.state;
  }

  loadPhotos = async searchName => {
    let { page } = this.state;

    await fetch(
      `${URL}?key=${API_KEY}&q=${searchName}&${page}&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(res => res.json())
      .then(({ hits }) => {
        this.setState(prevState => ({
          photos: [...prevState.photos, ...hits],
        }));
        console.log(this.state.photos);
      })
      .finally(this.setState({ loading: false }));
  };

  onLoadMOre = () => {
    console.log('click');
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { photos } = this.state;
    return (
      <>
        {this.state.loading && <h1>Loading</h1>}
        {photos && (
          <ul className="ImageGallery">
            {photos.map(({ id, webformatURL, tags }) => (
              <ImageGalleryItem
                key={id}
                smallImage={webformatURL}
                info={tags}
              />
            ))}
          </ul>
        )}
        {photos && <Button click={this.onLoadMOre} />}
      </>
    );
  }
}

export default ImageGallery;

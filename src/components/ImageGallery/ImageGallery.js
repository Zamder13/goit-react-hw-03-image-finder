import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

import css from './ImageGallery.module.css';
const ImageGallery = ({ images }) => {
  return (
    <>
      <ul className={css.imageGallery}>
        {images.map(({ id, largeImageURL, webformatURL, tags }) => (
          <ImageGalleryItem
            key={id}
            smallImage={webformatURL}
            info={tags}
            largeImageURL={largeImageURL}
          />
        ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
    }),
  ),
};

export default ImageGallery;

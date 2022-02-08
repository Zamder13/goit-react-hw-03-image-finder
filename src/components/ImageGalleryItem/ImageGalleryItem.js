import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { smallImage, info, largeImageURL } = this.props;

    return (
      <li className={css.imageGalleryItem}>
        <img
          onClick={this.toggleModal}
          className={this.imageGalleryItem_image}
          src={smallImage}
          alt={info}
        />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={info} />
          </Modal>
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default ImageGalleryItem;

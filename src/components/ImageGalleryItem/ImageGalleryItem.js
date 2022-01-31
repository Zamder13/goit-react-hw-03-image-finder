const ImageGalleryItem = ({ smallImage, info }) => {
  console.log(smallImage, info);
  return (
    <li className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" src={smallImage} alt={info} />
    </li>
  );
};

export default ImageGalleryItem;

import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '24441832-e1f7ed32578d6107b72c2a05f';

const fetchPhotos = async (searchName, currentPage) => {
  try {
    const { data } = await axios.get(
      `${URL}?q=${searchName}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    );
    return data.hits;
  } catch (error) {
    console.log(error);
  }
};

export default fetchPhotos;

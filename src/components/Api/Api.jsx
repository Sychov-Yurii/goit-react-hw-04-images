import axios from 'axios';

const API_KEY = '40315938-f4b95c5c15917d8c0c53825d3';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = async (query, page) => {
  const { data } = await axios.get('/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 12,
      page,
    },
  });
  return data;
};

export default getImages;

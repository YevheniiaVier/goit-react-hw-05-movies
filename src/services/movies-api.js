import axios from 'axios';

// export const API_KEY = '62e7f60baa5f08ed1edf6bd3ed6b9146';
// export const BASE_URL = 'https://api.themoviedb.org/3';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '62e7f60baa5f08ed1edf6bd3ed6b9146',
  },
});

export const getMovies = async (page = 1) => {
  const { data } = await instance.get(`/trending/all/day?`, {
    params: {
      page,
    },
  });
  return data.results;
};

export const getMovieCard = async id => {
  const { data } = await instance.get(`/movie/${id}?language=en-US`);
  return data;
};

export const getMovieBySearch = async (query, page = 1) => {
  const { data } = await instance.get(`search/movie`, {
    params: {
      query,
      page,
    },
  });

  return data;
};

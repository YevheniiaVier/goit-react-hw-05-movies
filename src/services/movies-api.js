import axios from 'axios';

export const API_KEY = '62e7f60baa5f08ed1edf6bd3ed6b9146';
// export const BASE_URL = 'https://api.themoviedb.org/3';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const getMovies = async (_page = 1) => {
  const { data } = await instance.get(`/trending/all/day?api_key=${API_KEY}`, {
    params: {
      _page,
    },
  });
  return data.results;
};

export const getMovieCard = async id => {
  const { data } = await instance.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

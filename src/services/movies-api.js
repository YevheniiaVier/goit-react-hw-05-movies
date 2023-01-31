import axios from 'axios';

// export const API_KEY = '62e7f60baa5f08ed1edf6bd3ed6b9146';
// export const BASE_URL = 'https://api.themoviedb.org/3';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '62e7f60baa5f08ed1edf6bd3ed6b9146',
    language: 'en-US',
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
  const { data } = await instance.get(`/movie/${id}`);
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

export const getCast = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data.cast;
};

export const getReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);

  console.log(data.results);
  return data.results;
};

// async function fetchMovieGenres() {
//   try {
//     const response = await instance.get(`/genre/movie/list`);
//     return response.data.genres.reduce((acc, currentValue) => {
//       acc[currentValue.id] = currentValue.name;
//       return acc;
//     }, {});
//   } catch (error) {
//     alert('ERRORgenres');
//   }
// }

// async function fetchTvGenres() {
//   try {
//     const response = await instance.get(`/genre/tv/list`);
//     return response.data.genres.reduce((acc, currentValue) => {
//       acc[currentValue.id] = currentValue.name;
//       return acc;
//     }, {});
//   } catch (error) {
//     alert('ERRORTvgenres');
//   }
// }

// export async function combineGenres() {
//   const movieGenres = await fetchMovieGenres();
//   const tvGenres = await fetchTvGenres();
//   const genres = { ...movieGenres, ...tvGenres };
//   return genres;
// }

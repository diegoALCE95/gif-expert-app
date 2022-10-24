export const getGifs = async(category) => {

  const API_KEY = 'zAWHS8GKul2wYBtNNRXjtdU8Icos8kDi';
  const limit = 10;
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${limit}&offset=0&rating=g&lang=en`;

  const res = await fetch(URL);
  const { data } = await res.json();

  const gifs = data.map(gif => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }))

  return gifs;

}
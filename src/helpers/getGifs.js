const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=dysfmo89xh2K79cyzQZRvXg2tA0XoEJ8&q=${encodeURI(
    category
  )}&limit=10`;
  const respuesta = await fetch(url);
  const { data } = await respuesta.json();
  const gifs = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url,
    };
  });
  return gifs;
};

export default getGifs;

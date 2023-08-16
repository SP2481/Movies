export default async function Searchthemovie(name, page) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${
    import.meta.env.VITE_APIKEY
  }&query=${name}&page=${page}`;
  const response = await fetch(url);
  return response.json();
}

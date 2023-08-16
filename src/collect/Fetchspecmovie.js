export default async function FetchYourMovie({ queryKey }) {
  const id = queryKey[1];
  const fetchmovie = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${
      import.meta.env.VITE_APIKEY
    }`
  );
  if (!fetchmovie.ok) {
    throw new Error(`Request not found for ${id}` + fetchmovie.status);
  }
  return fetchmovie.json();
}

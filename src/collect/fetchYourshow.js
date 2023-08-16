export default async function fetchyourshow({ queryKey }) {
  const id = queryKey[1];
  const info = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${
      import.meta.env.VITE_APIKEY
    }`
  );
  if (!info) {
    throw new Error("request not found");
  }
  return info.json();
}

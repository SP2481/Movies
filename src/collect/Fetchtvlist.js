export default async function FetchTVlist() {
  const showslist = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${
      import.meta.env.VITE_APIKEY
    }`
  ).then((res) => {
    if (!res.ok) {
      throw new Error("Tv list api is not working");
    }
    return res.json();
  });
  return showslist;
}

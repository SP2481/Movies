const api_key = import.meta.env.VITE_APIKEY;

export default async function FetchmovieList() {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&lang`
  );
  if (!res.ok) {
    throw new Error("Request failed with status " + res.status);
  }
  return res.json();
}

export async function Fetchcomedymovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=${api_key}`
  );
  if (!res.ok) {
    throw new Error("Request failed with status " + res.status);
  }
  return await res.json();
}

export async function FetchActionmovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=${api_key}`
  );
  if (!res.ok) {
    throw new Error("Request failed with status " + res.status);
  }
  return await res.json();
}

export async function FetchDocumentries() {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?with_genres=99&api_key=${api_key}`
  );
  if (!res.ok) {
    throw new Error("Request failed with status " + res.status);
  }
  return await res.json();
}

export async function FetchBollywoodMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?with_original_language=hi&api_key=${api_key}`
  );
  if (!res.ok) {
    throw new Error("Request failed with status " + res.status);
  }
  return await res.json();
}

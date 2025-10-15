export async function fetchMovies(query?: string) {
  let url = `/api`;
  if (query) url += query;

  const response = await fetch(url);
  const responseJson = await response.json();
  if (responseJson.Search.length === 0) return;
  // const moviesTyped = typeResponse(responseJson?.Search ?? responseJson);
  return responseJson?.Search ?? responseJson;
}

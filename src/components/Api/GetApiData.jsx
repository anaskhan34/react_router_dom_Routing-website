export const getApiData = async () => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`,
    );
    const fullData = await response.json();
    const data = fullData.Search;
    return data;
  } catch (error) {
    console.log(error);
  }
};

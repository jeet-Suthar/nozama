const BASE_URL = "https://api.escuelajs.co/api/v1/";


export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}products`);
  const data = await response.json();
  return data;
}
export const getProductsByCategory = async (id) => {

  const response = await fetch(`${BASE_URL}products/?categoryId=${encodeURIComponent(id)}`);
  const data = await response.json();
  // console.log("This is backedn dta",data)
  return data;
}

export const getSearchedItems = async (searchQuery) => {

  // console.log("searchQuery pichle side pe : ", searchQuery);
  const response = await fetch(`${BASE_URL}products/?title=${encodeURIComponent(searchQuery)}`);
  const data = await response.json();
  return data;
}
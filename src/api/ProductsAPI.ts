export async function getProducts(skipCount: number) {
  const url = `https://dummyjson.com/products?limit=20&skip=${skipCount * 20}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}
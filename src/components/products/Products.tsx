import React, { useEffect, useState } from "react";

import { getProducts } from '../../api/ProductsAPI';

export const Products: React.FC = () => {
  const [products, setProducts] = useState([]);

  async function fetchData() {
    const productsData = await getProducts(0);
    setProducts(productsData)
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(products);
  

  return (
    <></>
  );
}
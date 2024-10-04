import React, { useEffect, useState } from "react";

import { getProducts } from "../../api/ProductsAPI";
import { Product } from "../product/Product";
import { Product as ProductType } from "../../types/Product";
import "./Products.css";

export const Products: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [currentSkipCount, setCurrentSkipCount] = useState<number>(0);
  const [products, setProducts] = useState<ProductType[] | null>(null);

  const handleIncrementSkipCount = () => {
    setCurrentSkipCount((prevSkipCount) => prevSkipCount + 1);
  };

  async function fetchData() {
    try {
      setIsLoading(true);

      const productsData = await getProducts(currentSkipCount);
      const mergedProducts =
        products && products.length
          ? [...products, ...productsData.products]
          : productsData.products;

      setProducts(mergedProducts);
      setIsLoading(false);
    } catch (error) {
      setErrorMessage(`An error occured when loading products: ${error}`);
    }
  }

  useEffect(() => {
    fetchData();
  }, [currentSkipCount]);

  if (errorMessage) {
    return <div className="error">{errorMessage}</div>;
  }

  return (
    <section>
      <div className="products">
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        {isLoading && <div className="loading">Products loading...</div>}
      </div>

      <div className="products-load">
        {!isLoading && (
          <button onClick={handleIncrementSkipCount} className="load-button">
            Load more
          </button>
        )}
      </div>
    </section>
  );
};

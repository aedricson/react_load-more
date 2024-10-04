import React from "react";
import { Product as ProductType } from "../../types/Product";

import './Product.css';

type Props = {
  product: ProductType;
};

export const Product: React.FC<Props> = ({ product }) => {
  return (
    <div className="product">
      <img
        className="image"
        src={product.thumbnail}
        alt={product.title}
      />
      <h3 className="title">{product.title}</h3>
      <div className="description">{product.description}</div>
    </div>
  );
};

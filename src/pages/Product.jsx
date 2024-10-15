import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductView from "../component/product/ProductView";
import products from "../utils/data"; // Import the local data file

import "./Product.css";

function Product() {
  const [productData, setProductData] = useState(null); // Set the initial state to null
  const { productId } = useParams();

  useEffect(() => {
    function getData() {
      // Find the product in the local data array based on the productId
      const data = products.find((product) => product.id === parseInt(productId, 10));
      setProductData(data);
    }
    getData();
  }, [productId]);

  return (
    <main className="product-view_main container">
      {productData ? (
        <ProductView productData={productData} />
      ) : (
        <p>Product not found</p>
      )}
    </main>
  );
}

export default Product;

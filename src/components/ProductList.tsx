import React, { useState, useEffect } from "react";
import { useStore } from "../store";

const ProductList: React.FC = () => {
  const { products, fetchProducts, addSelectedProduct } = useStore();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-2 mb-4 border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="space-y-2">
        {filteredProducts.map((product) => (
          <li
            key={product.id}
            className="cursor-pointer hover:bg-gray-100 p-2 rounded"
            onClick={() => addSelectedProduct(product)}
          >
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

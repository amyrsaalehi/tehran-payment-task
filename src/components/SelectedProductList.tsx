import React, { useState } from "react";
import { useStore } from "../store";

const SelectedProductList: React.FC = () => {
  const { selectedProducts, removeSelectedProduct } = useStore();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSelectedProducts = selectedProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Selected Products</h2>
      <input
        type="text"
        placeholder="Search selected products..."
        className="w-full p-2 mb-4 border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="space-y-2">
        {filteredSelectedProducts.map((product) => (
          <li
            key={product.id}
            className="cursor-pointer hover:bg-gray-100 p-2 rounded"
            onClick={() => removeSelectedProduct(product.id)}
          >
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedProductList;

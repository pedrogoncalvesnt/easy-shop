"use client";

import { type MouseEvent, useState } from "react";

export default function Cart() {
  const [products, setProducts] = useState<
    { name: string; quantity: number }[]
  >([]);
  const [product, setProduct] = useState<string>();

  const handleAddProduct = () => {
    if (!product) return;
    const findProduct = products.find((it) => it.name === product);

    if (findProduct) {
      setProducts((old) =>
        old.map((it) =>
          it.name === product ? { ...it, quantity: it.quantity + 1 } : it
        )
      );
    } else {
      setProducts((old) => [...old, { name: product, quantity: 1 }]);
    }
    setProduct("");
  };

  return (
    <div>
      <h1 className="">Cart</h1>
      
      <input
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        type="text"
      />

      <button type="button" onClick={handleAddProduct}>
        Salvar
      </button>

      <ul>
        {products.map((product, index) => (
          <li key={product.name}>
            {product.name} {product.quantity}x
          </li>
        ))}
      </ul>
    </div>
  );
}

import ProductsList from "./ProductsList";

async function getProducts() {
  const res = await fetch("http://localhost:3001/products"); // Substitua pelo endpoint real
  if (!res.ok) {
    throw new Error("Falha ao buscar os produtos");
  }
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return <ProductsList products={products} />; // Passa os produtos como props para o Client Component
}
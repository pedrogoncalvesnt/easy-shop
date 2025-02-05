
"use client"; // Client Component

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  img_path: string;
  value: number;
  quantity: number;
}

export default function ProductsList({ products }: { products: Product[] }) {
  const { addToCart } = useCart();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Evita erro no SSR

  const handleBuyNow = (product: Product) => {
    addToCart({ ...product, quantity: 1 });
    router.push("/cart");
  }

  return (
    <div className="p-5 flex flex-wrap justify-center gap-8">
        {products.map((product: Product) => (
        <Card key={product.id} className="h-96 w-96">
            <CardHeader>
                <CardTitle className="text-lg">{product.title}</CardTitle>
                <CardDescription className="text-sm">{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center pb-0">
                <img className="h-52 w-56" src={product.img_path} alt={product.title} />
                <p className="font-bold text-primary-blue mt-1">R${product.value.toFixed(2)}</p>
            </CardContent>
            <CardFooter className="flex space-x-2 justify-center">
                <Button className="bg-green-50" variant="outline" onClick={() => handleBuyNow(product)}>Comprar</Button>
                <Button className="bg-slate-50" variant="outline" onClick={() => addToCart(product)}>+</Button>
            </CardFooter>
        </Card>
        ))}
    </div>
  );
}


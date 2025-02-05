// "use client";

// import { useCart } from "@/context/CartContext";

// export default function Cart() {
//   const { cart } = useCart();
  
//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold mb-4">Carrinho</h1>
//       {cart.length === 0 ? (
//         <p>Seu carrinho está vazio.</p>
//       ) : (
//         <ul className="space-y-4">
//           {cart.map((product) => (
//             <li key={product.id} className="border p-4 rounded-md">
//               <p className="text-lg font-semibold">{product.title}</p>
//               <p className="text-gray-600">R$ {product.value.toFixed(2)}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

"use client";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return <p>Seu carrinho está vazio.</p>;
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Carrinho</h1>

      {cart.map((item) => (
        <div key={item.id} className="flex gap-4 p-4 border rounded-md">
          <img src={item.img_path} alt={item.title} className="h-20 w-20" />
          <div>
            <h2 className="text-lg">{item.title}</h2>
            <p className="text-gray-600">R${item.value.toFixed(2)}</p>
          </div>
        </div>
      ))}

      {/* Formulário de Checkout */}
      <div className="mt-5">
        <h2 className="text-xl font-semibold">Finalizar Compra</h2>
        <form className="flex flex-col gap-3">
          <input type="text" placeholder="Nome" className="border p-2 rounded-md" required />
          <input type="email" placeholder="E-mail" className="border p-2 rounded-md" required />
          <input type="text" placeholder="Endereço" className="border p-2 rounded-md" required />
          <Button className="bg-green-500 text-white">Finalizar Pedido</Button>
        </form>
      </div>
    </div>
  );
}


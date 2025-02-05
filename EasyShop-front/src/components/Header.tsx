"use client"

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function () {
    const router = useRouter();
    const handleHeaderNavigate = (option: string) => {
        option.toLowerCase() === "home" ? router.push("/") : 
            option.toLowerCase() === "products" ? router.push("/products") :
                option.toLowerCase() === "cart" ? router.push("/cart") : router.push("/logout")
    }

    return (
        <header className="p-5 flex justify-between border border-b-gray-200">
            <h1 className="font-bold text-3xl">Easy Shop</h1>
            <nav className="flex justify-end space-x-4">
                <Button variant="outline" onClick={() => handleHeaderNavigate("home")}>Home</Button>
                <Button variant="outline" onClick={() => handleHeaderNavigate("products")}>Produtos</Button>
                <Button variant="outline"  onClick={() => handleHeaderNavigate("cart")}>
                    <img className="w-full h-full" src="images/shopping-cart.png" alt="Smart cart icons created by Freepik - Flaticon" />
                </Button>
                <Button variant="destructive" onClick={() => handleHeaderNavigate("logout")}>Sair</Button>
            </nav>
        </header>
    )
}


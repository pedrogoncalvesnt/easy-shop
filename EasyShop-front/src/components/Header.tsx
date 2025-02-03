import { Button } from "./ui/button";

export default function () {
    return (
        <header>
            <nav className="p-5 flex justify-end space-x-4">
                <Button variant="outline">Home</Button>
                <Button variant="outline">Produtos</Button>
                <Button variant="outline">
                    <img className="w-full h-full" src="images/shopping-cart.png" alt="Smart cart icons created by Freepik - Flaticon" />
                </Button>
                <Button variant="destructive">Sair</Button>
            </nav>
        </header>
    )
}


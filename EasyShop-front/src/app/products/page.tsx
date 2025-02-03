import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


export default function Product() {
    return (
        <div className="p-5 flex justify-start space-x-4">
            <Card className="h-96 w-96">
                <CardHeader>
                    <CardTitle className="text-lg">Camisa Flamengo</CardTitle>
                    <CardDescription className="text-sm">Camisa Flamengo 24/25</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                    <img className="h-52 w-56" src="/images/camisa-flamengo.jpg" alt="Camisa flamengo" />
                </CardContent>
                <CardFooter className="flex space-x-2 justify-center">
                    <Button className="bg-green-50" variant="outline">Comprar</Button>
                    <Button className="bg-slate-50" variant="outline">+</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

import { Button } from "../../components/ui/button";
import { ArrowRight } from "lucide-react"
import CounterNumber from "./components/CounterNumber";

export default function Main() { 
    return (
        <main className="flex-1 p-4 w-screen h-[100%] bg-blue-400">
            <div className="container max-w-7xl mx-auto grid grid-cols-2 gap-8">
                <div >
                    <h1 className="text-5xl font-semibold">Building excellence One project at a time</h1>
                    <h2>Elite Builders, delivers top tier commercial construction services across Miami, turning blueprints into reality with precision and expertise.</h2>
                    <div>
                        <Button variant="outline" size="sm">
                            Contacta-nos
                            <ArrowRight/>
                        </Button>
                        <Button variant="link" className="underline">Saber mais</Button>
                    </div>
                    <CounterNumber/>
                </div>

                <div className="w-md bg-red-500 shadow rounded-lg p-6">

                </div>
            </div>
        </main>
    )
}
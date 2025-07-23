import { Button } from "../../components/ui/button"

export default function Cta() {
  return (
    <section className="w-full items-center justify-center px-6">
      <div className="text-white  ">
          <div className="bg-gray-900 rounded-lg px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold">Get started with MynaUI today!</h1>
              <p className="text-sm text-gray-300 mt-1">Tailored solutions that grow your business online.</p>
            </div>
            <div className="flex items-center">
              <Button variant="default" className="bg-white text-gray-900 hover:bg-gray-100 font-medium px-6 py-2">
                Juntar-se a nós
              </Button>
            </div>
          </div>
      </div>
    </section>
  )
}

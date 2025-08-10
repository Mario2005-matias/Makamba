import { Button } from "../../components/ui/button";
import { ArrowRight } from "lucide-react";
export default function Visao(){

    return(
        <div className="mb-10 px-6 py-4 flex justify-center flex-wrap items-center text-sm text-gray-300">
            <div className="flex flex-col items-start w-100 px-6 py-4 text-black dark:text-white ">
                <h1 className="py-5 text-4xl">Makamba <span className="text-[#FF6700] ">Tec</span></h1>
                <p className="text-lg">
                    Somos a Makamba <span className="text-[#FF6700]">Tec</span>, uma agência que une potência em tecnologia
                    com essência da cultura africana criando soluções de matketing inovadoras,
                    autênticas e conectadas às raizes. <br />
                    <span className="text-[#FF6700]">Atuamos</span> para transformar ideias em experiências marcantes respeitando as identidades culturais e promovendo
                    o desenvolvimento digital com alma africana
                </p>
                 <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 mt-4 bg-black text-white hover:bg-[#FF6700] cursor-pointer dark:hover:bg-[#FF6700] hover:text-white hover:scale-110 transition-transform duration-300"
          >
            Bora embarcar!
             <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center w-190 ">
                <div className=" p-5 m-10 text-lg text-[#FF6700] flex flex-col items-center px-6 py-4 ">
                    <h1 className="bg-[#FF6700] text-white px-22 md:px-15">Nosso Obejctivo</h1>
                    <p className="text-sm text-black text-justify dark:text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis obcaecati a vero minima aperiam esse, tempora labore possimus quae. Consequuntur harum excepturi blanditiis nobis. Facere sapiente nam hic eum optio!</p>
                </div>
                <div className=" p-5 m-10 text-lg text-[#FF6700] flex flex-col items-center px-6 py-4 ">
                   <h1 className="bg-[#FF6700] text-white px-22 md:px-15">Nosso Obejctivo</h1>
                    <p className="text-sm text-black text-justify dark:text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis obcaecati a vero minima aperiam esse, tempora labore possimus quae. Consequuntur harum excepturi blanditiis nobis. Facere sapiente nam hic eum optio!</p>
                </div>
                 <div className=" p-5 m-10 text-lg text-[#FF6700] flex flex-col items-center px-6 py-4 ">
                    <h1 className="bg-[#FF6700] text-white px-22 md:px-15">Nosso Obejctivo</h1>
                    <p className="text-sm text-black text-justify dark:text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis obcaecati a vero minima aperiam esse, tempora labore possimus quae. Consequuntur harum excepturi blanditiis nobis. Facere sapiente nam hic eum optio!</p>
                </div>
                 <div className=" p-5 m-10 text-lg text-[#FF6700] flex flex-col items-center px-6 py-4 ">
                   <h1 className="bg-[#FF6700] text-white px-22 md:px-15">Nosso Obejctivo</h1>
                    <p className="text-sm text-black text-justify dark:text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis obcaecati a vero minima aperiam esse, tempora labore possimus quae. Consequuntur harum excepturi blanditiis nobis. Facere sapiente nam hic eum optio!</p>
                </div>
            </div>
        </div>
    );
}
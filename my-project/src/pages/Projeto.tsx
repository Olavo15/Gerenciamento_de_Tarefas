import { Plus, UsersThree, DotsThreeVertical } from "@phosphor-icons/react";

export default function Projeto() {
    return (
        <>
            <div className="flex justify-between px-2 py-10">
                <h1 className="text-3xl">Projeto</h1>
                <button type="submit" className="bg-slate-200 px-1 py-1 rounded-2xl text-sm flex items-center border border-black hover:bg-blue-600">
                    Adicionar projeto
                    <Plus size={24} className="ml-2" />
                </button>
            </div>

            <div className="flex mt-4">
                <div className="relative h-52 w-80 border border-gray-400 rounded-md overflow-hidden mr-4">
                    <img src="https://pm1.aminoapps.com/6315/88d18edf1c9f7dfaec356b048d7db1dcdb71dfb9_hq.jpg" alt="Imagem" className="w-full h-24 object-cover" />
                    <div className="absolute top-2 right-2">
                        <div className="bg-blue-400 rounded-full bg-opacity-20 p-2">
                            <DotsThreeVertical size={24} />
                        </div>
                    </div>

                    <div className="p-2 flex flex-col">
                        <div className="mb-4 flex items-center">
                            <p className="text-base text-gray-700 mr-2">Nome do projeto</p>
                            <UsersThree size={24} />
                        </div>

                        <p className="text-base text-gray-700 mb-2">Descrição do projeto..........</p>
                        <div className="text-right">
                             <p className="text-base text-gray-700">27/04/2024</p>
                        </div>
                    </div>
                </div>

                <div className="relative h-52 w-80 border border-gray-400 rounded-md overflow-hidden mr-4">
                    <img src="https://img.goodfon.com/wallpaper/nbig/4/ad/one-piece-luffy-shanks.webp" alt="Imagem" className="w-full h-24 object-cover" />
                    <div className="absolute top-2 right-2">
                        <div className="bg-blue-400 rounded-full bg-opacity-20 p-2">
                            <DotsThreeVertical size={24} />
                        </div>
                    </div>
            
                    <div className="p-2 flex flex-col">
                        <div className="mb-4 flex items-center">
                            <p className="text-base text-gray-700 mr-2">Nome do projeto</p>
                            <UsersThree size={24} />
                        </div>
            
                        <p className="text-base text-gray-700 mb-2">Descrição do projeto..........</p>
                        <div className="text-right">
                             <p className="text-base text-gray-700">27/04/2024</p>
                        </div>
                    </div>
                </div>

                <div className="relative h-52 w-80 border border-gray-400 rounded-md overflow-hidden">
                    <img src="https://i.pinimg.com/564x/f6/80/dd/f680dd7e5ddff60c908c5e963e70589e.jpg" alt="Imagem" className="w-full h-24 object-cover" />
                    <div className="absolute top-2 right-2">
                        <div className="bg-blue-400 rounded-full bg-opacity-20 p-2">
                            <DotsThreeVertical size={24} />
                        </div>
                    </div>
            
                    <div className="p-2 flex flex-col">
                        <div className="mb-4 flex items-center">
                            <p className="text-base text-gray-700 mr-2">Nome do projeto</p>
                            <UsersThree size={24} />
                        </div>
            
                        <p className="text-base text-gray-700 mb-2">Descrição do projeto..........</p>
                        <div className="text-right">
                             <p className="text-base text-gray-700">27/04/2024</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}

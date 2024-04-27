import { CrownSimple, DotsThree, FlagPennant, UsersThree } from "@phosphor-icons/react";

export default function Equipes(){
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">
                Equipes
            </h1>
            <div className="flex w-full justify-between items-center">
                <nav>
                    <ul className="flex gap-2">
                        <li className="px-2 border-b border-zinc-500 hover:border-zinc-400 delay-200">
                            <button>
                                Todas
                            </button>
                        </li>
                        <li className="px-2 border-b hover:border-zinc-500 delay-200">   
                            <button>
                                Minhas
                            </button>
                        </li>
                        <li className="px-2 border-b hover:border-zinc-500 delay-200">
                            <button>
                                Participando
                            </button>
                        </li>
                    </ul>
                </nav>
                <button className="px-3 py-1 border border-zinc-500 rounded-md">
                    Criar Equipe
                </button>
            </div>
            <div className="flex gap-3 flex-wrap">
                <div className="h-fit group relative w-80 border border-zinc-600 rounded-md text-pretty overflow-hidden">
                    <button className="absolute text-black p-1 hidden delay-300 duration-400 group-hover:block right-2 top-2 bg-white bg-opacity-50 rounded-full">
                        <DotsThree size={25}/>
                    </button>
                    <figure className="md:shrink-0">
                        <img  src="https://i.pinimg.com/originals/bb/5e/47/bb5e47498772c0628f6dc7f26a6af28c.gif" alt="" />
                    </figure>
                    <div className="p-2">
                        <ul>
                            <li className="flex items-center gap-1">
                                <FlagPennant size={20} />
                                <h1 className="font-semibold">
                                    Equipe: Torcida jovem
                                </h1>
                            </li>
                            <li className="flex items-center gap-1">
                                <CrownSimple size={20} />
                                <p>
                                    Lider: Aristóteles Alves
                                </p>
                            </li>
                            <li className="flex items-center gap-1">
                                <UsersThree size={20} />
                                <p>
                                    Membros: 9
                                </p>
                            </li>
                            <li>
                                <button className="w-full text-center py-1 rounded-md bg-blue-400">
                                    Adicionar Mebro
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                
                <div className="h-fit group relative w-80 border border-zinc-600 rounded-md text-pretty overflow-hidden">
                    <button className="absolute text-black p-1 hidden delay-300 duration-400 group-hover:block right-2 top-2 bg-white bg-opacity-50 rounded-full">
                        <DotsThree size={25}/>
                    </button>
                    <figure className="md:shrink-0">
                        <img  src="https://i.pinimg.com/originals/fc/21/16/fc2116fb21de12a62d4b36c31bbb1e6f.gif" alt="" />
                    </figure>
                    <div className="p-2">
                        <ul>
                            <li className="flex items-center gap-1">
                                <FlagPennant size={20} />
                                <h1 className="font-semibold">
                                    Equipe: Anonimos
                                </h1>
                            </li>
                            <li className="flex items-center gap-1">
                                <CrownSimple size={20} />
                                <p>
                                    Lider: Pierre
                                </p>
                            </li>
                            <li className="flex items-center gap-1">
                                <UsersThree size={20} />
                                <p>
                                    Membros: 2
                                </p>
                            </li>
                            <li>
                                <button className="w-full text-center py-1 rounded-md bg-red-400">
                                    Sair Da Equipe
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                
            </div>
        </div>
    )
}
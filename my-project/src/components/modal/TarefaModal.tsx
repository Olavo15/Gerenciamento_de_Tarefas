import { MagnifyingGlass, Plus, Trash, X } from "@phosphor-icons/react";
import { useState } from "react";

interface Iprops{
    closeModal: () => void;
}


export default function TarefaModal(props: Iprops){

    const [adicionarUsuario, setAdicionarUsuario] = useState(false)

    return (
        <div className="flex items-center z-50 justify-center w-screen h-screen absolute bg-zinc-800 bg-opacity-25 top-0 left-0 backdrop-blur-sm">
            <div className="px-2 py-5 bg-zinc-100 relative flex flex-col w-fit rounded-lg drop-shadow-md">
                <button onClick={props.closeModal} className="p-2 bg-zinc-50 right-2 top-2 hover:bg-opacity-75 absolute rounded-full drop-shadow-lg">
                    <X />
                </button>
                <div className="flex bg-white p-2 rounded-md">
                    <div className="w-[500px] pr-2">
                        {!adicionarUsuario ? (
                            <>
                                <p className="h-72">
                                <h1>Titulo</h1>
                                    Descrição da tarefa
                                </p>
                            </>
                        ) :(
                            <>
                                <div className="flex gap-1">
                                    <input type="text" className="px-2 py-1 border shadow-md rounded-md bg-white w-full"/>
                                    <div className="p-2 bg-blue-500 w-fit rounded-md shadow-md">
                                        <MagnifyingGlass/>
                                    </div>
                                </div>
                                <div className=" w-full h-72 p-2 flex flex-wrap overflow-auto items-start">

                                    {/* aqui é para renderizar a lista de equipe projeto  */}
                                    <div className="flex gap-2 items-center my-2 w-fit">
                                        <img className="w-10 h-10 rounded-full" src="https://i.pinimg.com/564x/72/c7/a0/72c7a0a131f6ed77bfc7bf203ed47bf8.jpg" alt="" />
                                        <div className="flex flex-col justify-center">
                                            <h3 className="text-sm">
                                                Aristoteles
                                            </h3>
                                            <span className="text-xs -mt-1">
                                                aris@gmail.com
                                            </span>
                                        </div>
                                        {/* Adicionar o membro da equipe tarefa */}
                                        <button>
                                            <Plus/>
                                        </button>
                                    </div>

                                </div>
                            </>
                        )}
                    </div>
                    <div className="w-48 border-l-2 border-zinc-400 px-2 flex flex-col">

                        {/* aqui é para renderizar a lista de equipe tarefa */}
                        <div className="flex-1 h-full overflow-auto">
                            <h1>Responsaveis</h1>
                            <div className="flex gap-2 items-center border-b my-2">
                                <img className="w-10 h-10 rounded-full" src="https://i.pinimg.com/564x/72/c7/a0/72c7a0a131f6ed77bfc7bf203ed47bf8.jpg" alt="" />
                                <div className="flex flex-col justify-center">
                                    <h3 className="text-sm">
                                        Aristoteles
                                    </h3>
                                    <span className="text-xs -mt-1">
                                        aris@gmail.com
                                    </span>
                                </div>

                                {/* tirar o membro da equipe tarefa */}
                                <button>
                                    <Trash/>
                                </button>
                            </div>
                        </div>

                        <button onClick={() => setAdicionarUsuario(!adicionarUsuario)} className="px-2 py-1 border shadow-md rounded-md bg-white">
                            {!adicionarUsuario ? 'Adicionar membro' : 'Cancelar'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
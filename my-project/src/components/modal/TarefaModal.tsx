import { PaperPlaneTilt, Plus, Trash, X } from "@phosphor-icons/react";
import { useState } from "react";

interface IEquipe{
    id: number;
    nome: string;
    email: string;
}

interface Itarefa{
    titulo: string;
    descricao: string;
    equipeProjeto: IEquipe[];
    equipeTarefa?: IEquipe[];
}

interface TarefaModalProps{
    fecharModalFunction: () => void;
    tarefa:Itarefa;
}

export default function TarefaModal(props: TarefaModalProps){

    const [pagListagemEquipeProjeto, setPagListagemEquipeProjeto] = useState(false)

    return (
        <div className="w-screen h-screen bg-black bg-opacity-50 backdrop-blur-sm absolute left-0 top-0 z-40 flex items-center justify-center">
            <div className="w-[70%] h-[60%] bg-white rounded-md relative">
            <button onClick={props.fecharModalFunction} className="absolute -right-14 rounded-full p-2 bg-zinc-300">
                <X size={25}/>
            </button>
            <div className="flex w-full h-full">
                <div className="w-full p-2 flex flex-col">
                    {!pagListagemEquipeProjeto ? (
                        <div className="flex h-full flex-col w-full">
                            <div className="flex-1">
                                <h1>{props.tarefa.titulo}</h1>
                                <p>{props.tarefa.descricao}</p>
                            </div>
                            <div className="bg-zinc-300 p-2 w-full flex gap-1 rounded-md">
                                <input className="rounded-md flex-1 px-2" type="text" name="" id="" />
                                <button className=" p-2 bg-white rounded-md">
                                    <PaperPlaneTilt/>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex-1 flex flex-col">
                            <div className="flex-1 h-full">
                                <h1 className="w-full text-center font-semibold py-2">
                                    Adicionar membros a tarefa
                                </h1>
                                <div>
                                    {props.tarefa.equipeProjeto.map((user) => {
                                        return (
                                            <div className="flex items-center gap-2 justify-around">
                                                <div className="flex items-center gap-2">
                                                    <figure>
                                                        <img className="w-10 h-10 rounded-full" src="https://th.bing.com/th/id/R.960d9c1c928cebe61055dc3b0bcab8a3?rik=wK3hyW6eNrhIjQ&pid=ImgRaw&r=0" alt="" />
                                                    </figure>
                                                    <div className="flex flex-col">
                                                       <h3>
                                                            {user.nome}
                                                        </h3>
                                                        <span className="-mt-2 text-sm text-zinc-500">{user.email}</span>
                                                    </div>    
                                                </div>
                                                <div>
                                                    <button className="px-2 py-1 rounded-md bg-zinc-200">
                                                       Adicionar
                                                    </button>
                                                </div>
                                            </div>
                                            )
                                        })}
                                        
                                </div>
                            </div>
                            <div className="bg-zinc-300 p-2 w-full flex gap-1 rounded-md">
                                <input className="rounded-md flex-1 px-2 py-1" type="text" name="" id="" />
                            </div>
                        </div>
                    )}
                    
                </div>
                <div className="w-[40%] h-full bg-zinc-200 border-l p-2 rounded-r-md">
                    <div className="flex justify-between items-center">
                        <h1>
                            Participantes
                        </h1>
                        <button onClick={() => setPagListagemEquipeProjeto(!pagListagemEquipeProjeto)}>
                            {!pagListagemEquipeProjeto ? <Plus/> : <X/>}
                        </button>
                    </div>

                    <div className="flex flex-col items-start gap-1 overflow-auto h-full pb-10">
                        <div className="flex gap-2 bg-zinc-200 p-2 w-fit rounded-md">
                            <figure>
                                <img className="w-11 h-11 rounded-full" src="https://i.pinimg.com/564x/52/73/21/5273218998372b8652178d76163fe4d5.jpg" alt="" />
                            </figure>
                            <div className="flex flex-col">
                                <div className="flex gap-1 items-center">
                                    <h1 className="font-semibold dont-lg">Aristoteles</h1>
                                </div>
                                <span className="text-sm text-zinc-600 -mt-1">arystotelys@gmail.com</span>
                            </div>  
                            <button>
                                <Trash/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}
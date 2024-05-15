import { Plus } from "@phosphor-icons/react";
import { useParams } from "react-router-dom";

export function Projeto(){
    const arr = [];
    const { id } = useParams()
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">
                Projeto
            </h1>
            <ul className="flex gap-3">
                <li>
                    Tabelas
                </li>
                <li>
                    Equipe
                </li>
            </ul>
            <div>
                <button className="px-4 py-2 rounded-md bg-zinc-100">
                    Criar tabela
                </button>
            </div>
            <div className="h-[1px] w-full border">

            </div>
            <div className="flex items-center gap-2 justify-between px-4 py-2 rounded-md bg-zinc-200 w-52">
                <h1>
                    A fazer
                </h1>
                <button>
                    <Plus/>
                </button>
            </div>
        </div>
    )
} 
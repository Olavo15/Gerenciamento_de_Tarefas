import { X } from "@phosphor-icons/react";
import { useState } from "react";

interface Iprops{
    closeModal: () => void;
}

interface IFormTarefa{
    titulo: string
    descricao: string
    id_projeto: number
    id_tabela_tarefa: number
}

export function FormularioTarefaModal(props: Iprops){

    const [formTarefa, setFormTarefa] = useState<IFormTarefa>({
        titulo: '',
        descricao: '',
        id_projeto: 0,
        id_tabela_tarefa: 0,
    })
    const [listaMembros, setListaMembros] = useState<number[]>([])

    return (
        <div className="flex items-center justify-center w-screen h-screen absolute bg-zinc-800 bg-opacity-25 top-0 left-0 backdrop-blur-sm">
            <div className="px-10 py-5 bg-zinc-100 relative flex flex-col w-fit rounded-lg drop-shadow-md">
              <button onClick={props.closeModal} className="p-2 bg-zinc-50 right-2 top-2 hover:bg-opacity-75 absolute rounded-full drop-shadow-lg">
                <X/>
              </button>
              <label className="font-semibold mb-1">Titulo da tarefa</label>
              <input 
                type="text" 
                className="w-96 rounded-md border-zinc-200 border px-2 py-1"
                value={formTarefa.titulo}
                onChange={(e) => setFormTarefa({...formTarefa, titulo: e.target.value})}
              />
              <label className="font-semibold mb-1 mt-1">Descrição do projeto</label>
              <textarea 
                className="w-96 h-36 rounded-md border-zinc-200 border px-2 py-1 resize-none"
                value={formTarefa.descricao}
                onChange={(e) => setFormTarefa({...formTarefa, descricao: e.target.value})}
              />
              <div className="w-full h-fit p-2 flex justify-end mt-4 gap-2">
                <button onClick={props.closeModal} className="px-2 py-1 bg-red-500 rounded-md">Cancelar</button>
                <button className="px-2 py-1 bg-green-500 rounded-md">Continuar</button>
              </div>
            </div>
        </div>
    )
}
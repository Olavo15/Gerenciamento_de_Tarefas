import { X } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";
import api from "../../service/api";

interface IModalInput{
    fechar: () => void;
    projeto_id: string;
}

export default function ModalInput(props:IModalInput){

    const [tituloTabela, setTitutloTabela] = useState('');
    const [corSelecionado, setCorSelecionada] = useState('');

    const cores = ['bg-red-300','bg-green-300','bg-blue-300','bg-purple-300','bg-yellow-300','bg-orange-300']

    function criarTabela(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(tituloTabela.length > 3){
            api.post('/tabela', {
                titulo: tituloTabela,
                id_projeto: Number(props.projeto_id),
                cor: corSelecionado
            }).catch(response => console.log(response)).catch(error => console.log(error))
            setTitutloTabela('')
            props.fechar()
        }
    }



    return (
        <div className="flex items-center justify-center w-screen h-screen absolute bg-zinc-800 bg-opacity-25 top-0 left-0 backdrop-blur-sm">
            <form onSubmit={criarTabela} className="px-10 py-5 bg-zinc-100 relative flex flex-col w-fit rounded-lg drop-shadow-md">
                <button onClick={props.fechar} className="p-2 bg-zinc-50 right-2 top-2 hover:bg-opacity-75 absolute rounded-full drop-shadow-lg">
                  <X/>
                </button>
                <label className="font-semibold mb-1">Nova tabela</label>
                <input 
                  type="text" 
                  className="w-96 rounded-md border-zinc-200 border px-2 py-1"
                  value={tituloTabela}
                  onChange={(e) => setTitutloTabela(e.target.value)}
                />
                <div className="py-2 flex gap-2 w-full">
                    {cores.map(cor => {
                        return (
                            <div onClick={() => setCorSelecionada(cor)} className={`${corSelecionado == cor ? 'border-2 border-black shadow-md' : null} w-10 h-10 rounded-full ${cor}`}></div>
                        )
                    })}
                </div>
                <div className="w-full h-fit p-2 flex justify-end gap-2">
                  <button onClick={props.fechar} className="px-2 py-1 bg-red-500 rounded-md">Cancelar</button>
                  <button className="px-2 py-1 bg-green-500 rounded-md">Criar tabela</button>
                </div>
            </form>
        </div>
    )
}
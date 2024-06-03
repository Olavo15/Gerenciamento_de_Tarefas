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
    const [error, setError] = useState('');

    const cores = ['bg-red-300 border border-red-400','bg-green-300 border border-green-400','bg-blue-300 border border-blue-400','bg-purple-300 border border-purple-400','bg-yellow-300 border border-yellow-400','bg-orange-300 border border-orange-400']

    function criarTabela(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        if (tituloTabela.length > 3) {
            api.post('/tabela', {
                titulo: tituloTabela,
                id_projeto: Number(props.projeto_id),
                cor: corSelecionado
            })
                .then(() => {
                    setTitutloTabela('');
                    setCorSelecionada('');
                    props.fechar();
                })
                .catch(error => console.log(error));
        } else {
            setError('Adicione um nome a tabela');
        }
    }


    return (
        <div className="flex items-center justify-center w-screen h-screen absolute bg-zinc-800 bg-opacity-25 top-0 left-0 backdrop-blur-sm">
            <form onSubmit={criarTabela} className="px-10 py-5 bg-zinc-100 relative flex flex-col w-fit rounded-lg drop-shadow-md">
                <button onClick={props.fechar} className="p-2 bg-zinc-50 right-2 top-2 hover:bg-opacity-75 absolute rounded-full drop-shadow-lg">
                    <X />
                </button>
                <label className="font-semibold mb-1">Nova tabela</label>
                <input
                    type="text"
                    className={`w-96 rounded-md border px-2 py-1 ${error ? 'border-red-500' : 'border-zinc-200'}`}
                    value={tituloTabela}
                    onChange={(e) => {
                        setTitutloTabela(e.target.value);
                        setError('');
                    }}
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                <div className="py-2 flex gap-2 w-full">
                    {cores.map(cor => (
                        <div key={cor} onClick={() => setCorSelecionada(cor)} className={`${corSelecionado === cor ? 'border-2 border-black shadow-md' : null} w-10 h-10 rounded-full ${cor}`} />
                    ))}
                </div>
                <div className="w-full h-fit p-2 flex justify-end gap-2">
                    <button onClick={props.fechar} className="px-2 py-1 bg-red-500 rounded-md">Cancelar</button>
                    <button type="submit" className="px-2 py-1 bg-green-500 rounded-md">Criar tabela</button>
                </div>
            </form>
        </div>
    );
}
import { X } from "@phosphor-icons/react";
import { useState } from "react";
import api from "../../service/api";

interface Iprops {
    closeModal: () => void;
    id_projeto: number;
    id_tabela_tarefa: number;
}

interface IFormTarefa {
    titulo: string;
    descricao: string;
    id_projeto: number;
    id_tabela_tarefa: number;
}

export function FormularioTarefaModal(props: Iprops) {
    const [formTarefa, setFormTarefa] = useState<IFormTarefa>({
        titulo: '',
        descricao: '',
        id_projeto: props.id_projeto,
        id_tabela_tarefa: props.id_tabela_tarefa,
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    function verificacao() {
        if (formTarefa.titulo.length <= 0) {
            setError('Verifique o título da tarefa!');
            return false;
        }
        if (formTarefa.descricao.length <= 0 || formTarefa.descricao.length > 150) {
            if (formTarefa.descricao.length > 150) {
                setError('Descrição muito grande!');
            } else {
                setError('Verifique a descrição da tarefa!');
            }
            return false; //Tive que adicionar o false pra que ele conseguisse distinguir e mandar a mensagem de erro
        }
        if (formTarefa.id_projeto <= 0) {
            setError('Erro no servidor: ID do projeto');
            return false;
        }
        if (formTarefa.id_tabela_tarefa <= 0) {
            setError('Erro no servidor: ID da tabela de tarefas');
            return false;
        }
        setError('');
        return true;
    }

    function definirSucesso() {
        setSuccess('Tarefa criada com sucesso!');
    }

    async function criarTarefa() {
        if (verificacao()) {
            try {
                const response = await api.post('/tarefa', formTarefa);
                definirSucesso();
                console.log(response);
            } catch (error) {
                setError('Erro ao criar tarefa!');
            }
        }
    }

    return (
        <div className="flex items-center justify-center w-screen h-screen absolute bg-zinc-800 bg-opacity-25 top-0 left-0 backdrop-blur-sm">
            {error.length > 0 && (
                <button onClick={() => setError('')} className="absolute p-3 flex gap-2 items-center rounded-l-md z-50 bg-red-400 shadow-md right-0 top-10">
                    <X />
                    <h1>{error}</h1>
                </button>
            )}
            {success.length > 0 && (
                <button onClick={() => setSuccess('')} className="absolute p-3 flex gap-2 items-center rounded-l-md z-50 bg-green-500 shadow-md right-0 top-20">
                    <X />
                    <h1>{success}</h1>
                </button>
            )}
            <div className="px-10 py-5 bg-zinc-100 relative flex flex-col w-fit rounded-lg drop-shadow-md">
                <button onClick={props.closeModal} className="p-2 bg-zinc-50 right-2 top-2 hover:bg-opacity-75 absolute rounded-full drop-shadow-lg">
                    <X />
                </button>
                <label className="font-semibold mb-1">Título da tarefa</label>
                <input
                    type="text"
                    className="w-96 rounded-md border-zinc-200 border px-2 py-1"
                    value={formTarefa.titulo}
                    onChange={(e) => setFormTarefa({ ...formTarefa, titulo: e.target.value })}
                />
                <label className="font-semibold mb-1 mt-1">Descrição do projeto</label>
                <textarea
                    className="w-96 h-36 rounded-md border-zinc-200 border px-2 py-1 resize-none"
                    value={formTarefa.descricao}
                    onChange={(e) => setFormTarefa({ ...formTarefa, descricao: e.target.value })}
                />
                <div className="w-full h-fit p-2 flex justify-end mt-4 gap-2">
                    <button onClick={props.closeModal} className="px-2 py-1 bg-red-500 rounded-md">Cancelar</button>
                    <button onClick={criarTarefa} className="px-2 py-1 bg-green-500 rounded-md">Continuar</button>
                </div>
            </div>
        </div>
    );
}

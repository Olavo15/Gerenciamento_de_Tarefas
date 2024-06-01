import { useEffect, useState } from 'react';
import { Plus } from "@phosphor-icons/react";
import FormularioProjeto from '../components/modal/FormularioProjeto';
import api from '../service/api';

interface IProjeto {
    id: number;
    titulo: string;
    descricao: string;
    id_usuario: number;
    created_at: string;
}

export default function Projetos() {
    const [abriModalFormularioProjeto, setAbriModalFormularioProjeto] = useState(false);
    const [projetosUsuario, setProjetosUsuario] = useState<IProjeto[]>([]);
    const [projetosParticipando, setProjetosParticipando] = useState<IProjeto[]>([]);


    const localStore = localStorage.getItem('userData')
    const {token} = JSON.parse(localStore ? localStore : '')
    const id: number = token.id_usuario

    function carregarApi() {
        api.get(`/projetos/${id}`)
            .then(response => {
                const { projetosUsuario, projetosParticipando } = response.data.success;
                setProjetosUsuario(projetosUsuario);
                setProjetosParticipando(projetosParticipando);
            })
            .catch(error => console.error(error))
    }

    useEffect(() => {
        carregarApi();
    }, [abriModalFormularioProjeto]);

    return (
        <div>
            {abriModalFormularioProjeto ? <FormularioProjeto closeModal={() => setAbriModalFormularioProjeto(false)} /> : null}

            <div className="flex justify-between items-center">
                <h1 className='pb-2 font-semibold text-2xl'>
                    Lista de projetos
                </h1>
                <button onClick={() => setAbriModalFormularioProjeto(true)} type="submit" className="bg-white rounded-md flex gap-1 px-2 py-1 shadow-md">
                    Adicionar projeto
                    <Plus size={24} className="ml-2" />
                </button>
            </div>
            <div className="flex mt-4 flex-col gap-2">
                <div>
                    <h2 className='pb-2 font-semibold text-xl'>Meus projetos:</h2>
                    <div className='flex gap-2 flex-wrap'>
                        {projetosUsuario.map(projeto => (
                            <a href={`/projeto/${projeto.id}`} key={projeto.id} className='p-2 bg-white rounded-md shadow-md w-72 border-l-[4px] border-purple-400 hover:shadow-xl'>
                                <div className='flex gap-1 items-center justify-between'>
                                    <h3 className='font-bold'>{projeto.titulo}</h3>
                                    <p className='text-sm text-zinc-700 px-1 bg-green-200 rounded-md'>
                                    {
                                        `
                                        ${new Date(projeto.created_at).getDate() < 10 ? '0' + new Date(projeto.created_at).getDate() : new Date(projeto.created_at).getDate()}
                                        /${new Date(projeto.created_at).getMonth() + 1 < 10 ? '0' + (new Date(projeto.created_at).getMonth() + 1) : new Date(projeto.created_at).getMonth() + 1}
                                        /${new Date(projeto.created_at).getFullYear()}
                                        `
                                    }
                                    </p>
                                </div>
                                <p className='text-zinc-700'>
                                    {projeto.descricao}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className='pb-2 font-semibold text-xl'>Projetos que está Participando:</h2>
                    <div className='flex gap-2 flex-wrap'>
                        {projetosParticipando.map(projeto => (
                            <a href={`/projeto/${projeto.id}`} key={projeto.id} className='p-2 bg-white rounded-md shadow-md w-72 border-l-[4px] border-blue-400'>
                                <div className='flex gap-1 items-center justify-between'>
                                    <h3 className='font-bold'>{projeto.titulo}</h3>
                                    <p className='text-sm text-zinc-700 px-1 bg-green-200 rounded-md'>
                                    {
                                        `
                                        ${new Date(projeto.created_at).getDate() < 10 ? '0' + new Date(projeto.created_at).getDate() : new Date(projeto.created_at).getDate()}
                                        /${new Date(projeto.created_at).getMonth() + 1 < 10 ? '0' + (new Date(projeto.created_at).getMonth() + 1) : new Date(projeto.created_at).getMonth() + 1}
                                        /${new Date(projeto.created_at).getFullYear()}
                                        `
                                    }
                                    </p>
                                </div>
                                <p className='text-zinc-700'>
                                    {projeto.descricao}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

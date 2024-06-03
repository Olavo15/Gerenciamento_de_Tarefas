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
    id_projeto?: number;
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

            <div className="flex justify-between items-center mt-12">
                <h1 className='pb-2 font-semibold text-3xl font-worksans text-[#232323]'>
                    Lista de Projetos
                </h1>
                <button onClick={() => setAbriModalFormularioProjeto(true)} type="submit" className=" font-worksans bg-white text-[17px] text-nowrap rounded-lg flex gap-1 px-4 py-[9px] shadow-md hover:border border-[#399ED7] mb-8">
                    Adicionar projeto
                    <Plus size={24} className=" py-[3px] ml-2" />
                </button>
            </div>
            <div className="flex mt-12 flex-col gap-2">
                <div>
                    <h2 className='pb-2 font-semibold text-xl border-b border-gray-400 mt-2 w-full'>Meus projetos:</h2>
                    <div className='flex gap-2 flex-wrap mt-6'>
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
                <div className='mt-12'>
                    <h2 className='pb-2 font-semibold text-xl border-b border-gray-400 mt-2 w-full'>Projetos que está Participando:</h2>
                    <div className='flex gap-2 flex-wrap'>
                        {projetosParticipando.map(projeto => (
                            <a href={`/projeto/${projeto.id_projeto}`} key={projeto.id} className='p-2 bg-white rounded-md shadow-md w-72 border-l-[4px] border-blue-400'>
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

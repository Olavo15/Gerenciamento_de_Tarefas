import { DotsThreeVertical, Pencil, Plus, Rows, Trash, Users, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TarefaModal from "../components/modal/TarefaModal";
import ModalInput from "../components/modal/ModelInput";
import AdicionarUsuario from "../components/modal/AdicionarUsuario";
import api from "../service/api";
import { FormularioTarefaModal } from "../components/modal/FormularioTarefaModal";


interface Imembros {
    id: number
    nome: string
    email: string
    url_perfil_img: string
}

interface ITarefas {
    id: number
    titulo: string
    descricao: string
    equipe_tarefa: Imembros[]
}

interface ITabelaTarefa {
    id: number
    titulo: string
    cor: string
    tarefas: ITarefas[]
}

export function Projeto() {
    const { id } = useParams<{ id: string }>();

    const [modalTarefa, setModalTarefa] = useState(false)
    const [modalAdicionarTabela, setModalAdicionarTabela] = useState(false)
    const [modalAdicionarUsuario, setModalAdicionarUsuario] = useState(false)
    const [modalFormularioTarefa, setModalFormularioTarefa] = useState(false)
    const [closeModalConfigTabela, setCloseModalConfigTabela] = useState({
        open: false,
        table_id: 0
    })

    const [tabelasTarefas, setTabelasTarefas] = useState<ITabelaTarefa[]>([])
    const [membros, setMembros] = useState<Imembros[]>([])
    
    const [idTabela, setIdTabela] = useState(0)
    const [pagEquipe, setPagEquipe] = useState(true)
    const [draggedTask, setDraggedTask] = useState<ITarefas | null>(null);
    const [originColumnId, setOriginColumnId] = useState<number | null>(null);


    useEffect(() => {
        api.get(`/tabelas/${id}`).then(response => setTabelasTarefas(response.data.success))
        api.get(`/equipeprojeto/${id}`).then(response => setMembros(response.data.success))
    }, [modalAdicionarUsuario, modalAdicionarTabela, modalAdicionarTabela, modalFormularioTarefa, draggedTask, originColumnId])

    function novaTarefa(id_tabela: number){
        setIdTabela(id_tabela)
        setModalFormularioTarefa(!modalFormularioTarefa)
    }

    function handleDragStart(tarefa: ITarefas, idColunaOrigem: number) {
        setDraggedTask(tarefa);
        setOriginColumnId(idColunaOrigem);
    }

    function handleDrop(destinationColumnId: number) {
        if (draggedTask && originColumnId !== null && destinationColumnId !== null && originColumnId !== destinationColumnId) {
            mudarTarefaColuna(destinationColumnId, draggedTask.id);
        }
        setDraggedTask(null);
        setOriginColumnId(null);

    }

    function handleDragOver(event: React.DragEvent<HTMLDivElement>, idColunaDestino: number) {
        event.preventDefault();
        console.log(idColunaDestino)
    }

    function mudarTarefaColuna(idNovaColuna: number, idTarefa: number) {
        api.post('/tarefa/update', {
            id_tarefa: idTarefa,
            novo_id: idNovaColuna
        },)
    }


    function deletarTabela(id_tabela: number){
        api.delete(`/tabela/${id_tabela}`).then(() => {
            setTabelasTarefas(tabelasTarefas.filter(tabela => tabela.id !== id_tabela));
        }).catch(error => console.log(error));
    }

    return (
        <div className="flex flex-col gap-2 w-full h-full overflow-hidden">
            {
                modalAdicionarTabela ? (
                    <ModalInput fechar={() => setModalAdicionarTabela(!modalAdicionarTabela)} projeto_id={id ? id : ''}/>
                ) : null
            }
            {/* {
                modalTarefa ? <TarefaModal fecharModalFunction={() => setModalTarefa(!modalTarefa)} tarefa={tarefax1} />
                    : null
            } */}
            {
                modalFormularioTarefa ? <FormularioTarefaModal id_projeto={Number(id)} id_tabela_tarefa={idTabela} closeModal={() => setModalFormularioTarefa(!modalFormularioTarefa)} /> 
                    : null
            }
            {
                modalAdicionarUsuario ? <AdicionarUsuario projeto_id={id ? id : ''} closeModal={() => setModalAdicionarUsuario(!modalAdicionarUsuario)} />
                    : null
            }
            <h1 className=" pb-2 font-worksans text-3xl font-semibold mt-8">
                Projeto
            </h1>
            <div className=" mt-4 w-full flex items-center justify-between">
                <ul className="flex gap-3">
                    <li>
                        <button onClick={() => setPagEquipe(true)} className={` font-worksans flex items-center gap-1 ${pagEquipe ? 'font-bold' : null}`}>
                            <Rows weight={pagEquipe ? 'bold' : 'regular'} />
                            <span>Tabelas</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setPagEquipe(false)} className={` ml-4 font-worksans flex items-center gap-2 ${!pagEquipe ? 'font-bold' : null}`}>
                            <Users weight={!pagEquipe ? 'bold' : 'regular'} />
                            <span>Equipe</span>
                        </button>
                    </li>
                </ul>
                <div>
                    {
                        !pagEquipe ? (
                            <button onClick={() => setModalAdicionarUsuario(!modalAdicionarUsuario
                            )} className="px-4 py-2 rounded-md bg-white shadow-md hover:bg-opacity-40 active:bg-opacity-00">
                                Adicionar membro
                            </button>
                        ) : (
                            <button onClick={() => setModalAdicionarTabela(!modalAdicionarTabela
                            )} className=" bg-white font-worksans text-[17px] text-nowrap rounded-lg flex gap-1 px-6 py-[9px] shadow-md hover:border border-[#399ED7] mb-4">
                                Criar tabela
                            </button>
                        )
                    }
                </div>
            </div>
            <div className="h-[1px] w-full border"></div>

            {
                !pagEquipe ? (
                    <div className="flex gap-2 flex-wrap">
                        {membros.map(membro => (
                            <div key={membro.id} className="flex items-center gap-1 bg-zinc-200 px-2 py-1 rounded-md">
                                <img className="w-10 h-10 rounded-full" src={membro.url_perfil_img} alt="" />
                                <div className="flex flex-col">
                                    <div className="flex gap-1 items-center">
                                        <h1 className="font-semibold dont-lg">{membro.nome}</h1>
                                    </div>
                                    <span className="text-sm text-zinc-600 -mt-1">{membro.email}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex-1 flex overflow-x-scroll">


                        <div className="flex gap-4 items-start ">
                        {
                            tabelasTarefas.map((tabela) => {

                                return (
                                    <div key={tabela.id} className="w-60 h-full" onDragOver={(e) => handleDragOver(e, tabela.id)}
                                    onDrop={() => handleDrop(tabela.id)}>

                                        <div className={`px-2 mt-3 py-2 flex gap-5 w-full justify-between ${tabela.cor} rounded-md`}>
                                            {
                                                closeModalConfigTabela.table_id == tabela.id ? (
                                                    <div className="px-2 py-1 shadow-lg bg-white rounded-md flex flex-col absolute left-3 gap-1 w-fit">
                                                        <button className="text-left group flex border-b-2 border-white hover:border-zinc-400 items-center gap-1">
                                                            <div className="group-hover:text-yellow-500">
                                                                <Pencil/>
                                                            </div>
                                                            Editar
                                                        </button>
                                                        <button onClick={() => deletarTabela(tabela.id)} className="text-left group border-b-2 border-white hover:border-zinc-400 flex items-center gap-1">
                                                            <div className="group-hover:text-red-500">
                                                                <Trash/>
                                                            </div>
                                                            Excluir
                                                        </button>
                                                        <button onClick={() => setCloseModalConfigTabela({...closeModalConfigTabela, open: false, table_id: 0})}  className="text-left group border-b-2 border-white hover:border-zinc-400  flex items-center gap-1">
                                                            <div className="group-hover:text-orange-500">
                                                                <X/>
                                                            </div>
                                                            Cancelar
                                                        </button>
                                                    </div>
                                                ) : null
                                            }
                                            
                                            <button onClick={() => setCloseModalConfigTabela({...closeModalConfigTabela, open: true, table_id: tabela.id})} >
                                                <DotsThreeVertical/>
                                            </button>
                                            <h1>
                                                {tabela.titulo}
                                            </h1>
                                            <button onClick={() => novaTarefa(tabela.id)}>
                                                <Plus/>
                                            </button>
                                        </div>
                                        <div className="flex flex-col gap-2 mt-2">
                                            {tabela.tarefas.map((tarefa) => {
                                                return (
                                                    <div key={tarefa.id} className="bg-white p-2 rounded-md shadow-md w-full"
                                                    draggable={true}
                                                    onDragStart={() => handleDragStart(tarefa, tabela.id)}>
                                                        <div className="flex flex-col gap-1">
                                                            <h1 className="font-semibold">{tarefa.titulo}</h1>
                                                            <span className="text-sm text-zinc-600 break-all">{tarefa.descricao}</span>
                                                        </div>
                                                        <div className="flex ml-5 mt-2">
                                                            {tarefa.equipe_tarefa.map((user) => {
                                                                return (
                                                                    <img
                                                                        key={user.id}
                                                                        className={`w-10 h-10 rounded-full shadow-md border-2 border-white -ml-5`}
                                                                        src={user.url_perfil_img}
                                                                        alt=""
                                                                    />
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                )
            }
        </div>
    );
}

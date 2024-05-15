import { DotsThree, PaperPlaneTilt, Plus, Rows, Trash, Users, X } from "@phosphor-icons/react";
import { useState } from "react";
import { useParams } from "react-router-dom";

interface Task {
    titulo: string;
    descricao: string;
    tabela_id: number;
    equipe_tarefa_id: number;
    projeto_id: number;
}

interface Column {
    id: number;
    cor: string;
    titulo: string;
    tarefa: Task[];
}

export function Projeto() {
    const { id } = useParams<{ id: string }>();

    const [pagEquipe, setPagEquipe] = useState(true)
    const [modalAdicionarMembroTarefa, setModalAdicionarMembroTarefa] = useState(false)
    const [tabela, setTabela] = useState<Column[]>([
        {
            id: 1,
            cor: 'bg-red-400',
            titulo: 'a fazer',
            tarefa: [
                {
                    titulo: "lavar carro",
                    descricao: "lavar o carro do seu zé",
                    tabela_id: 1,
                    equipe_tarefa_id: 1,
                    projeto_id: 1
                },
                {
                    titulo: "Compra um 38",
                    descricao: "Passa a noit peteco peteco peteco",
                    tabela_id: 1,
                    equipe_tarefa_id: 1,
                    projeto_id: 1
                }
            ]
        },
        {
            id: 2,
            cor: 'bg-green-400',
            titulo: 'feito',
            tarefa: [
                {
                    titulo: "dormir",
                    descricao: "a mimi",
                    tabela_id: 2,
                    equipe_tarefa_id: 1,
                    projeto_id: 1
                }
            ]
        }
    ]);

    const onDragStart = (event: React.DragEvent<HTMLDivElement>, task: Task, fromColumnId: number) => {
        event.dataTransfer.setData("task", JSON.stringify({ task, fromColumnId }));
    };

    const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const onDrop = (event: React.DragEvent<HTMLDivElement>, toColumnId: number) => {
        const data = event.dataTransfer.getData("task");
        const { task, fromColumnId } = JSON.parse(data) as { task: Task; fromColumnId: number };

        if (fromColumnId === toColumnId) {
            return;
        }

        setTabela((prevTabela) => {
            const newTabela = prevTabela.map((column) => {
                if (column.id === fromColumnId) {
                    return {
                        ...column,
                        tarefa: column.tarefa.filter((t) => t.titulo !== task.titulo)
                    };
                } else if (column.id === toColumnId) {
                    return {
                        ...column,
                        tarefa: [...column.tarefa, task]
                    };
                } else {
                    return column;
                }
            });

            return newTabela;
        });
    };


    return (
        <div className="flex flex-col gap-2 w-full h-full overflow-hidden">
            <div className="w-screen h-screen bg-black bg-opacity-50 backdrop-blur-sm absolute left-0 top-0 z-40 flex items-center justify-center">
                <div className="w-[70%] h-[60%] bg-white rounded-md relative">
                    <button className="absolute -right-14 rounded-full p-2 bg-zinc-300">
                        <X size={25}/>
                    </button>
                    <div className="flex w-full h-full">
                        <div className="w-full p-2 flex flex-col">
                            {!modalAdicionarMembroTarefa ? (
                                <div className="flex-1">
                                    <h1>Tarefa</h1>
                                    <p>Descrição da tarefa</p>
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
                                        <h1>
                                            Adicionar membros a tarefa
                                        </h1>
                                        <div>
                                            <div>
                                                <figure>
                                                    <img className="w-10 h-10" src="" alt="" />
                                                </figure>
                                                <div>
                                                    <h3>
                                                        Aristoteles
                                                    </h3>
                                                    <span>arystotelys@gmail.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-zinc-300 p-2 w-full flex gap-1 rounded-md">
                                        <input className="rounded-md flex-1 px-2 py-1" type="text" name="" id="" />
                                    </div>
                                </div>
                            )}
                            
                        </div>
                        <div className="w-[40%] h-full bg-zinc-200 border-l p-2">
                            <div className="flex justify-between items-center">
                                <h1>
                                    Participantes
                                </h1>
                                <button onClick={() => setModalAdicionarMembroTarefa(!modalAdicionarMembroTarefa)}>
                                    {!modalAdicionarMembroTarefa ? <Plus/> : <X/>}
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
            <h1 className="text-2xl font-semibold">
                Projeto
            </h1>
            <div className="w-full flex items-center justify-between">
                <ul className="flex gap-3">
                    <li>
                        <button onClick={() => setPagEquipe(true)} className={`flex items-center gap-1 ${pagEquipe ? 'font-bold' : null}`}>
                            <Rows weight={pagEquipe ? 'bold' : 'regular'} />
                            <span>Tabelas</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setPagEquipe(false)} className={`flex items-center gap-1 ${!pagEquipe ? 'font-bold' : null}`}>
                            <Users weight={!pagEquipe ? 'bold' : 'regular'}/>
                            <span>Equipe</span>
                        </button>
                    </li>
                </ul>
                <div>
                    <button className="px-4 py-2 rounded-md bg-zinc-100">
                        Criar tabela
                    </button>
                </div>
            </div>
            <div className="h-[1px] w-full border"></div>

            {
                !pagEquipe ? (
                    <div className="flex gap-2 items-center bg-zinc-200 p-2 w-fit rounded-md">
                        <figure>
                            <img className="w-14 h-14 rounded-full" src="https://i.pinimg.com/564x/52/73/21/5273218998372b8652178d76163fe4d5.jpg" alt="" />
                        </figure>
                        <div className="flex flex-col">
                            <div className="flex gap-1 items-center">
                                <h1 className="font-semibold dont-lg">Aristoteles</h1>
                                <span className="px-2 rounded-md bg-purple-500 text-sm w-fit">
                                    Front-end
                                </span>
                            </div>
                            <span className="text-sm text-zinc-600 -mt-1">arystotelys@gmail.com</span>
                        </div>
                    </div>
                ):(
                    <div className="flex-1 flex overflow-x-scroll">
                        <div className="flex gap-1 items-start ">
                            {tabela.map((item) => (
                                <div 
                                    key={item.id} 
                                    className="flex flex-col w-60 gap-1 h-full"
                                    onDragOver={onDragOver}
                                    onDrop={(e) => onDrop(e, item.id)}
                                >
                                    <div className={`flex gap-1 items-center px-2 rounded-md py-1 justify-between ${item.cor}`}>
                                        <h1>{item.titulo}</h1>
                                        <button>
                                            <Plus />
                                        </button>
                                    </div>
                                    {item.tarefa.map((task, index) => (
                                        <button 
                                            key={index}
                                            className="w-full text-left bg-zinc-300 rounded-md p-2 text-wrap relative"
                                            draggable
                                            onDragStart={(e) => onDragStart(e, task, item.id)}
                                        >
                                            <button className="right-2 top-2 absolute">
                                                <DotsThree />
                                            </button>
                                            <h2 className="font-bold">{task.titulo}</h2>
                                            <p className="text-sm">{task.descricao}</p>
                                            <div>
                                                <figure className="flex items-center mt-3">
                                                    <img className="w-8 h-8 rounded-full border-2 border-zinc-300" src="https://i.pinimg.com/564x/52/73/21/5273218998372b8652178d76163fe4d5.jpg" alt="" />
                                                    <img className="w-8 h-8 rounded-full -ml-3 border-2 border-zinc-300" src="https://i.pinimg.com/736x/3f/cd/17/3fcd1785622d5eea86a236d9ad795fba.jpg" alt="" />
                                                    <img className="w-8 h-8 rounded-full -ml-3 border-2 border-zinc-300" src="https://i.pinimg.com/736x/7b/25/d8/7b25d8d6f4d97eddef8a952564cb7e09.jpg" alt="" />
                                                    <img className="w-8 h-8 rounded-full -ml-3 border-2 border-zinc-300" src="https://i.pinimg.com/736x/b1/37/37/b13737b7db3d2112f4bb845412416ab8.jpg" alt="" />
                                                </figure>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }
        </div>
    );
}

import { X } from "@phosphor-icons/react";

interface IModalInput{
    fechar: () => void;
    funcao:() => void;
    titulo: string;

}

export default function ModalInput(props:IModalInput){
    return (
        <div className="w-screen h-screen bg-black bg-opacity-50 backdrop-blur-sm absolute left-0 top-0 z-40 flex items-center justify-center">
            <div className="w-fit h-fit p-10 bg-white rounded-md relative flex flex-col">
                <button onClick={props.fechar} className="absolute right-3 top-3">
                    <X size={25}/>
                </button>
                <h1>{props.titulo}</h1>
                <div className="flex gap-1 items-center">
                    <input className="w-80 border-2 border-zinc-500 p-2 rounded-md" type="text" placeholder="Nome da tabela..."/>
                    <button onClick={props.funcao} className=" h-fit bg-green-600 p-2 rounded-md border-2 border-green-600">
                        Criar
                    </button>
                </div>
            </div>
        </div>
    )
}
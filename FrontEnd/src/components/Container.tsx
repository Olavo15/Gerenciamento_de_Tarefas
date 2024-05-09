import { ReactNode } from "react";

interface IContainer{
    titulo: string;
    children: ReactNode
    corTitulo: string | null;
}

export default function Container(props: IContainer){
    return (
        <div className="flex flex-col w-full rounded-md overflow-hidden">
            <div className={`p-2 flex items-center w-ful ${props.corTitulo ? props.corTitulo : 'bg-blue-500'} `}>
                <h1>
                    {props.titulo}
                </h1>
            </div>
            <div className="flex items-center py-10 justify-evenly ">
                {props.children}
            </div>
        </div>
    )
}
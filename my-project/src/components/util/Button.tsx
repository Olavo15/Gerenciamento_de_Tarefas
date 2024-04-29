import { ReactNode } from "react";

interface IButtonProps{
    primario?: boolean;
    cancelar?: boolean;
    confirmar?: boolean;
    customizado?: boolean;
    tipo: string
    children: ReactNode;
    onClick: () => void;
}

export default function Button(props: IButtonProps){

    const primario = 'bg-blue-500 hover:bg-blue-400 active:bg-blue-500 '
    const cancelar  = 'bg-red-500 hover:bg-red-400 active:bg-red-500 '
    const confirmar = 'bg-green-500 hover:bg-green-400 active:bg-green-500 '
    const customizado = ''

    return (
        <button onClick={props.onClick}
                className={`px-4 py-1 w-full rounded-mdduration-200 transition-colors rounded-md ${
                props.primario ? primario : 
                props.cancelar ? cancelar : 
                props.confirmar ? confirmar : 
                props.customizado ? customizado : 
                null}`
            }
        >
            {props.children}
        </button>
    )
}
import { Envelope,} from "@phosphor-icons/react";

export default function Recuperacao(){
    return(
        <div className="flex items-center justify-center w-screen h-screen">
            <form className="flex items-center justify-center px-4 py-10 bg-zinc-50 shadow-lg rounded-2xl w-fit flex-col gap-3">
                <h1 className="text-xl font-semibold">
                    Insira seu e-mail para redifinir sua senha
                </h1>
                <div className="flex items-center  rounded-md border border-black px-2 py-1">
                    <input type="text" className="flex-1 bg-transparent" placeholder="Insira seu E-mail" />
                    <Envelope/>
                </div>        
                <button className="w-full px-2 py-1 text-center text-white bg-black rounded-md">
                    Enviar
                </button>
                
            </form>
        </div>
    )
}

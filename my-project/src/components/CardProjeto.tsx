interface ICardProjeto{
    titulo: string;
    status: string;
}

export default function CardProjeto(props:ICardProjeto){

    function dificuldade(){
        let _dificuldade = 'bg-green-500'

        if(props.status.toLowerCase() == 'atrasado'){
            _dificuldade = 'bg-red-500'
        } if (props.status.toLowerCase() == 'alerta'){
            _dificuldade = 'bg-yellow-300'
        }

        return _dificuldade
    }

    return (
        <div className="max-w-30 min-w-20 rounded-md flex  gap-5 px-2 items-center justify-between overflow-hidden bg-zinc-200">
            <p className="p-2">
                {props.titulo}
            </p>
            <span className={`w-8 h-3 rounded-md ${dificuldade()}`}>
    
            </span>
        </div>
    )
}
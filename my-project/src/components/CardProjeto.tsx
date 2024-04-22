interface ICardProjeto{
    headerTitle: string;
    description: string;
}

export default function CardProjeto(props:ICardProjeto){
    return (
        <div className="w-fit rounded-md overflow-hidden bg-zinc-200">
            <h1 className="w-full py-2 bg-blue-400 text-sm text-center">
                {props.headerTitle}
            </h1>
            <p className="p-2">
                {props.description}
            </p>
        </div>
    )
}
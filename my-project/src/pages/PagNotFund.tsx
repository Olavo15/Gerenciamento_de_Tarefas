export default function PagNotFund(){
    return (
        <div className="flex flex-col gap-1 items-center justify-center h-screen">
            <img src="https://i.pinimg.com/564x/27/f3/d5/27f3d55ae703a07a93df6ce4221cab66.jpg" alt="página não encontrada" />
            <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold">404</h1>
                <h1>OPS! NÃO ENCONTRAMOS ESSA PÁGINA</h1>
                <a href="/login" className="text-blue-400 hover:text-blue-500">
                    Voltar para página de início
                </a>
            </div>
        </div>
    )
}
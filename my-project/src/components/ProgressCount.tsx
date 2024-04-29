
interface IProgressCoun{
    posicao: number;
    quantidade: number;
  }
  
  
  export function ProgressCoun(props: IProgressCoun){
  
  
  
    let renderList = []
  
    for(let i = 0 ; i <= props.quantidade ; i++){
        renderList.push(i)
    }
  
    return (
        <ul className="flex items-center">
            {
                renderList.map((_, index) => {
                    return (
                        <>
                            {
                                index % 2 == 0 ? (
                                    <li>
                                        <hr className={`border w-10  ${props.posicao >= index ? 'border-green-400' : ''}`}/>
                                    </li>
                                ) :  (
                                    <li className="rounded-full border-dashed border border-zinc-300 w-8 h-8 flex items-center justify-center">
                                        {
                                            index == 0 ? index+1 : index - 1 
                                        }
                                    </li>
                                )
                            }
                            {
                                index + 1 == renderList.length ? (
                                    <li className="rounded-md border-dashed border border-zinc-300 px-2 h-8 flex items-center justify-center">
                                        finalizar
                                    </li>
                                ) : null
                            }
                        </>
                    )
                })
            }
            
        </ul>
    )
  }
  
  


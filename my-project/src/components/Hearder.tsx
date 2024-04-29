import { MagnifyingGlass, Bell  } from "@phosphor-icons/react";

const Hearder = () => {
  return (
    <header className="h-fit flex flex-col">
      <div className="w-full h-14 bg-slate-600 flex items-center justify-between p-2">
        <div className="">
          <h1 className="text-4xl">GC</h1>
        </div>
        <div className="flex flex-col justify-center items-center flex-grow">
          <div className="relative flex items-center">
            <MagnifyingGlass size={24} />
            <input
              type="text"
              placeholder="Pesquisar... "
              className="p-2  border border-gray-300 rounded-xl"
            />
          </div>
        </div>
        <div className="flex items-center">
          <Bell size={24} className="mr-4" />
          <span className="text-black mr-2">|</span>
          <h1 className="mr-4">Olavo C</h1>
          <img
            src="https://img.freepik.com/fotos-gratis/homem-corajoso-precisando-de-uma-extracao-de-unidade-folicular_23-2149106289.jpg"
            className="rounded-full w-12 h-12 "
            alt="Descrição da imagem"
          />
        </div>
    </div>
</header>
  );
}

export default Hearder;


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
                      <li>
                          {
                              index % 2 == 0 ? (
                                  <hr className="border w-10 border-green-400" />
                              ) : (
                                  index + 1
                              )
                              
                          }
                      </li>
                  )
              })
          }
          
      </ul>
  )
}


import { MagnifyingGlass, Bell, CaretDown, SignOut, CaretUp  } from "@phosphor-icons/react";
import { useState } from "react";

const Hearder = () => {

  const [perfil, setPerfil] = useState(false)
  return (
    <header className="h-fit flex flex-col">
      <div className="w-full h-14 bg-zinc-300 flex items-center justify-between px-4 py-2">
        <div className="">
          <h1 className="text-4xl font-semibold">GC</h1>
        </div>
        <div className="flex flex-col justify-center items-center flex-grow">
          <div className="flex-1 p-1 px-2 gap-3 bg-white drop-shadow-md h-fit flex items-center rounded-xl w-[60%]">
            <div className="flex items-center justify-center p-2 bg-zinc-200 drop-shadow-md rounded-full">
              <MagnifyingGlass size={20} />
            </div>
            <input
              type="text"
              placeholder="Pesquisar... "
              className="bg-transparent w-full outline-none"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-1 relative">
          <img
            src="https://img.freepik.com/fotos-gratis/homem-corajoso-precisando-de-uma-extracao-de-unidade-folicular_23-2149106289.jpg"
            className="rounded-full w-8 h-8 "
            alt="Descrição da imagem"
          />
          <button onClick={() => setPerfil(!perfil)}>
            {perfil ? <CaretUp size={25}/> : <CaretDown size={25}/>} 
          </button>
          <div className={`${perfil ? 'flex' : 'hidden'} drop-shadow-lg flex-col p-2 rounded-md bg-zinc-200 items-start absolute top-9 right-0`}>
            <h1>Aristoteles</h1>
            <div className="flex gap-1 items-center">
              <button>Desconectar</button>
              <SignOut/>
            </div>
          </div>
        </div>
    </div>
</header>
  );
}

export default Hearder;

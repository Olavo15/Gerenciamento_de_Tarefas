import { MagnifyingGlass, Bell, CaretDown, SignOut, CaretUp  } from "@phosphor-icons/react";
import { useState } from "react";

const Hearder = () => {
  const localStore = localStorage.getItem('userData')
  // const {token} = JSON.parse(localStore ? localStore : '')
  // const user: string = token.nome
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
          <p>
            {/* {user} */}
          </p>
          <div className="flex gap-2 items-center">
              <button onClick={() => {localStorage.removeItem('userData'), window.location.href = '/login'}}> <SignOut size={20}/></button>
            </div>
        </div>
    </div>
</header>
  );
}

export default Hearder;

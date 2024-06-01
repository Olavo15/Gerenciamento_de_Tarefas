import { MagnifyingGlass, Bell, CaretDown, SignOut, CaretUp  } from "@phosphor-icons/react";
import { useState } from "react";
import Perfil from "./modal/Perfil";

const Hearder = () => {
  const localStore = localStorage.getItem('userData')
  const {token} = JSON.parse(localStore ? localStore : '')
  const user: string = token.nome
  const img = token.url_perfil_img

  const [userConfig, setUserConfig] = useState(false)
  const [perfilModal, setPerfilModal] = useState(false)

  return (
    <header className="h-fit flex flex-col p-2 ">
      {perfilModal ? <Perfil closeModal={() => setPerfilModal(!perfilModal)}/> : null}
      <div className="w-full h-14 bg-white shadow-lg rounded-md border border-zinc-100 flex items-center justify-between px-4 py-2">
        <div className="">
          <h1 className="text-4xl font-semibold">GC</h1>
        </div>
     
        <div className="flex items-center gap-2 relative">
          <p className="text-xl font-semibold uppercase">
            {user}
          </p>
          <img className="w-10 h-10 rounded-full" src={img} alt="" />
          <button onClick={() => setUserConfig(!userConfig)}>
            {userConfig ? <CaretUp size={20}/> : <CaretDown size={20}/>}
          </button>
          {userConfig ? (
            <div className="absolute w-fit right-5 top-11 flex flex-col items-end">
                <div className="w-0 h-0 mr-1
                  border-l-[14px] border-l-transparent
                  border-t-[14px] border-t-white
                  border-r-[14px] border-r-transparent rotate-180"></div>
                <div className="bg-white shadow-md p-2 rounded-md w-fit">
                  <ul className="flex flex-col gap-1 text-lg px-4">
                    <li>
                      <button onClick={() => setPerfilModal(!perfilModal)}>
                        Perfil
                      </button>
                    </li>
                    <li>Suporte</li>
                    <li>
                      <button onClick={() => {localStorage.removeItem('userData'), window.location.href = '/login'}}>
                        Desconectar
                      </button>
                    </li>
                  </ul>
                </div>
            </div>
          ):null}
        </div>
    </div>
</header>
  );
}

export default Hearder;

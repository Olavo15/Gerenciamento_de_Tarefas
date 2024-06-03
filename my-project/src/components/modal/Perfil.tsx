import { Camera, X } from "@phosphor-icons/react";
import api from "../../service/api";
import { FormEvent, useState } from "react";

interface Iprops{
  closeModal: () => void;
}

export default function Perfil(props: Iprops){

    const localStore = localStorage.getItem('userData')
    const {token} = JSON.parse(localStore ? localStore : '')
    const user: string = token.nome
    const img = token.url_perfil_img
    console.log(token)
  

  const [configImg, setConfigImg] = useState(false)

  return (
    <div className="flex items-center justify-center w-screen h-screen absolute bg-zinc-800 bg-opacity-25 top-0 left-0 backdrop-blur-sm z-50">
      <div className="p-3 bg-zinc-100 relative flex flex-col w-fit rounded-lg drop-shadow-md">
        <button onClick={props.closeModal} className="absolute right-4 top-4 p-2 bg-white rounded-full bg-opacity-90">
            <X/>
        </button>
        <div className="w-full">
            <img className="w-fit h-48" src="https://i.pinimg.com/736x/ad/cd/cd/adcdcd5a8e967a7e945b841853374176.jpg" alt="" />
        </div>
        <div className="bg-white rounded-b-md px-20 py-4 flex flex-col items-center">
            
            <button onClick={() => setConfigImg(true)} className="relative w-fit group h-fit ">    
                <img  className="w-32 h-32 border-8 border-white rounded-full -mt-20" src={img} alt="" />
                <div className="absolute -mt-20 text-white left-2 top-2 hidden group-hover:flex bg-black bg-opacity-25 rounded-full border-2 border-white w-28 h-28  items-center justify-center">
                    <Camera size={40}/>
                </div>
            </button>
            
            {configImg ? (
                
                <div className="flex flex-col w-full items-center justify-center">
                    <h3 className="font-semibold">URL FOTO</h3>
                    <div className="w-full flex items-center gap-1">
                        <input className="px-2 py-1 rounded-md border-2 border-zinc-200" type="text" />
                        <button className="border px-2 py-1 rounded-md">
                            Salvar
                        </button>
                    </div>
                </div>
            ):(
                <>
                    <h1 className="text-xl font-bold">
                        {user}
                    </h1>
                    <p>
                        analidia@orkut.com
                    </p>
                </>
            )}
        </div>
      </div>
    </div>
  )
}
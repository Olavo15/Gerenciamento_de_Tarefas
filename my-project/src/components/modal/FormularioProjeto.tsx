import { X } from "@phosphor-icons/react";
import api from "../../service/api";
import { FormEvent, useState } from "react";

interface Iprops{
  closeModal: () => void;
}

export default function FormularioProjeto(props: Iprops){

  const localStore = localStorage.getItem('userData')
  const {token} = JSON.parse(localStore ? localStore : '')

  const [inputForm, setInputForm] = useState({
    titulo:'',
    descricao: ''
  })

  function criarProjeto(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    const id_usuario = token.id_usuario
    api.post('/projeto', { 
      titulo: inputForm.titulo, 
      descricao: inputForm.descricao, 
      id_usuario 
    }).then(response => {
      setInputForm({ titulo: '', descricao: '' });
    }).catch(error => console.error(error));

  }

  return (
    <div className="flex items-center z-50 justify-center w-screen h-screen absolute bg-zinc-800 bg-opacity-25 top-0 left-0 backdrop-blur-sm">
      <form onSubmit={criarProjeto} className="px-10 py-5 bg-zinc-100 relative flex flex-col w-fit rounded-lg drop-shadow-md">
        <button onClick={props.closeModal} className="p-2 bg-zinc-50 right-2 top-2 hover:bg-opacity-75 absolute rounded-full drop-shadow-lg">
          <X/>
        </button>
        <label className="font-semibold mb-1">Titulo do projeto</label>
        <input 
          type="text" 
          className="w-96 rounded-md border-zinc-200 border px-2 py-1"
          value={inputForm.titulo}
          onChange={(e) => setInputForm({...inputForm, titulo: e.target.value})}
        />
        <label className="font-semibold mb-1 mt-1">Descrição do projeto</label>
        <textarea 
          className="w-96 h-36 rounded-md border-zinc-200 border px-2 py-1 resize-none"
          value={inputForm.descricao}
          onChange={(e) => setInputForm({...inputForm, descricao: e.target.value})}
        />
        <div className="w-full h-fit p-2 flex justify-end mt-4 gap-2">
          <button onClick={props.closeModal} className="px-2 py-1 bg-red-500 rounded-md">Cancelar</button>
          <button className="px-2 py-1 bg-green-500 rounded-md">Criar projeto</button>
        </div>
      </form>
    </div>
  )
}
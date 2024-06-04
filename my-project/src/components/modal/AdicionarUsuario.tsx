import { User, X } from "@phosphor-icons/react";
import api from "../../service/api";
import { FormEvent, useEffect, useState } from "react";

interface Iprops {
  closeModal: () => void;
  projeto_id: string;
}

interface Iusuarios {
  id: string;
  nome: string;
  email: string;
  url_perfil_img: string;
}

export default function AdicionarUsuario(props: Iprops) {
  const localStore = localStorage.getItem('userData');
  const { token } = JSON.parse(localStore ? localStore : '');
  const id = token.id_usuario;

  const [inputUser, setInputUser] = useState('');
  const [usuarios, setUsuarios] = useState<Iusuarios[]>([]);
  const [usuariosAdicionados, setUsuariosAdicionados] = useState<Iusuarios[]>([]);
  
  useEffect(() => {
    api.post('/usuarios', {
      termo: inputUser
    })
      .then(response => setUsuarios(response.data.success))
      .catch(error => console.error(error));

    api.get(`/equipeprojeto/${props.projeto_id}`).then(response => setUsuariosAdicionados(response.data.success))
    
  }, [inputUser]);

  function adicionarMembro(id_usuario: number) {
    api.post('/equipeprojeto', {
      id_usuario: id_usuario,
      id_projeto: Number(props.projeto_id)
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.error(error));
    props.closeModal()
  }

  function usuarioNaoAdicionado(usuario: Iusuarios) {
    return usuariosAdicionados.findIndex(u => u.id === usuario.id) === -1;
  }


  return (
    <div className="flex items-center justify-center w-screen h-screen absolute bg-zinc-800 bg-opacity-25 top-0 left-0 backdrop-blur-sm">
      <div className="px-10 py-5 bg-zinc-100 relative flex flex-col gap-2 w-fit rounded-lg drop-shadow-md">
        <button onClick={props.closeModal} className="p-2 bg-zinc-50 right-2 top-2 hover:bg-opacity-75 absolute rounded-full drop-shadow-lg">
          <X />
        </button>
        <label className="font-semibold mb-1">Adicionar usuário</label>
        <input
          type="text"
          className="w-96 rounded-md border-zinc-200 border px-2 py-1"
          placeholder="Nome do usuário ou email"
          value={inputUser}
          onChange={(e) => setInputUser(e.target.value)}
        />
        <ul>
          {usuarios && usuarios.length > 0 ? (
            usuarios.filter(usuario => Number(usuario.id) !== Number(id) && usuarioNaoAdicionado(usuario)).map(usuario => (
              <li key={usuario.id} className="w-96 bg-white p-2 flex justify-between rounded-md border-zinc-200 border">
                <div className="flex gap-1 items-center">
                  <img className="w-10 h-10 rounded-full shadow-md" src={usuario.url_perfil_img} alt="" />
                  <div className="flex flex-col">
                    <h4 className="font-semibold">
                      {usuario.nome}
                    </h4>
                    <span className="font-light text-sm text-zinc-600">
                      {usuario.email}
                    </span>
                  </div>
                </div>
                <button onClick={() => adicionarMembro(Number(usuario.id))} className="px-2 border border-zinc-200 rounded-md bg-green-100">
                  Adicionar
                </button>
              </li>
            ))
          ) : (
            <li className="w-96 bg-white p-2 flex justify-between rounded-md border-zinc-200 border">
              <h3 className="w-full text-center">
                Nenhum usuário encontrado!
              </h3>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

import { Envelope, Password, User } from "@phosphor-icons/react";
import { ChangeEvent, FormEvent, useState } from "react";
import api from "../service/api";

interface IForm {
    nome: string;
    email: string;
    senha: string;
    termo: boolean;
}

export default function Cadastro() {
    const [userForm, setUserForm] = useState<IForm>({
        nome: '',
        email: '',
        senha: '',
        termo: false
    });

    const [error, setError] = useState('');

    function verificaCaoFormulario() {
        if (userForm.nome.length < 3) {
            setError('Por favor, verifique o nome.')
            return
        }
        if (userForm.email.length < 3) {
            setError('Por favor, verifique o email.')
            return
        }
        if (userForm.senha.length < 8) {
            setError('Sua senha deve conter no mínimo 8 caracteres.')
            return
        }
        if (!userForm.termo) {
            setError('Por favor, aceite os termos.')
            return
        }       
        setError('') 
        return error === '' ? true : false;
    }
    
    async function cadastrarUsuario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const isFormValid = await verificaCaoFormulario();
        if (isFormValid) {
            api.post('/create', userForm)
                .then(response => {
                    console.log('Usuário cadastrado com sucesso:', response.data);
                    setUserForm({
                        nome: '',
                        email: '',
                        senha: '',
                        termo: false
                    });
                    setError('');
                    window.location.href = '/login'
                })
                .catch(error => {
                    console.error('Erro ao cadastrar usuário:', error);
                });
        }
    }

    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <form className="flex items-center justify-center px-10 py-10 bg-zinc-50 border border-[#c6c6c6] shadow-lg rounded-2xl w-fit flex-col gap-3">
                <img 
                  src="data:image/jpeg;base64,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" alt="GC" 
                  className="w-28 h-28 rounded-md"
                />
                <div className="flex items-center  rounded-md border border-[#2d2d2d] px-3 py-1">
                    <input value={userForm.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => setUserForm({ ...userForm, nome: e.target.value })} type="text" className="flex-1 bg-transparent" placeholder="Insira seu nome completo" />
                    <User />
                </div>
                <div className="flex items-center  rounded-md border border-[#2d2d2d] px-3 py-1">
                    <input value={userForm.email} onChange={(e: ChangeEvent<HTMLInputElement>) => setUserForm({ ...userForm, email: e.target.value })} type="text" className="flex-1 bg-transparent" placeholder="Insira seu E-mail" />
                    <Envelope />
                </div>
                <div className="flex items-center  rounded-md border border-[#2d2d2d] px-3 py-1 ">
                    <input value={userForm.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => setUserForm({ ...userForm, senha: e.target.value })} type="password" className="flex-1 bg-transparent" placeholder="Crie sua senha" />
                    <Password />
                </div>
                <div className="flex gap-1 items-center w-full">
                    <input checked={userForm.termo} onChange={(e: ChangeEvent<HTMLInputElement>) => setUserForm({ ...userForm, termo: e.target.checked })} type="checkbox" name="termo" id="termo" />
                    <label htmlFor="termo">
                        Concordo com os termos
                    </label>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <button onClick={(e) => cadastrarUsuario(e)} className="w-full px-2 py-[7px] text-center text-white bg-[#116291] rounded-md">
                    Cadastrar
                </button>
            </form>
        </div>
    );
}

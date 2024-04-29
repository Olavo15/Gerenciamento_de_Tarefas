import { Trash, X } from "@phosphor-icons/react";
import { useState } from "react";
import { listBanner } from "../assets/listBanner";
import { simulationUsers } from "../util/simulationUsers";
import Input from "../components/util/Input";
import Button from "../components/util/Button";
import { ProgressCoun } from "../components/ProgressCount";

interface IModalEquipeFormProps{
    openModal: () => void;
}

interface Iusuario{
    nome: string;
    email: string;
    funcao: string;
    solicitacao: boolean;
}[]

interface IForm{
    nomeEquipe: string;
    liderId: string;
    banner: string;
    Iusuario: Iusuario[]
}{}


export default function ModalEquipeForm(props: IModalEquipeFormProps){


    const [countStage, setCountStage] = useState(0);
    const [bannerSelect, setBannerSelect] = useState('0');
    const [inputSearchUser, setInputSearchUser] = useState('')

    const [form, setForm] = useState<IForm>({
        nomeEquipe: '',
        Iusuario: [],
        liderId: '02f69d9c-fcc0-408e-a8b7-e2d7742d9c08',
        banner: ''
    })

    function next(){
        switch(countStage){
            case 0:
                if(form.nomeEquipe.length > 5 ){
                    setCountStage(countStage + 1)
                    break;
                }
                break;
            case 1:
                if(form.banner.length > 0 ){
                    setCountStage(countStage + 1)
                    break;
                }
                break;
            case 2:
                setCountStage(countStage + 1)
                break;
        }
    }

    function searchUser(query: { user: string, email: string }) {
        const similarUsers = simulationUsers.filter((user) =>
            user.nome.toLowerCase().includes(query.user.toLowerCase()) ||
            user.email.toLowerCase().includes(query.email.toLowerCase())
        );

        return similarUsers;
    }

    function nome(){
        return (
            <>
                <Input 
                  onChange={(e) => setForm({...form,nomeEquipe: e.target.value})}
                  type={'text'}
                  value={form.nomeEquipe}
                  label="Nome da Equipe"
                  placeholder=""
                  styleCustom=""
                  onClick={() => false}
                />
            </>
        )
    }

    function banner(){
        return listBanner.map((item) => (
            <figure className={`h-24 rounded-md overflow-hidden border-4 shadow-md  ${bannerSelect === item.imagem ? 'shadow-xl  border-green-400' : ''}`}>
                <button className="w-full h-full" onClick={() => {setBannerSelect(item.imagem), setForm({...form, banner:item.imagem})}}>
                    <img className="w-full h-full" src={item.imagem} alt="" />
                </button>
            </figure>
            )
        )
    }

    function conviteEquipe(){
        const resultSearchUser = searchUser({ user: inputSearchUser, email: inputSearchUser });

        const filteredResult = resultSearchUser.filter(user => (
            !form.Iusuario.some(membro => membro.nome.toLowerCase() === user.nome.toLowerCase())
        ));

        return (
            <div className="w-full h-full">
                <Input 
                  onChange={(e) => setInputSearchUser(e.target.value)}
                  type={'text'}
                  value={inputSearchUser}
                  label="Convida usuário"
                  placeholder=""
                  styleCustom=""
                  onClick={() => false}
                />
                <div className="relative">
                {
                    inputSearchUser.length > 3 ? (
                        <div className="absolute z-30 w-full top-0 left-0 p-2 bg-white border rounded-md h-fit"> 
                            <figure className={`${resultSearchUser.length >= 1 ? 'hiddend' : null}`}>
                                <img className="w-16 h-16" src="https://i.pinimg.com/originals/c5/ee/51/c5ee5152fd8575cd966fa258addca1a1.gif" alt="" />
                            </figure>
                            {
                                searchUser.length >= 1}(
                                    {
                                        filteredResult.map(user => {
                                            return (
                                                <div className="flex w-full items-center justify-between">
                                                    <div>
                                                        <div className="flex items-center gap-1">
                                                            <h1>Nome: {user.nome} </h1>
                                                            <span className="text-zinc-700">
                                                                • {user.funcao}
                                                            </span>
                                                        </div>
                                                        <p className="text-sm">Email: {user.email}</p>
                                                    </div>
                                                    <button className="px-2 py-1 h-fit rounded-md border border-zinc-400"
                                                      onClick={() => {form.Iusuario.push({
                                                            email: user.email,
                                                            funcao: user.funcao,
                                                            nome: user.nome,
                                                            solicitacao: user.solicitacao
                                                            }
                                                        ), setInputSearchUser('')}
                                                      }
                                                    >
                                                        Convidar
                                                    </button>
                                                </div>
                                            )
                                        })
                                    }
                                )
                        </div>
                    ):null
                }
                </div>
                <div className="w-full h-full overflow-auto z-20">

                    {form.Iusuario.map((user, index) => {
                        const uptadeList = form.Iusuario.filter((_,i) => i !== index)
                        return (
                            <ul>
                                <li className="flex w-full justify-between items-center pr-2">
                                    <div>
                                        <h2 className="font-semibold">
                                            {user.nome}
                                        </h2>
                                        <p className="text-sm">
                                            {user.funcao}
                                        </p>
                                    </div>
                                    <button className="pr-2"
                                        onClick={() => {setForm({
                                            ...form,
                                            Iusuario: uptadeList
                                        })}}>
                                        <Trash size={20}/>
                                    </button>
                                </li>
                            </ul>
                        )
                    })}   
                </div>
            </div>
        )
    }

    return (
        <div className="w-screen h-screen transition-opacity bg-black bg-opacity-35 backdrop-blur-[2px] absolute flex items-center justify-center left-0 top-0 z-50">
            <div className="w-[60%] h-[60%] bg-white flex flex-col py-3 rounded-sm relative px-4">
                <button onClick={props.openModal} className="absolute right-2 top-2">
                    <X size={30}/>
                </button>

                <h1 className="font-semibold text-2xl pb-2">
                    Cirando Equipe
                </h1>
                <ProgressCoun posicao={countStage} quantidade={3}/>
                <div className={`flex  gap-2 ${countStage == 1 ? 'flex-wrap mt-2 justify-center ' : 'flex-col h-full'}`}>
                    {
                        countStage == 0 ? (
                            nome()
                        ): countStage == 1 ?(
                            banner()
                        ): conviteEquipe() 
                    }
                </div>
                <div className="flex items-end flex-1 justify-end gap-2">
                    {
                        countStage > 0 ? (
                            <div>
                                <Button cancelar  onClick={() => setCountStage(countStage - 1)} tipo="button">
                                    Voltar
                                </Button>
                            </div>
                        ): null
                    }
                    <div>
                        <Button confirmar onClick={next} tipo="button" >
                            Continuar
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
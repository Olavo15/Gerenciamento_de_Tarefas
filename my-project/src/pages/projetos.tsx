import React, { useState } from 'react';
import { Plus, UsersThree, DotsThreeVertical } from "@phosphor-icons/react";
import FormularioProjeto from '../components/modal/FormularioProjeto';

export default function Projetos() {

    const [abriModalFormularioProjeto, setAbriModalFormularioProjeto] = useState(false)

    return (
        <div>
            {abriModalFormularioProjeto ? <FormularioProjeto closeModal={() => setAbriModalFormularioProjeto(false)}/> : null}
            <div className="flex justify-between px-2 py-10">
                <h1 className="text-3xl">Projetos</h1>
                <button onClick={() => setAbriModalFormularioProjeto(true)} type="submit" className="bg-slate-200 px-1 py-1 rounded-2xl text-sm flex items-center border border-black hover:bg-blue-600">
                    Adicionar projeto
                    <Plus size={24} className="ml-2" />
                </button>
            </div>
                <div  className="flex mt-4 ">

                </div>
            
        </div>
    )
}
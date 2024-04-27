import CardProjeto from "../components/CardProjeto"
import Container from "../components/Container"
import {Plus} from "@phosphor-icons/react";

const cards = [
    {titulo:"php", status:""},
    {titulo:"Pi", status:"alerta"},
    {titulo:"AGIOTA!", status:"atrasado"},
  ]
  const cards2 = [
    {titulo:"php", status:""},
    {titulo:"dinher", status:"alerta"},
    {titulo:"HOras de pesquisa", status:"atrasado"},
  ]

  const cards3 = [
    {titulo:"php", status:""},
    {titulo:"dinher", status:"alerta"},
    {titulo:"Agora!", status:"atrasado"},
  ]

export default function Home(){
    return (
        <>
     
      <div className="flex justify-end items-center">
          <button type="submit" className="bg-slate-200 px-1 py-1 rounded-2xl text-l flex items-center border border-black">
              Adicionar projeto
              <Plus size={20} className="ml-2" />
          </button>
      </div>
  


            <Container titulo="Projetos recentes" corTitulo={'bg-red-300'}>
            {cards.map((card) => {
              return <CardProjeto titulo={card.titulo} status={card.status}/>
            })}
            </Container>

        
            <Container titulo="Projetos recentes" corTitulo={'bg-blue-300'}>
            {cards2.map((item) => {
              return <CardProjeto titulo={item.titulo} status={item.status}/>
            })}
            </Container>

            <Container titulo="Projetos recentes" corTitulo={'bg-green-300'}>
            {cards3.map((item) => {
              return <CardProjeto titulo={item.titulo} status={item.status}/>
            })}
            </Container>
        </>
    )
}
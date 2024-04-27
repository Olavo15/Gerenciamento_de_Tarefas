import CardProjeto from "../components/CardProjeto"
import Container from "../components/Container"

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
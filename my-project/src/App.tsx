import CardProjeto from "./components/CardProjeto";
import Container from "./components/Container";
import Header from "./components/Hearder"; 
import SliderBar from "./components/SlidBar"; 

const App = () => {

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


  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="flex w-full h-full">
        <div className="h-full">
          <SliderBar/>
        </div>
        <div className="flex flex-col w-full py-4  gap-5 px-10 p-2 ">
          


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


        </div>
    
      </div>
    </div>
  );
}

export default App;

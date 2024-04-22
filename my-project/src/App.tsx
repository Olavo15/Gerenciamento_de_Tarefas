import CardProjeto from "./components/CardProjeto";
import Header from "./components/Hearder"; 
import SliderBar from "./components/SlidBar"; 

const App = () => {

  const cards = [
    {headerTitle:"Cartão 01", description:"Conteudo 01"},
    {headerTitle:"Cartão 02", description:"Conteudo 02"},
    {headerTitle:"Cartão 03", description:"Conteudo 03"},
  ]


  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="flex w-full h-full">
        <div className="h-full">
          <SliderBar/>
        </div>
        <div className="flex w-full items-center justify-center gap-5">
          
          {cards.map((card) => {
            return <CardProjeto description={card.description} headerTitle={card.description}/>
          })}

        </div>
    
      </div>
    </div>
  );
}

export default App;

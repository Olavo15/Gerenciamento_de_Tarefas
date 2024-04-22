import CardProjeto from "./components/CardProjeto";
import Header from "./components/Hearder"; 
import SliderBar from "./components/SlidBar"; 

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="flex w-full h-full">
        <div className="h-full">
          <SliderBar/>
        </div>
        <div className="flex w-full items-center justify-center gap-5">
          <CardProjeto description="Testando componente" headerTitle="COMPONENT TEST"/>
        </div>
    
      </div>
    </div>
  );
}

export default App;

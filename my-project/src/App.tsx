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
      </div>
    </div>
  );
}

export default App;

import { MagnifyingGlass, Bell, House, Users, FolderPlus  } from "@phosphor-icons/react";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <header className="w-full h-14 bg-slate-600 flex items-center justify-between p-2">
        <div className="">
          <h1 className="text-4xl">GC</h1>
        </div>
        <div className="flex flex-col justify-center items-center flex-grow">
          <div className="relative flex items-center">
            <MagnifyingGlass size={24} />
            <input
              type="text"
              placeholder="Pesquisar... "
              className="p-2 pl-10 border border-gray-300 rounded-xl"
            />
          </div>
        </div>
        <div className="flex items-center">
          <Bell size={24} className="mr-4" />
          <span className="text-black mr-2">|</span>
          <h1 className="mr-4">Olavo Regis</h1>
          <img
            src="https://img.freepik.com/fotos-premium/o-homem-da-mascara-de-corvo_264411-7628.jpg?w=1380"
            className="rounded-full w-12 h-12 "
            alt="Descrição da imagem"
          />
        </div>
      </header>
    
      <nav className="bg-gray-800 text-white py-4 flex-grow">
        <div className="container flex flex-col p-2">
          <House size={24} />
          <a href="#" className="hover:text-gray-400">Home</a>
        </div>
        <div className="container flex flex-col p-2">
          <Users size={24} />
          <a href="#" className="hover:text-gray-400">Equipes</a>
        </div>
        <div className="container flex flex-col p-2">
          <FolderPlus size={24} />
          <a href="#" className="hover:text-gray-400">Projetos</a>
        </div>
      </nav>
    
    </div>
  );
}

export default App;

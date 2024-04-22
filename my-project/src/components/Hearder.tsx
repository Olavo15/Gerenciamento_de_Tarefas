import { MagnifyingGlass, Bell  } from "@phosphor-icons/react";

const Hearder = () => {
  return (
    <header className="h-fit flex flex-col">
      <div className="w-full h-14 bg-slate-600 flex items-center justify-between p-2">
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
          <h1 className="mr-4">Avatar</h1>
          <img
            src="https://conteudo.imguol.com.br/c/entretenimento/80/2017/04/25/a-atriz-zoe-saldana-como-neytiri-em-avatar-1493136439818_v2_3x4.jpg"
            className="rounded-full w-12 h-12 "
            alt="Descrição da imagem"
          />
        </div>
    </div>
</header>
  );
}

export default Hearder;

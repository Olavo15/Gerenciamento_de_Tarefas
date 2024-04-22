import React from 'react';
import { House, Users, FolderPlus } from '@phosphor-icons/react'; 

function SliderBar() {
  return (
    <aside className="bg-gray-800 text-white py-4 flex-grow">
      <nav>
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
    </aside>
  );
}

export default SliderBar;

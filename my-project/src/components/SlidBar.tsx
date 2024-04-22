import { House, Users, FolderPlus } from '@phosphor-icons/react'; 

function SliderBar() {
  return (
    <aside className="bg-gray-800 px-2 py-5 text-white flex-grow w-fit h-full">
      <nav>
        <ul className='flex flex-col gap-4'>
          <li className=''>
            <a href="/Equipes"
              className='flex flex-col items-center justify-center group hover:bg-zinc-500 bg-opacity-50 p-2 rounded-lg hover:shadow-md transition duration-100'
            >
              <House size={24} />
              <label>Home</label>
            </a>
          </li>
          <li className=''>
            <a href="/Equipes"
              className='flex flex-col items-center justify-center group hover:bg-zinc-500 bg-opacity-50 p-2 rounded-lg hover:shadow-md transition duration-100'
            >
              <Users size={24} />
              <label>Equipes</label>
            </a>
          </li>
          <li className=''> 
            <a href="/Projetos"
              className='flex flex-col items-center justify-center group hover:bg-zinc-500 bg-opacity-50 p-2 rounded-lg hover:shadow-md transition duration-100'
            >
              <FolderPlus size={24} />
              <label>Projetos</label>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SliderBar;

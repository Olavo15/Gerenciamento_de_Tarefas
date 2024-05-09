import {Star, UsersThree, ArrowDown} from '@phosphor-icons/react';
export default function Projeto() {

    return(
        <>
            <div className="flex justify-between px-2 py-10">
                <h1 className="text-3xl">Projeto</h1>
            </div>

            
            <aside className=" bg-slate-600 ">
                <nav className="flex text-base items-center justify-start px-4 gap-10 w-auto">
                    <ul>
                        <li>
                          <label>My Board</label>
                        </li>
                    </ul>

                    <ul >
                        <li>
                          <label>Planejamento</label>
                        </li>
                    </ul>

                    <ul >
                        <li>
                          <label>Desenvolvimento</label>
                        </li>
                    </ul>

                    <div className='flex  gap-2'>
                        <Star size={24} />
                        <UsersThree size={24} />
                        <ArrowDown size={24} />
                    </div>
                </nav>
            </aside>
            
        </>
    )
}
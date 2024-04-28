import React, { useState } from 'react';
import { Plus, UsersThree, DotsThreeVertical } from "@phosphor-icons/react";

export default function Projeto() {
    // Inicializando uma lista de projetos com useState
    const [projects, setProjects] = useState([
        { id: 1, name: "Nome do projeto 1", description: "Descrição do projeto 1", imageUrl: "https://c4.wallpaperflare.com/wallpaper/936/167/698/anime-one-piece-monkey-d-luffy-shanks-one-piece-wallpaper-preview.jpg" },
        { id: 2, name: "Nome do projeto 2", description: "Descrição do projeto 2", imageUrl: "https://img.goodfon.com/wallpaper/nbig/4/ad/one-piece-luffy-shanks.webp" },
        { id: 3, name: "Nome do projeto 3", description: "Descrição do projeto 3", imageUrl: "https://c4.wallpaperflare.com/wallpaper/734/824/1024/thousand-sunny-one-piece-wallpaper-preview.jpg" }
    ]);

    // Para controlar se o menu está aberto ou fechado
const [isMenuOpen, setIsMenuOpen] = useState(false);

// Para armazenar o projeto selecionado
const [selectedProject, setSelectedProject] = useState(null);

// Alternar entre abrir e fechar o menu e selecionar um projeto
const toggleMenu = (project) => {
    setIsMenuOpen(!isMenuOpen);
    setSelectedProject(project);
}

// Renomear o projeto selecionado
const handleRename = () => {
    const newName = prompt("Digite o novo nome do projeto:");
    if (newName !== null && newName.trim() !== "") {
        const updatedProjects = projects.map(project =>
            project.id === selectedProject.id ? { ...project, name: newName } : project
        );
        setProjects(updatedProjects);
    }
}

// Para ocultar o projeto selecionado
const handleHide = () => {
    const updatedProjects = projects.filter(project => project.id !== selectedProject.id);
    setProjects(updatedProjects);
}

// Para sair do projeto selecionado
const handleExit = () => {
    const confirmExit = window.confirm(`Tem certeza de que deseja sair do projeto "${selectedProject.name}"?`);
    if (confirmExit) {
        const updatedProjects = projects.filter(project => project.id !== selectedProject.id);
        setProjects(updatedProjects);
        setIsMenuOpen(false);
    }
}


    return (
        <>
            <div className="flex justify-between px-2 py-10">
                <h1 className="text-3xl">Projeto</h1>
                <button type="submit" className="bg-slate-200 px-1 py-1 rounded-2xl text-sm flex items-center border border-black hover:bg-blue-600">
                    Adicionar projeto
                    <Plus size={24} className="ml-2" />
                </button>
            </div>
            <div className="flex mt-4">
                {projects.map(project => (
                    <div key={project.id} className="h-54 group relative w-80 border border-zinc-600 rounded-md text-pretty overflow-hidden mr-4">
                        <button className="absolute text-black p-1 right-2 top-2 bg-white bg-opacity-50 rounded-full" onClick={() => toggleMenu(project)}>
                            <DotsThreeVertical size={25}/>
                        </button>
                        {isMenuOpen && selectedProject.id === project.id && (
                            <div className="absolute right-0 mt-8 w-48 bg-white border border-gray-300 rounded-md shadow-md">
                                <button className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleRename}>Renomear</button>
                                <button className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleHide}>Ocultar</button>
                                <button className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleExit}>Sair</button>
                            </div>
                        )}
                        <figure className="md:shrink-0">
                            <img  src={project.imageUrl} alt="" className="w-full" />
                        </figure>
                        <div className="p-2 flex flex-col">
                            <div className="mb-4 flex items-center">
                                <p className="text-base text-gray-700 mr-2">{project.name}</p>
                                <UsersThree size={24} />
                            </div>
                            <p className="text-base text-gray-700 mb-2">{project.description}</p>
                            <div className="text-right">
                                 <p className="text-base text-gray-700">27/04/2024</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

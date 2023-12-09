import React from "react";
import ProjectCard from "./ProjectCard";


const projectData = [
    {
        id: 1,
        title: "McDonald's UI/UX Redesign",
        description: "This is a project for Samsung UI/UX Hackathon 2023.",
        image: "/projects/MCDRedesign.png",
        gitUrl: "https://drive.google.com/file/d/1X4lV8WDC83urOg_D8XDZvzh2NGJj5Iy_/view?usp=sharing"

    },
    {
        id: 2,
        title: "TicketWave",
        description: "This is a project for Ethereum Kuala Lumpur 2023 Hackathon.",
        image: "/projects/TicketWave.png",
        gitUrl: "https://devfolio.co/projects/ticketwave-f4c7"
    },
    {
        id: 3,
        title: "CiliLado Data Analysis",
        description: "This is a data analytics project for CiliLado, a Malaysian chili brand.",
        image: "/projects/CiliLado.png",
        gitUrl: "https://github.com/JingYuan0926/ChiliLado"
    },

];

const Projects = () => {
    return (
        <div id="projects">
            <div className="text-4xl font-semibold mb-8">My Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 md:gap-12 h-full">
                {projectData.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                    />))}
            </div>
        </div>
    );
};

export default Projects;
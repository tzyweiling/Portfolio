import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
          <ul className="list-disc pl-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>Python</li>
          </ul>
        ),
    },
    {
        title: "Experiences",
        id: "experiences",
        content: (
          <ul className="list-disc pl-2">
            <li>Ethereum Kuala Lumpur 2023</li>
            <li>Samsung UI/UX Hackathon 2023</li>
          </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
          <ul className="list-disc pl-2">
                <li>Taylor's University (Aug 2022 - Present)</li>
                <li>Taylor's College (Aug 2021 - Aug 2022)</li>
                <li>SMK Methodist ACS (2016 - 2020)</li>
          </ul>
        ),
    }
];
//1
const AboutMe = () => {
    //1b
    const[tab, setTab] = useState("skills");
    const[isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    //1a
    return(
        <section className="text-white grid" id="aboutMe">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
                <div>
                    <img src="/AboutMe.png" alt="About Me" width={450} height={450} style={{ borderRadius: "25px" }}/>
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
                    <p className="text-base text-justify lg:text-lg">I am a second-year Computer Science student at Taylor's University, specializing in Data Science and Artificial Intelligence.
                    My academic journey has been focused on gaining a solid foundation in various aspects of computer science, including programming, algorithms, data structures, and software development. 
                    I am passionate about exploring new technologies and applying theoretical knowledge to practical, real-world problems. 
                    Throughout my studies, I've actively participated in coding projects, workshops, and hackathons to improve my skills and gain hands-on experience.
                    I believe in the importance of continuous learning and adaptability in the ever-evolving field of computer science. 
                    Looking forward, I am eager to further develop my skills, contribute to innovative projects, and ultimately make a positive impact in the world of technology.</p>
                    <div className="flex flex-row mt-8">
{/* 1e */}
                        <TabButton 
                        selectTab={() => handleTabChange("skills")}
                        active= {tab === "skills"}
                        >
                            
                            Skills
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("experiences")}
                        active= {tab === "experiences"}
                        >
                            {" "}
                            Experiences{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("education")}
                        active= {tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>

            </div>
        </section>

    );
};
export default AboutMe;
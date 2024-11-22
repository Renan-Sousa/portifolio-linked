import Image from "next/image";
import { outfit } from "@/app/fonts/fonts";
import skillsData from "@/app/data/skillsData"
import styleSkills from "@/app/styles/skills.module.css"
import SectionTitle from "./SectionTitle";

export default function SkillsSection() {
    const programmingSkills = [
        { name: "Python", level: 95},
        { name: "C++", level: 60 },
        { name: "JavaScript", level: 50},
        { name: "C", level: 90},
    ];

    const softwareEngineeringSkills = [
        { name: "Desenvolvimento Web", level: 70 },
        { name: "Metodologias Ágeis", level: 60 },
        { name: "Otimização", level: 90 },
        { name: "Web Design - Figma", level: 90 },
    ];

    return (
        <div id="skillsSection" className="fullHeight blue center" >
            <SectionTitle subheading="" heading="Habilidades"/>

            <div className={`${styleSkills.gridContainer}`}>
                {skillsData.map((skill) => (
                    <div className={styleSkills.skillItem} key={skill.name}>
                        <Image
                            src={skill.img}
                            width={70}
                            height={70}
                            alt={skill.name}
                        />
                        <h3 className={outfit.className}>
                            {skill.name}
                        </h3>
                    </div>
                ))}
            </div>
            
            <div className={`${styleSkills.skillsAreas} ${outfit.className}`}>
                <div className={styleSkills.skillsColumn}>
                    <h3 className={`${styleSkills.skillsTitle} ${outfit.className}`}>Linguagens</h3>
                    {programmingSkills.map((skill) => (
                        <div className={styleSkills.skillProgressItem} key={skill.name}>
                            <span className={styleSkills.skillName}>{skill.name}</span>
                            <div className={styleSkills.progressBar}>
                                <div 
                                    className={styleSkills.progressBarFill} 
                                    style={{ width: `${skill.level}%` }} 
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styleSkills.skillsColumn}>
                    <h3 className={`${styleSkills.skillsTitle} ${outfit.className}`}>Áreas de especialidade</h3>
                    {softwareEngineeringSkills.map((skill) => (
                        <div className={styleSkills.skillProgressItem} key={skill.name}>
                            <span className={styleSkills.skillName}>{skill.name}</span>
                            <div className={styleSkills.progressBar}>
                                <div 
                                    className={styleSkills.progressBarFill} 
                                    style={{ width: `${skill.level}%` }} 
                                    ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
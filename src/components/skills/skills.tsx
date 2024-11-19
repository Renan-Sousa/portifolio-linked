import Image from "next/image";
import { outfit } from "@/app/fonts";
import skillItems from "./skillItem";
import './skills.css'

export default function Skills() {
    return (
        <div className="grid-container">
            {skillItems.map((skillItem) => (
                <div className="skill-item" key={skillItem.name}>
                    <Image
                        src={skillItem.img}
                        width={100}
                        height={100}
                        alt={skillItem.name}
                    />
                    <h3 className={outfit.className}>
                        {skillItem.name}
                    </h3>
                </div>
            ))}
        </div>
    );
}

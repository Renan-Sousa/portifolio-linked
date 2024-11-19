import Image from "next/image";
import './about.css'
import { outfit } from "@/app/fonts";

export default function AboutMe() {
    return (
        <div className="container-about">
            <div className="image-section-about">
                <img src="/perfil.jpg" alt="Foto de perfil" />
            </div>
            <div className="content-section-about">
                <div className="title-about">
                    <h2 className={outfit.className}>
                        Sobre Mim
                    </h2>
                </div>

                <div className="content-about'">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos deleniti consequuntur facilis iusto delectus fuga! Rerum ullam veritatis fuga quibusdam beatae voluptates praesentium, cumque, nam, officiis asperiores iusto enim.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos deleniti consequuntur facilis iusto delectus fuga! Rerum ullam veritatis fuga quibusdam beatae voluptates praesentium, cumque, nam, officiis asperiores iusto enim.</p>
                </div>
            </div>
        </div>
    )
}
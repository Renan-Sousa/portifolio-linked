import Image from "next/image";
import { outfit } from "@/app/fonts/fonts";
import styleHero from "@/app/styles/hero.module.css";

export default function HeroSection() {
    return (
        <div id="heroSection" className="fullHeight yellow center">
            <div className={styleHero.heroMainContent}>
                <div className={styleHero.sideSocials}>
                    <div className={styleHero.verticalLine}></div>

                    <div className={styleHero.socialIcons}>
                        <a href="https://www.instagram.com/renanrsousa23/" target="_blank">
                            <Image 
                                src="/icons/instagram.svg"  
                                width={25}
                                height={25}
                                alt="Ícone Instagram"  
                            />
                        </a>
                        
                        <a href="https://www.linkedin.com/in/renan-sousa-9457a9162/" target="_blank">
                            <Image 
                                src="/icons/linkedin.svg"  
                                width={25}
                                height={25}
                                alt="Ícone LinkedIn"  
                            />
                        </a>

                        <a href="https://github.com/Renan-Sousa" target="_blank">
                            <Image 
                                src="/icons/github.svg"  
                                width={25}
                                height={25}
                                alt="Ícone GitHub"  
                            />
                        </a> 
                    </div>
                    
                    <div className={styleHero.verticalLine}></div>
                </div>

                <div className={`${outfit.className} ${styleHero.heroText}`}>
                    <h2>Olá, eu sou</h2>
                    <h2 className={ styleHero.name}>Renan Sousa</h2>
                    <p>Apaixonado por buscar inovações e criar experiências digitais excepcionais</p>
                </div>

                <div className={styleHero.heroImage}>
                    <Image 
                        src="/hero.svg"
                        width={526}
                        height={365}
                        alt="Homem sentado no computador"
                    />
                </div>
            </div>
        </div>
    )
}
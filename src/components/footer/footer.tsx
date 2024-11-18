import Image from "next/image";
import { outfit } from "@/app/fonts"
import "./footer.css"

export default function Infos() {
    return (
        <footer className={`${outfit.className} container`}>
            <div className="main-content infos">
                <div className="whatsapp">
                    <Image 
                        src="/icons/whatsapp.svg"  
                        width={35}
                        height={35}
                        alt="Ìcone whatsapp"  
                    />
                    <p className="info-text">
                        (32) 9 98225618
                    </p>
                </div>

                <div className="email">
                    <Image 
                        src="/icons/gmail.svg"  
                        width={35}
                        height={35}
                        alt="Ìcone gmail"  
                    />
                    <p className="info-text">
                        renanrsousa2018@gmail.com
                    </p>
                </div>

                <div className=" socials">
                    <a href="https://www.instagram.com/renanrsousa23/" target="_blank">
                        <Image 
                            className="icon"
                            src="/icons/instagram.svg"  
                            width={35}
                            height={35}
                            alt="Ìcone instagram"  
                        />
                    </a>
                    
                    <a href="https://www.linkedin.com/in/renan-sousa-9457a9162/" target="_blank">
                        <Image 
                            className="icon"
                            src="/icons/linkedin.svg"  
                            width={35}
                            height={35}
                            alt="Ìcone linkedin"  
                        />
                    </a>

                    <a href="https://github.com/Renan-Sousa" target="_blank">
                        <Image 
                            className="icon"
                            src="/icons/github.svg"  
                            width={35}
                            height={35}
                            alt="Ìcone github"  
                        />
                    </a>
                    
                </div>
            </div>
        </footer>
    )
}
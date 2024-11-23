import styleAbout from "@/app/styles/about.module.css"
import { outfit } from "@/app/fonts/fonts";

import Link from "next/link";

export default function AboutSection() {
    return (
        <div id="aboutSection" className={`${styleAbout.about} fullHeight center`}>
            <div className={styleAbout.content}>
                <img src="/perfil3.jpg" alt="Foto de perfil" />    
                <div className={styleAbout.text}>
                    <h1 className={outfit.className}>Sobre mim</h1>
                    <h5>Desenvolvedor Web, Designer & Pesquisador de Otimização</h5>
                    <p>Sou estudante de Ciência da Computação com uma paixão por tecnologia e design. Ao longo da minha jornada acadêmica, desenvolvi habilidades sólidas em desenvolvimento web, criando sites e aplicações responsivas que oferecem uma experiência fluida e agradável para os usuários. Utilizo ferramentas como o Figma para transformar ideias em interfaces visuais funcionais e criativas.</p>
                    <p>Atualmente, meu foco de pesquisa está em métodos de otimização. Estou sempre em busca de novos desafios para aprimorar minhas habilidades e contribuir para soluções inovadoras.</p>	
                    <Link href="#contactsSection">
                        <button type="button">Enviar mensagem</button>
                    </Link>					
                </div>
            </div>  

            <div>
                
            </div>
		</div>
    );
}
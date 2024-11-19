import Image from "next/image";
import Link from "next/link";

import { outfit } from "./fonts";
import Infos from "@/components/footer/footer";
import Contact from "@/components/contact/contact.jsx";
import SideInfoBar from "@/components/navegation/sidebar/sidebar";
import AboutMe from "@/components/about/about";
import Skills from "@/components/skills/skills";

export default function Home() {
	return (
		<>
			<main className="container">
				{/* <div className="space"></div> */}
				<section id="hero">
					<div className="main-content section hero-section">
						
						<div className="hero-main-content">
							<SideInfoBar/>

							<div className={`${outfit.className} hero-text`}>
								<h1>
									Olá, eu sou
								</h1>
								<h2 className="name">
									Renan Sousa
								</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur 
								</p>
							</div>
						</div>

						<div className="hero-image">
							<Image 
								src="/hero.svg"
								width={526}
								height={365}
								alt="Homem sentado no computador"
							/>
						</div>
					</div>
				</section>
				
				<section id="about">
					<div className="main-content section">
						<AboutMe/>				
					</div>
				</section>
				
				<section id="skills">
					<div className="main-content section">
						<h2 className={`${outfit.className}`}>Habilidades</h2>
						<Skills />
					</div>
				</section>

				<section id="projects" className="white-bg">
					<div className="main-content section">
					</div>
				</section>
				
				<section id="contacts">
					<div className="main-content section">
						<Contact/>
						<Infos/>
					</div>
				</section>
			</main>
		</>
	);
}

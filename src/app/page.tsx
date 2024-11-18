import Image from "next/image";
import Link from "next/link";

import { outfit } from "./fonts";
import Infos from "@/components/footer/footer";
import Contact from "@/components/contact/contact.jsx";

export default function Home() {
	return (
		<>
			<main className="container">
				<div className="space">

				</div>
				<section id="hero">
					<div className="main-content section">
						<h3>
							Olá, eu sou
						</h3>
						<h2>
							Renan Sousa
						</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur 
						</p>
						
					</div>
				</section>
				
				<section id="about" className="white-bg">
					<div className="main-content section">
						<h1>about</h1>
					</div>
				</section>
				
				<div id="skills" className="main-content section">
					<h1>skills</h1>
				</div>
				
				<section id="projects" className="white-bg">
					<div className="main-content section">
						<h1>projects</h1>
					</div>
				</section>
				
				<section id="contacts" className="caixa">
					<div className="main-content section">
						<Contact/>
						<Infos/>
					</div>
				</section>
			</main>
		</>
	);
}

import Link from "next/link"
import NavLinks from "./navlinks"
import { outfit} from "@/app/fonts";
import "./navbar.css"

const links = [
    { name: 'Sobre Mim', href: '#about'},
    { name: 'Habilidades', href: '#skills'},
    { name: 'Projetos', href: '#projects'},
    { name: 'Contatos', href: '#contacts'},
];

export default function Navbar() {
    return (
        <header className={`${outfit.className} container`}>
			<nav className="navbar main-content">
				<Link href="#hero" className="logo">
					Portifólio
				</Link>
				
				<ul className="nav-items">
					{links.map((link, index)=> (	
						<NavLinks 
							key = {index}
							href={link.href} 
							label={link.name}
						/>
					))}
				</ul>		
			</nav>
        </header>
    )
}

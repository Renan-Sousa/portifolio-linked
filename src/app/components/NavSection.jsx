'use client'

import Link from "next/link";
import { useState } from "react";
import { outfit } from "@/app/fonts/fonts";
import style from "@/app/styles/nav.module.css";

export default function NavSection() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={`${style.navbar} ${outfit.className}`}>
            <Link href="#heroSection" className={style.logo}>
                Portifólio
            </Link>
            
            {/* Ícone do hambúrguer */}
            <div className={style.hamburger} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Itens do menu, que ficam visíveis quando o menu está aberto */}
            <ul className={`${style.navItems} ${isMenuOpen ? style.mobile : ''}`}>
                <li><Link href="#aboutSection" className={style.navLink}  onClick={closeMenu}>Sobre Mim</Link></li>
                <li><Link href="#skillsSection" className={style.navLink}  onClick={closeMenu}>Habilidades</Link></li>
                <li><Link href="#projectsSection" className={style.navLink}  onClick={closeMenu}>Projetos</Link></li>
                <li><Link href="#contactsSection" className={style.navLink}  onClick={closeMenu}>Contatos</Link></li>
            </ul>        
        </nav>
    )
}
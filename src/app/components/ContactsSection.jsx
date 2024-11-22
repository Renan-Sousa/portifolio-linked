'use client'

import Image from "next/image";
import styleContacts from "@/app/styles/contacts.module.css"
import { outfit } from "@/app/fonts/fonts";
import Swal from 'sweetalert2'
import SectionTitle from "./SectionTitle";

export default function ContactsSection() {
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "31f2b84b-f437-47e1-b0d0-5285a4260759");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            Swal.fire({
                title: "Sucesso!",
                text: "Sua mensagem foi enviada.",
                icon: "success"
            });
        }
    }

    return (
        <div id="contactsSection" className="fullHeight" >
            <SectionTitle subheading="" heading="Entrar em contato" />

            <div className={styleContacts.contact}>
                <form onSubmit={handleSubmit} className={styleContacts.form}>    
                    <div className={styleContacts.inputBox}>
                        <input type="text" className={styleContacts.field} placeholder='Nome *' name='name' required />
                    </div>
                    
                    <div className={styleContacts.inputBox}>
                        <input type="email" className={styleContacts.field} placeholder='Email *' name='email' required />
                    </div>
                    
                    <div className={styleContacts.inputBox}>
                        <textarea name="message" className={`${styleContacts.field} ${styleContacts.message}`} placeholder='Digite sua mensagem *' required></textarea>
                    </div>
                
                    <button type='submit' className={outfit.className}>Enviar mensagem</button>
                </form>
            </div>

            <footer className={`${outfit.className} ${styleContacts.footer}`}>
                <div className={styleContacts.footerContent}>
                    <div className={styleContacts.contactItem}>
                        <Image 
                            src="/icons/whatsapp.svg"  
                            width={35}
                            height={35}
                            alt="Ícone WhatsApp"  
                        />
                        <p className={styleContacts.infoText}>(32) 9 9822-5618</p>
                    </div>

                    <div className={styleContacts.contactItem}>
                        <Image 
                            src="/icons/gmail.svg"  
                            width={35}
                            height={35}
                            alt="Ícone Gmail"  
                        />
                        <p className={styleContacts.infoText}>renanrsousa2018@gmail.com</p>
                    </div>

                    <div className={styleContacts.socials}>
                        <a href="https://www.instagram.com/renanrsousa23/" target="_blank">
                            <Image 
                                className={styleContacts.icon}
                                src="/icons/instagram.svg"  
                                width={35}
                                height={35}
                                alt="Ícone Instagram"  
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/renan-sousa-9457a9162/" target="_blank">
                            <Image 
                                className={styleContacts.icon}
                                src="/icons/linkedin.svg"  
                                width={35}
                                height={35}
                                alt="Ícone LinkedIn"  
                            />
                        </a>
                        <a href="https://github.com/Renan-Sousa" target="_blank">
                            <Image 
                                className={styleContacts.icon}
                                src="/icons/github.svg"  
                                width={35}
                                height={35}
                                alt="Ícone GitHub"  
                            />
                        </a>
                    </div>
                </div>
            </footer>

		</div>
    );
}
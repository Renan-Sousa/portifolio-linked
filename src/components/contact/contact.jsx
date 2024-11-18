'use client'

import { outfit } from '@/app/fonts';
import './contact.css'

export default function Contact() {

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
            console.log(result);
        }
    }

    return (   
        <div className='contact'>
            <h2>Entrar em contato</h2>
            
            <form onSubmit={handleSubmit}>    
                <div className='input-box'>
                    <input type="text" className='field' placeholder='Nome *' name='name' required />
                </div>
                
                <div className='input-box'>
                    <input type="email" className='field' placeholder='Email *' name='email' required />
                </div>
                
                <div className='input-box'>
                    <textarea name="message" className='field message' placeholder='Digite sua mensagem *' required></textarea>
                </div>
            
                <button type='submit' className={outfit.className}>Enviar mensagem</button>
            </form>
        </div>
    )
}
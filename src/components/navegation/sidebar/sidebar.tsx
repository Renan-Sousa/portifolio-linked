import Image from 'next/image'
import './sidebar.css'

export default function SideInfoBar() {
    return (
        <>
            <div className='side-socials'>

                <div className='vertical-line'></div>
                
                <div className='social-icons'>
                    <a href="https://www.instagram.com/renanrsousa23/" target="_blank">
                        <Image 
                            src="/icons/instagram.svg"  
                            width={25}
                            height={25}
                            alt="Ìcone instagram"  
                        />
                    </a>
                    
                    <a href="https://www.linkedin.com/in/renan-sousa-9457a9162/" target="_blank">
                        <Image 
                            src="/icons/linkedin.svg"  
                            width={25}
                            height={25}
                            alt="Ìcone linkedin"  
                        />
                    </a>

                    <a href="https://github.com/Renan-Sousa" target="_blank">
                        <Image 
                            src="/icons/github.svg"  
                            width={25}
                            height={25}
                            alt="Ìcone github"  
                        />
                    </a> 
                </div>
                 <div className='vertical-line'></div>
            </div>

        </>
    )
}
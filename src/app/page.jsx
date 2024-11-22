import NavSection from './components/NavSection'
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection"
import ContactsSection from "./components/ContactsSection";

export default function Home() {
    return (
        <div className="container">
            
			<NavSection />

			<HeroSection />
			
			<AboutSection />

			<SkillsSection />
			
			<ProjectsSection/>

			<ContactsSection />

        </div>
    );
}

import { Hero } from "./Hero";

import Footer from "./Footer";
import { Header } from "./Header";
import { Portfolio } from './Portfolio';
import { Skills } from "./Skills";
import { About } from "./About";
import { Contact } from "./Contact";
import { useEffect } from "react";

function Layout() {

    useEffect(() => {
        const elements = document.querySelectorAll("[data-reveal]");

        function reveal() {
            const windowHeight = window.innerHeight;
            const triggerPoint = windowHeight * 0.75; // 75% da altura da viewport
            
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i] as HTMLElement;
                const elementTop = element.getBoundingClientRect().top;
                
                // Se o elemento está acima do ponto de trigger (75% da viewport)
                if (elementTop < triggerPoint) {
                    element.classList.add("revealead");
                }
            }
        }
        
        // Chama imediatamente para elementos já visíveis
        reveal();
        
        // Chama após um pequeno delay para garantir que o DOM está renderizado
        setTimeout(reveal, 100);
        
        window.addEventListener('scroll', reveal);
        window.addEventListener('load', reveal);
        window.addEventListener('resize', reveal);

        return () => {
            window.removeEventListener('scroll', reveal);
            window.removeEventListener('load', reveal);
            window.removeEventListener('resize', reveal);
        };
    }, [])

    useEffect(() => {
        const revealDelayElements = document.querySelectorAll<HTMLElement>("[data-reveal-delay]") ;

        for (let i = 0, len = revealDelayElements.length; i < len; i++) {  
            revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay || "";
        }
    }, [])

    return (
        <div>
            <Header/>
            <Hero />
            <Portfolio />
            <Skills />
            <About />
            <Contact/>
            <Footer />
        </div>
    )
}

export default Layout;
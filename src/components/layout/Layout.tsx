import { render } from "react-dom";
import { Hero } from "./Hero";

import Footer from "./Footer";
import { Header } from "./Header";
import { Portfolio } from './Portfolio';
import { Skills } from "./Skills";
import { About } from "./About";
import { Contact } from "./Contact";
import { useEffect, useRef, useState } from "react";

function Layout() {

    const [header, setHeader] = useState("header");

    useEffect(() => {
        let scrollPosition = window.scrollY + ((window.innerHeight * 3) / 4);
        const elements = document.querySelectorAll("[data-reveal");

        function reveal() {
            for (let i = 0; i < elements.length; i++) {

                if (scrollPosition > elements[i].getBoundingClientRect().top) {
                    elements[i].classList.add("revealead");
                }
            }
        }
        window.addEventListener('scroll', reveal);
        window.addEventListener('load', reveal);

    })

    useEffect(() => {
        const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

        for (let i = 0, len = revealDelayElements.length; i < len; i++) {
            revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
        }
    })

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
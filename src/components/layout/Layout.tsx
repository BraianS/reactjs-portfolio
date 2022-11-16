import { render } from "react-dom";
import { Hero } from "./Hero";

import Footer from "./Footer";
import { Header } from "./Header";
import { Portfolio} from './Portfolio';
import { Skills } from "./Skills";
import { About } from "./About";
import { Contact } from "./Contact";

function Layout() {
    return (
        <>
            <Header />
            <Hero />
            <Portfolio />
            <Skills />
            <About />
            <Contact/>
            <Footer />
        </>
    )
}

export default Layout;

import { useState } from "react"
import { FaBars } from "react-icons/fa"
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { Link } from "react-scroll";

export function Header() {
    const [nav, setNave] = useState(false);
    const barToggle = () => setNave(!nav);

    return (
        <div className="w-screen h-[80px] z-10 bg-container fixed drop-shadow-lg">
            <div className="px-2 nav flex justify-between items-center w-full h-full">
                <div className="flex items-center mr-4 pl-4 nav__brand">
                    <h4 className="pl-3 text-2xl title font-bold ">
                        Braian. </h4>
                </div>
                <div className="hidden md:flex pr-2">
                    <ul className="text-1xl font-semibold hidden md:flex title">
                        <Link activeClass="nav--active" className="nav__item p-3" smooth spy to="hero">Home.</Link>
                        <Link activeClass="nav--active" className="nav__item p-3" smooth spy to="portfolio">Portfolio.</Link>
                        <Link activeClass="nav--active" className="nav__item p-3" smooth spy to="skill">Skill.</Link>
                        <Link activeClass="nav--active" className="nav__item p-3" smooth spy to="contact">Contact.</Link>
                        <Link activeClass="nav--active" className="nav__item p-3 pr-10" smooth spy to="about">About.</Link>
                    </ul>
                </div>

                <button className="md:hidden pr-4" onClick={barToggle}>
                    {!nav ? <RiMenuLine /> : <RiCloseLine />
                    }
                </button>
            </div>

            <ul className={!nav ? 'hidden ' : 'absolute bg-container w-full px-8 md:hidden'}>
                <li> <Link activeClass="nav--active" smooth spy to="hero">Home</Link></li>
                <li> <Link activeClass="nav--active" smooth spy to="portfolio">Portfolio</Link></li>
                <li> <Link activeClass="nav--active" smooth spy to="skill">Skill</Link></li>
                <li> <Link activeClass="nav--active" smooth spy to="contact">Contact</Link></li>
                <li> <Link activeClass="nav--active" smooth spy to="About">About</Link></li>
            </ul>
        </div>
    )
}
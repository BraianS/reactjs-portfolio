
import { useState } from "react"
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { Link } from "react-scroll";

export function Header() {
    const [nav, setNave] = useState(false);
    const barToggle = () => setNave(!nav);

    const navItems = [
        {
            name: "Home.",
            link: "hero"
        },
        {
            name: "Portfolio.",
            link: "portfolio"
        },
        {
            name: "Skill.",
            link: "skill"
        },
        {
            name: "About.",
            link: "about"
        },
        {
            name: "Contact.",
            link: "contact"
        }
    ]

    function getNavItems() {
        return navItems.map(item =>
            <Link activeClass="nav--active" className="nav__item p-3" smooth spy to={item.link}>{item.name}</Link>
        );
    }

    function getBurgerItems() {
        return navItems.map(item =>
            <li>
                <Link activeClass="nav--active" className="nav__item" smooth spy to={item.link}>{item.name}</Link>
            </li>
        );
    }

    return (
        <div className="w-screen h-[80px] z-10 bg-container fixed drop-shadow-lg">
            <div className="px-2 nav flex justify-between items-center w-full h-full">
                <div className="flex items-center mr-4 pl-4 nav__brand">
                    <h4 className="pl-3 text-2xl title font-bold ">
                        Braian. </h4>
                </div>
                <div className="hidden md:flex pr-2">
                    <ul className="text-1xl font-semibold hidden md:flex title">
                        {
                            getNavItems()
                        }
                    </ul>
                </div>

                <button className="md:hidden pr-4" onClick={barToggle}>
                    {!nav ? <RiMenuLine /> : <RiCloseLine />
                    }
                </button>
            </div>

            <ul className={!nav ? 'hidden ' : 'absolute bg-container w-full px-8 md:hidden'}>
                {
                    getBurgerItems()
                }
            </ul>
        </div>
    )
}
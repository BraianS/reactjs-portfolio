import React, { useState, useEffect } from "react";

import { PortfolioItem } from "./PortfolioItem";

import angRssReader from "../../assets/img/ang-rss-reader.png";
import fullStackSpringBootgAngularBlog from "../../assets/img/full-stack-spring-blog-and-angular-blog.jpg";
import angRsskanbanSpring from "../../assets/img/kanbanSpring.png";
import mangasTech from "../../assets/img/mangasTech.webp";
import { Projects } from "../../assets/interface/Projects.interface";

export const Portfolio = () => {

    const projects: Projects[] = [
        {
            type: "Web",
            title: "Ang Rss Reader",
            link: "https://github.com/BraianS/ang-rss-reader",
            imageSrc: angRssReader
        },
        {
            type: "Full Stack",
            title: "Sprin Boot Angular Blog",
            link: "https://github.com/BraianS/fullstack-spring-boot-and-angular-blog",
            imageSrc: fullStackSpringBootgAngularBlog
        },
        {
            type: "Full Stack",
            title: "Ang Rss kanban Spring",
            link: "https://github.com/BraianS/spring-security-angular-kanban-app",
            imageSrc: angRsskanbanSpring
        },
        {
            type: "Full Stack",
            title: "MangasTech",
            link: "https://github.com/BraianS/MangasTech",
            imageSrc: mangasTech
        }
    ];


    const [categorias, setCategorias] = useState(projects);
    const [currentCategory, setCurrentCategory] = useState("All");

    const categories: any[] = [
        "All",
        "Web",
        "Full Stack"
    ]

    const handleButtons = (e: any) => {
        setCurrentCategory(e);
    }

    useEffect(() => {
        if (currentCategory === "All") {
            setCategorias(projects);
        } else {
            const filtered = projects.filter((categoria) => {
                return (
                    categoria.type === currentCategory
                )
            });
            setCategorias(filtered);
        }
    }, [currentCategory]);

    const categoriesButton = categories.map((category, index) => {
        return <button className="text-2xl pl-5 pr-5 " data-reveal="top" data-reveal-delay="0.75s"
            style={
                currentCategory === category ?
                    {
                        background: `var(${"--primary-color"})`,
                        borderRadius: '2.5rem',
                        color: `var(${"--default-color"})`

                    } :
                    {

                    }
            } onClick={() => handleButtons(category)}>{category}</button>
    })

    const [searchTerm, setSearchTerm] = React.useState("")

    const filteredClient = React.useMemo(() => {
        if (searchTerm.length > 0) {
            return projects.filter(({ type }) => type === searchTerm)
        }
        return projects
    }, [searchTerm, projects])

    return (
        <div className="w-full h-auto m-auto " id="portfolio">

            <div className="flex items-center flex-col  pb-16">
                <h1 className="text-5xl font-bold " data-reveal="top" data-reveal-delay="0.5s">
                    Portfolio
                </h1>
                <div className="pt-5">
                    <>
                        {categoriesButton}
                    </>
                </div>
            </div>

            <div className="flex flex-wrap max-w-[1240px] m-auto" data-reveal="top">
                {
                    categorias.map(project => (

                        <PortfolioItem type={project.type} title={project.title} imgSrc={project.imageSrc} link={project.link} />
                    ))
                }
            </div>

        </div>

    )
}
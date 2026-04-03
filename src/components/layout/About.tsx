import React from "react";
import aboutme from "../../assets/img/profile.jpg";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";

export const About = () => {

    const linkedin = "https://www.linkedin.com/in/braian-n-silva/"

    return (
        <div className=" w-full h-screen m-auto" id="about">
            <div className="about flex flex-col sm:flex-row  items-center max-w-[1240px] m-auto h-full ">
                <img className="h-4/6 sm:h-5/6 object-cover rounded-[15%] p-10 " src={aboutme} alt="about me" data-reveal-delay="0.5s" data-reveal="left"/>
                <div className="about__right">
                    <h1 className="text-5xl pb-4 font-bold hidden sm:block" data-reveal-delay="0.5s" data-reveal="top">About</h1>
                    <p className=" flex-wrap " data-reveal-delay="0.75s" data-reveal="top">
                        Sou formado em <span className="text-red-500 font-semibold"> Analista de Sistemas</span> pela <span className="text-red-500 font-semibold">Anhanguera de Sorocaba</span>, amo desenvolver, novas tecnologias e aprender coisas novas.
                        Atualmente criei este novo Portfólio em ReactJs para aprender mais sobre esta ferramente incrível, onde é uma biblioteca JavaScript para criação de interfaces de Usuários.
                    </p>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="p-4">
                        <SiLinkedin fill="#3178C6" className="text-6xl hover:opacity-75 transition-opacity cursor-pointer"/>
                    </a>
                </div>

            </div>
        </div>
    )
}
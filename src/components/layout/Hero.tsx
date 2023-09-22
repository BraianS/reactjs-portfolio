import React from 'react';


import profile from '../../assets/img/me.webp';


export const Hero = () => {
    return (
        <div  className='w-full h-screen bg-container flex flex-col justify-between hero' id="hero">
            <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
                <div className="flex flex-col justify-center pb-5 sm:pb-5 md:pb-5 items-center md:items-start w-full px-2">
                    <p className='text-2xl subtitle' data-reveal="left" data-reveal-delay="0.5s">Analista de sistemas</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold title' data-reveal-delay="0.75s" data-reveal="left">Olá!Meu nome é Braian Silva</h1>
                    <a href="#portfolio" className='py-3 hero__button  flex justify-center text-2xl w-[60%] rounded-full font-semibold' data-reveal="left" data-reveal-delay="1s">Explore

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="animate-pulse ml-6 self-end w-6 h-6">
                            <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </a>
                </div>

                <div className="flex justify-center md:justify-start">
                    <img className=' h-[300px] hero__image rounded-full' src={profile} alt="profile"  data-reveal="right" data-reveal-delay="0.75s"/>
                </div>
            </div>
        </div>
    )
}
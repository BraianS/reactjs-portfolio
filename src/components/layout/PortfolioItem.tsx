import React from "react";

export const PortfolioItem = (props: any) => {
    return (
        <div className="md:basis-1/3 sm:basis-3/6 basis-full pr-2 pl-2 pb-3">
            <div className="bg-slate-50 rounded-3xl portfolio ">
                <a href={props.link}>
                    <img src={props.imgSrc} alt="logo" className=" p-2 hover: rounded-3xl h-80 w-full object-cover" />
                </a>

                <div className=" p-5 flex flex-col items-start">
                    <p className="text-1xl font-bold text-slate-700">{props.type}</p>
                    <a href={props.link} className="text-2xl font-bold portfolio__name ">
                        {props.title}
                    </a >
                </div>
            </div>
        </div>
    )
}
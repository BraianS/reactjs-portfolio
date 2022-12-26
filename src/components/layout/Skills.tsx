import React from "react";

import {
    SiMongodb, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact,
    SiAngular, SiSpring, SiMysql, SiDocker, SiGit, SiGithub, SiTailwindcss
} from "react-icons/si";

export const Skills = () => {

    const html5Color = "#E34F26";
    const css3Color = "#1572B6";
    const javaScriptColor = "#F7DF1E";
    const typeScriptColor = "#3178C6";
    const mySqlColor = "#4479A1";

    const ReactColor = "#61DAFB";
    const angularColor = "#DD0031"
    const springColor = "#6DB33F";
    const mongoDbColor = "#60be86";
    const gitHubColor = "#181717";
    const gitColor = "#F05032";
    const dockerColor = "#2496ED";
    const tailwindCssColor = "#06B6D4";

    return (
        <div className="w-full h-screen m-auto" id="skill">
            <div className="flex flex-col justify-center items-center max-w-[1240px] m-auto h-full">
                <h1 className="pt-5 pb-5 text-5xl font-bold" data-reveal="left" data-reveal-delay="0.25s">Minhas habilidades & Conhecimentos</h1>

                <p className="pb-5 text-lg" data-reveal="right" data-reveal-delay="0.5s">Tecnologias e linguagens que uso para fazer meu projetos todos os dias</p>

                <div className="grid justify-between grid-cols-4 md:grid-cols-6 gap-y-[10px] md:gap-y-[20px]" data-reveal-delay="0.5s" data-reveal="bottom" >
                    <div className="flex flex-col items-center p-1 " >
                        <SiHtml5 fill={html5Color} className="text-6xl skill" />
                        <h4 className="pt-1">HTML-5 </h4>
                    </div>

                    <div className="flex flex-col items-center p-1">
                        <SiCss3 fill={css3Color} className="text-6xl skill " />
                        <h4 className="pt-1">CSS3</h4>
                    </div>
                    <div className="flex flex-col items-center p-1  " >
                        <SiJavascript fill={javaScriptColor} className="text-6xl skill " />
                        <h4 className="pt-1">JavaScript</h4>
                    </div>
                    <div className="flex flex-col items-center p-1  " >
                        <SiTypescript fill={typeScriptColor} className="text-6xl skill " />
                        <h4 className="pt-1">TypeScript</h4>
                    </div>
                    <div className="flex flex-col items-center p-1  " >
                        <SiMysql fill={mySqlColor} className="text-6xl skill " />
                        <h4 className="pt-1">MySQL</h4>
                    </div>


                    <div className="flex flex-col items-center p-1   "  >
                        <SiAngular fill={angularColor} className="text-6xl skill" />
                        <h4 className="pt-1">Angular</h4>
                    </div>
                    <div className="flex flex-col items-center p-1 " >
                        <SiDocker fill={dockerColor} className="text-6xl skill " />
                        <h4 className="pt-1">Docker</h4>
                    </div>
                    <div className="flex flex-col items-center p-1 " >
                        <SiSpring fill={springColor} className="text-6xl skill " />
                        <h4 className="pt-1">Spring</h4>
                    </div>
                    <div className="flex flex-col items-center p-1 " >
                        <SiGit fill={gitColor} className="text-6xl skill " />
                        <h4 className="pt-1">GIT</h4>
                    </div>
                    <div className="flex flex-col items-center p-1 " >
                        <SiGithub fill={gitHubColor} className="text-6xl skill " />
                        <h4 className="pt-1">GitHub</h4>
                    </div>

                    <div className="flex flex-col items-center p-1 " >
                        <SiMongodb fill={mongoDbColor} className="text-6xl skill " />
                        <h4 className="pt-1">MongoDB</h4>
                    </div>
                    <div className="flex flex-col items-center p-1 " >
                        <SiTailwindcss fill={tailwindCssColor} className="text-6xl skill " />
                        <h4 className="pt-1">TailwindCss</h4>
                    </div>
                </div>
                <div className="flex flex-col pt-7">
                    <p className="pb-5" data-reveal-delay="0.5s" data-reveal="left">Aprendendo atualmente</p>
                    <div className="flex flex-col items-center  " data-reveal-delay="0.75s" data-reveal="right" >
                        <SiReact fill={ReactColor} className="text-6xl skill " />
                        <h4 className="pt-1">React</h4>
                    </div>
                </div>
            </div>
        </div >
    )
}
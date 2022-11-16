import React, { useRef, useState } from "react";
import emailjs from 'emailjs-com';

import { SiTwitter, SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import * as SimpleIcons from "react-icons/si";



export const Contact = () => {


    const twitterColor = "#1DA1F2";
    const gitHubColor = "#181717";
    const linkedInColor = "#0A66C2";
    const intagramColor = "#E4405F";

    const linkTwitter = "https://twitter.com/braiancode";
    const gitHubLink = "https://github.com/BraianS";
    const linkedInLink = "https://www.linkedin.com/in/braian-n-silva/";
    const instagramLink = "https://www.instagram.com/braianog/";

    const row = 4;

    const [inputs, setInputs] = useState();

    function sendEmail(e: any) {
        e.preventDefault();

        emailjs.sendForm('gmailMessage', 'template_6lpg99t', e.target, '8Z4qhkONmEfiPJKqa')

            .then((result) => {
                alert("Mensagem enviada com sucesso! 👍");

            }, (error) => {
                alert(error.message)

            });
        e.target.reset()


    }


    const formRef = useRef<HTMLFormElement | null>(null);

    return (
        <div className="w-full h-screen m-auto" id="contact">

            <div className="flex flex-col justify-center items-center max-w-[1240px] m-auto h-full">



                <form className="bg-white shadowmd rounded px-8 w-full flex flex-col  " onSubmit={sendEmail} >
                    <h1 className="pb-6 text-5xl text-center font-bold pt-5">Contact Form</h1>

                    <div className="mb-4">

                        <input type="text" name="name" placeholder="Name" className="  basis-10 shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <div className="mb-4">
                        <input type="email" name="email" placeholder="Email" className=" shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="mb-4">
                        <input type="subject" name="subject" placeholder="Subject" className=" shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <div className="mb-4">
                        <textarea rows={row} name="message" placeholder="Message" className=" shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <button className="pt-2 pb-2 pr-4 mx-auto items-center justify-center text-center flex pl-4 font-semibold contact__button rounded-lg " type="submit" >Send Message</button>

                </form>

                <h1 className="text-5xl mt-10 mb-5 font-bold  ">Get in touch</h1>
                <div className="flex   ">
                    <a className="flex-row pr-5 flex w-full font-semibold pb-4 hover:bg-slate-100 hover:rounded-lg" href={linkTwitter}>
                        <SiTwitter className=" text-3xl " fill={twitterColor} />
                    </a>
                    <a className="flex-row pr-5 flex w-full font-semibold pb-4 hover:bg-slate-100 hover:rounded-lg" href={gitHubLink}>
                        <SiGithub className="text-3xl" fill={gitHubColor} />
                    </a>
                    <a className="flex-row pr-5 flex w-full font-semibold pb-4 hover:bg-slate-100 hover:rounded-lg" href={linkedInLink}>
                        <SiLinkedin className="text-3xl" fill={linkedInColor} />
                    </a>
                    <a className="flex-row flex w-full font-semibold pb-4 hover:bg-slate-100 hover:rounded-lg" href={instagramLink}>
                        <SiInstagram className="text-3xl" fill={intagramColor} />
                    </a>
                </div>
            </div>
        </div>





    )
}
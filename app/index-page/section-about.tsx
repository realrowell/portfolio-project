import Button from "../components/Button";
import { useState, useEffect  } from "react";  

export default function SectionAbout() {
    const [isOpen, setIsOpen] = useState(false); 
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // cleanup when component unmounts
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <div className="container items-center bg-[#000000] ">
            <div className=" flex flex-col lg:flex-row md:flex-row sm:flex-col justify-between items-center gap-20"> 
                <div className="flex-1 flex-col">
                    <img src="/images/banner-001.png" alt="Profile Photo" className="object-contain md:object-cover aspect-square" />
                </div>
                <div className="flex flex-1 flex-col items-start justify-center gap-5">
                    <h3 className="text-white md:text-3xl sm:text-2xl text-2xl font-bold animate-fade-up animate-once animate-delay-200 animate-ease-in-out animate-normal">
                        Hi, I'm{' '} 
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-emerald-300 ">Rowell Jay</span>
                    </h3>
                    <p className="text-white md:text-lg sm:text-md text-md max-w-md text-justify animate-fade-up animate-delay-300 animate-ease-in-out">
                        A web developer with a designer’s eye and a storyteller’s mindset. My background in graphic design, photography, and videography helps me craft websites that are not only functional but visually compelling. I love turning ideas into interactive experiences that connect people and inspire creativity. Every project I take on is a chance to learn, experiment, and push boundaries in design and technology.
                    </p> 
                    <Button className="animate-fade-up animate-delay-400 animate-ease-in-out" variant="primary" onClick={() => setIsOpen(true)}>View Resume/CV</Button> 
                    {isOpen  && (
                        <div
                            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 md:p-5 sm:p-4 p-4"
                            onClick={() => setIsOpen(false)}
                        >
                            <div
                                className="bg-white container rounded-lg p-6 shadow-lg max-w-sm w-full flex flex-col gap-5"
                                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                            >
                                <iframe src="/docs/resume_jay-real.pdf" className="w-full h-[80vh]" ></iframe>
                                <div className="flex flex-col items-end">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="px-4 py-2 bg-gray-800 text-white rounded cursor-pointer"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
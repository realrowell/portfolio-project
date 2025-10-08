import { Link } from "react-router";
import Button from "../components/Button"; 

export default function HeroBanner(){
    return (
        // <div className="flex justify-center items-center min-h-screen bg-brand-gradient-animated">
        <div className="min-h-screen bg-gradient-to-b from-[#004363] to-[#000000] flex items-center justify-center">
            <div className="container text-center flex flex-col gap-10 mb-20"> 
                <h1 className="text-white lg:text-7xl md:text-7xl sm:text-6xl text-4xl md:leading-[90px] sm:leading-[70px] leading-[45px] poppins-bold" >
                    <>
                        Designing the{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400">
                            interface
                        </span>{'. '}
                        Developing the{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-teal-400">
                            experience
                        </span>
                        .
                    </>
                </h1>
                <div className="text-white md:text-3xl sm:text-1xl text-1xl">
                    Web Developer | Graphic Designer | Visual Storyteller
                </div>
                <div className="flex justify-center">
                    <Button variant="primary" to='#projects'>View My Work</Button> 
                    {/* <Link to='#projects' className="btn inline-flex align-middle justify-items-center items-center px-5 py-3 md:text-xl sm:text-base text-base text-center text-white bg-blue-700 rounded-2xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">View My Work</Link> */}
                </div>
                <div className="flex justify-center">
                    <p className="md:text-xl sm:text-md text-md">From concept to code, I deliver robust and intuitive web solutions that drive results.</p>
                </div>
            </div>
        </div>

    );
}
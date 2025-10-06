var sectionStyle = {
    poppinsBold: { 
        fontFamily: "Poppins", 
        fontWeight: 700 
    }, 
}

const technologies = [
    "HTML", 
    "CSS", 
    "JavaScript", 
    "Laravel", 
    "PHP", 
    "Bootstrap", 
    "WordPress", 
    "jQuery", 
    "React", 
    "Tailwind CSS", 
    "Git", 
    "GitHub", 
    "Figma", 
    "Adobe XD", 
    "Photoshop", 
    "Illustrator"
];

export default function TechSection(){
    return (
        <div className="container">
            <style>
                {`
                    text-hover:hover{
                        color: blue; /* Change to your desired hover color */
                        transition: color 0.3s ease;
                        scale: 1.1;
                    }
                    @keyframes scroll-x {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .scroll-x {
                        display: flex;
                        gap: 2.5rem; /* similar to Tailwind gap-10 */
                        width: max-content;
                        animation: scroll-x 80s linear infinite;
                    } 
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }

                    /* IE and Edge */
                    .no-scrollbar {
                        -ms-overflow-style: none;
                    }

                    /* Firefox */
                    .no-scrollbar {
                        scrollbar-width: none;
                    }
                `}
            </style>
            <div className="flex flex-row justify-start align-center gap-5 overflow-x-scroll no-scrollbar py-15">
                {/* {technologies.map((tech, index) => ( 
                    <p key={index} className="text-xl text-neutral-700 text-nowrap" style={sectionStyle.poppinsBold}>{tech}</p>
                ))} */}
                <div className="scroll-x">
                    {[...technologies, ...technologies].map((tech, index) => (
                        <p key={index} className="text-xl text-neutral-700 whitespace-nowrap hover:text-blue-500 hover:scale-[105%] transition-all duration-300" style={sectionStyle.poppinsBold}> {tech} </p>
                    ))}
                </div>
            </div> 
        </div>
    );
}
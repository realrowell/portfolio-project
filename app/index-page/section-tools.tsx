const skillsTools = [
    { 
        title: "Web Development", 
        items: ["Laravel", "PHP", "HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "WordPress", "React", "Tailwind CSS"] 
    }, 
    {
        title: "Design",
        items: ["Figma", "Adobe XD", "Photoshop", "Illustrator"] 
    },
    {
        title: "Media",
        items: ["Photography & Videography (Adobe Premiere, Lightroom, After Effects)"] 
    },
    {
        title: "Other",
        items: ["Responsive Design", "UI/UX Principles", "Version Control (Git)", "Computer Maintenance & Troubleshooting", "Company Event Technical Management"] 
    },
]

export default function SectionTools() {
    return (
        <div className="bg-gradient-to-b from-[#150027] to-[#000] text-white py-10">
            <div className="container flex flex-col items-center justify-center gap-10">
                <h3 className="text-white md:text-3xl sm:text-2xl text-2xl font-bold ">
                    Skills &{' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-teal-400">
                    Tools
                    </span>
                </h3>
                {skillsTools.map((skillCategory) => ( 
                    <div className="flex flex-col items-center justify-center gap-3 text-center">
                        <p key={skillCategory.title} className=" poppins-bold">{skillCategory.title}</p>
                        {skillCategory.items.join(", ")}
                    </div> 
                ))}
            </div>
        </div>
    );
}
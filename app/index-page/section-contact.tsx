const contactInfos = [
    {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/rowell-jay-real-9a6293213',
        description: 'Connect with me on LinkedIn',
        icon: (
            <svg className="fill-white text-white" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                fill="currentColor" 
                viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
            </svg> 
            ),
    },
    {
        title: 'GitHub',
        link: 'https://github.com/realrowell',
        description: 'Check out my projects on GitHub',
        icon: (
            <svg className="fill-white text-white" 
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.107-.775.418-1.305.762-1.604-2.665-.3-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3-.404c1 .004 2 .138 3 .404 2.291-1.552 3.297-1.23 3.297-1.23 .653 1.653 .242 2.874 .118 3.176 .77 .84 1.235 1.911 1.235 3.221 0 4.609 -2.807 5.625 -5.479 5.921 .43 .372 .823 1 .823 2v3c0 .319 .218 .694 .825 .576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            ),
    },    {
        title: 'Email',
        link: 'mailto:realrowell@gmail.com',
        description: 'Send me an email at realrowell@gmail.com',
        icon: (
            <svg className="fill-white text-white" 
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M12 12.713l11.985-8.713H.015L12 12.713Zm0 2.574L.015 6v12.001h23.97V6L12 15.287Z"/>
            </svg>
            ),
    },
];

export default function SectionContact() {
    return (
        <div className="container items-center bg-[#000000] py-20">
            <div className="flex flex-col items-center justify-center">
                <h3 className="text-white md:text-3xl sm:text-2xl text-2xl font-bold text-center">Let’s create something amazing together.</h3> 
                <p className="text-lg">Contact me at</p>
            </div>
            <div className="flex md:flex-row sm:flex-col flex-col items-base justify-between gap-10 mt-20">
                <div className="flex flex-col md:w-2/4 sm:w-full w-full">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScnLplazmnAHTsbcrgWJDIT5YkWZ3vtJs54Hw1vtLCJgXQDog/viewform?embedded=true" width="auto" height="900" >Loading…</iframe>
                </div> 
                <div className="flex flex-col gap-10 md:text-start sm:text-center text-center md:w-2/4 sm:w-full w-full">
                    <h3 className="text-white md:text-3xl sm:text-2xl text-2xl font-bold ">Get in touch</h3>
                    <div className="flex flex-col gap-5 text-start">
                        {contactInfos.map((info) => (
                            <a key={info.title} href={info.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:underline gap-5 ">
                                <i className="text-white ">{info.icon}</i>
                                <div className="flex flex-col">
                                    <span className="text-white font-bold">{info.title}</span>
                                    <span className="text-gray-400">{info.description}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
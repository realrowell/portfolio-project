import { Link } from "react-router";
import { useState, useEffect  } from "react";
import useEmblaCarousel from 'embla-carousel-react';

const PortfolioProjects = [
    {
        id: '1',
        name: "Leave Management System",
        description: "A web-based application that allows employees to request and manage their leaves, while enabling managers to approve or reject leave requests.",
        imageUrl: "/images/projects/lms-001.png",
        featuredImages: ["/images/projects/lms-001.png","/images/projects/lms-002.png", "/images/projects/lms-003.png"],
        projectUrl: "",
        tags: ["Laravel", "PHP", "jQuery", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"]
    },
    {
        id: '2',
        name: "Recruitment Management System",
        description: "A web-based application that streamlines the recruitment process by allowing HR personnel to manage job postings, applications, and candidate evaluations.",
        imageUrl: "/images/projects/rms-003.png",
        featuredImages: ["/images/projects/rms-001.png","/images/projects/rms-002.png", "/images/projects/rms-003.png"],
        projectUrl: "",
        tags: ["Laravel", "PHP", "jQuery", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"]
    },
    {
        id: '3',
        name: "Website Maintenance and Management",
        description: "A service that provides regular updates, backups, and security checks for websites to ensure optimal performance and protection against cyber threats.",
        imageUrl: null,
        featuredImages: [],
        projectUrl: "",
        tags: ["WordPress", "HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    },
    {
        id: '4',
        name: "Asset Tagging and Tracking System",
        description: "A web-based application that allows organizations to tag and track their assets, such as equipment and inventory, to improve asset management and reduce loss.",
        imageUrl: null,
        featuredImages: [],
        projectUrl: "",
        tags: ["Laravel", "PHP", "jQuery", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"]
    },
    {
        id: '5',
        name: "Activity Attendance Monitoring System",
        description: "A web-based application that allows organizations to monitor and track attendance for events and activities, providing real-time data and reports.",
        imageUrl: null,
        featuredImages: [],
        projectUrl: "",
        tags: ["Laravel", "PHP", "jQuery", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"]
    },
    {
        id: '6',
        name: "Static Website Development",
        description: "Development of static websites using HTML, CSS, and JavaScript to create visually appealing and responsive web pages for businesses and individuals.",
        imageUrl: null,
        featuredImages: [],
        projectUrl: "",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap"]
    }
]

export default function SectionProjects(){
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }); 
    const [activeProject, setActiveProject] = useState<typeof PortfolioProjects[number] | null>(null);

    useEffect(() => {
        if (emblaApi) {
        console.log("Embla slides:", emblaApi.slideNodes());
        }
    }, [emblaApi]);

    // close on Esc
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setActiveProject(null);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <>
        <style>
            {
                `.embla {
                overflow: hidden;
                }
                .embla__container {
                display: flex;
                }
                .embla__slide {
                flex: 0 0 100%;
                min-width: 0;
                }`
            }
        </style>
        <div className="bg-gradient-to-b from-[#150027] to-[#000000] text-white py-20">
            <div className="container flex flex-col items-center justify-center gap-10">
                <div className="flex flex-col text-center ">
                <h3 className="text-white md:text-3xl sm:text-2xl text-2xl font-bold ">
                    Things I’ve Built & Loved
                </h3>
                <p className="text-lg">Portfolio Highlights</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                {PortfolioProjects.map((project) => (
                    <div
                    key={project.id}
                    className="max-w-sm bg-white border rounded-lg shadow-sm border-neutral-600 hover:border-neutral-50 transition-all duration-300"
                    > 
                        <Link to={project.projectUrl || "#"}>
                            <img
                            className="rounded-t-lg object-contain md:object-cover aspect-video"
                            src={project.imageUrl ?? "/images/banner-placeholder.jpg"}
                            alt={project.name}
                            />
                        </Link>

                        <div className="p-5">
                            <Link to={project.projectUrl || "#"}>
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-neutral-800 ">
                                {project.name}
                            </h5>
                            </Link>

                            <p className="mb-3 poppins-regular text-sm text-gray-700 ">
                            {project.description}
                            </p>

                            <button
                            onClick={() => setActiveProject(project)}
                            className="btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                            >
                            Know more
                            <svg
                                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                            </button>
                        </div>
                    </div>
                ))}
                </div>

                {/* single modal rendered once */}
                {activeProject && (
                    <div
                        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                        onClick={() => setActiveProject(null)} // click outside to close
                    >
                        <div
                            className="container bg-white rounded-xl p-6 max-w-md w-full shadow-xl"
                            onClick={(e) => e.stopPropagation()} // prevent overlay click
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-title"
                        >
                            <div className="embla overflow-hidden" ref={emblaRef}>
                                <div className="embla__container flex">
                                    {activeProject.featuredImages?.map((img, index) => (
                                        // <div className="embla__slide">Slide 1</div>
                                        <div className="embla__slide flex-[0_0_100%] min-w-0 p-4">
                                            <img
                                                src={img ?? activeProject.imageUrl ?? "/images/banner-placeholder.jpg"}
                                                alt={activeProject.name}
                                                className="embla__slide object-cover aspect-video"
                                            />
                                        </div>
                                    ))} 
                                </div>
                            </div>  
                            
                            <h2 id="modal-title" className="text-2xl font-bold mb-3 text-neutral-800">
                                {activeProject.name}
                            </h2>

                            <p className="text-gray-600 mb-5">{activeProject.description}</p>

                            <div className="flex justify-end gap-2">
                                <button
                                onClick={() => setActiveProject(null)}
                                className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                                >
                                Close
                                </button>

                                <Link
                                to={activeProject.projectUrl || "#"}
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                                >
                                View page
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </>
    );
}
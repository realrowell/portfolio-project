import { Link } from "react-router";
import { useRef, useState, useEffect  } from "react";  
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../components/Button"; 

const PortfolioProjects = [
    {
        id: '1',
        name: "Leave Management System",
        description: "This is Employee Leave Management System where customized to fit the needs of the company. The used of Laravel Framework offers the security, reliability, and scalability of the project where the project can be expanded in the future to add more features and module. In this project, I used PHP for the server side programming and Bootstrap, CSS, JavaScript, and JQuery for the front-end rendering.",
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
        featuredImages: ["/images/projects/rms-001.png","/images/projects/rms-002.png", "/images/projects/rms-003.png", "/images/projects/rms-004.png", "/images/projects/rms-005.png", "/images/projects/rms-006.png"],
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

const modalSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 380,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "0px",
};

export default function SectionProjects( ){ 
    const modalSliderRef = useRef<Slider | null>(null);
    const [activeProject, setActiveProject] = useState<typeof PortfolioProjects[number] | null>(null); 

    // close on Esc
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setActiveProject(null);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []); 

    const [isOpen, setIsOpen] = useState(false); 
    useEffect(() => {
        if (activeProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // cleanup when component unmounts
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [activeProject]);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true, // centers slide
        centerPadding: "0px",
        adaptiveHeight: true,
    };


    return (
        <> 
        <div className="bg-gradient-to-b from-[#000000] to-[#150027] text-white py-20">
            <div className="container flex flex-col items-center justify-center gap-10">
                <div className="flex flex-col text-center ">
                <h3 className="text-white md:text-3xl sm:text-2xl text-2xl font-bold ">
                    Things I’ve{' '} 
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-300 to-blue-500">
                        Built & Loved
                    </span>
                </h3>
                <p className="text-lg">Portfolio Highlights</p>
                </div> 
                {/* <div className="slider-container max-w-3xl mx-auto py-10">
                    <Slider {...settings}>
                        {PortfolioProjects.map((project) => (
                        <div key={project.id} className="p-4 text-center">
                            <img
                            src={project.imageUrl ?? "/images/banner-placeholder.jpg"}
                            alt={project.name}
                            className="rounded-lg mx-auto object-cover aspect-video"
                            />
                            <h3 className="text-xl font-bold mt-4">{project.name}</h3>
                            <p className="text-sm text-gray-500">{project.description}</p>
                        </div>
                        ))}
                    </Slider>
                </div> */}

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

                            <p className="mb-3 poppins-regular text-sm text-gray-700 line-clamp-3">
                                {project.description}
                            </p> 
                            <Button variant="primarySm" onClick={() => setActiveProject(project)}>
                                Know more 
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Button>
                        </div>
                    </div>
                ))}
                </div>

                {/* single modal rendered once */}
                {activeProject && (
                    <div
                        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 md:p-5 sm:p-4 p-4"
                        onClick={() => setActiveProject(null)} // click outside to close
                    >
                        <div
                            className="container bg-white rounded-xl p-6 max-w-md w-full shadow-xl flex flex-col gap-10"
                            onClick={(e) => e.stopPropagation()} // prevent overlay click
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-title"
                        > 
                            <div className="w-full">
                                <Slider
                                    ref={(slider) => { modalSliderRef.current = slider }}
                                    {...modalSettings}
                                >
                                    {(activeProject.featuredImages && activeProject.featuredImages.length > 0)
                                    ? activeProject.featuredImages.map((img, idx) => (
                                        <div key={idx} className="px-3">
                                            <img
                                            src={img ?? "/images/banner-placeholder.jpg"}
                                            alt={activeProject.name}
                                            className="w-full max-h-[50vh] object-contain rounded-lg mx-auto"
                                            />
                                        </div>
                                        ))
                                    : (
                                        <div className="px-3">
                                        <img
                                            src={activeProject.imageUrl ?? "/images/banner-placeholder.jpg"}
                                            alt={activeProject.name}
                                            className="w-full max-h-[60vh] object-contain rounded-lg mx-auto"
                                        />
                                        </div>
                                    )
                                    }
                                </Slider>
                            </div>
                            
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-2">
                                    <h2 id="modal-title" className="text-2xl font-bold  text-neutral-800">
                                        {activeProject.name}
                                    </h2> 
                                    {activeProject.tags && activeProject.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {activeProject.tags.map((tag, idx) => (
                                                <span
                                                key={idx}
                                                className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-gray-500 poppins-bold text-sm">Project Description:</p>
                                    <p className="text-gray-800  text-sm">{activeProject.description}</p>
                                </div>
                            </div>

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
import { Link } from "react-router";

const PortfolioProjects = [
    {
        name: "Leave Management System",
        description: "A web-based application that allows employees to request and manage their leaves, while enabling managers to approve or reject leave requests.",
        imageUrl: "/images/projects/lms-001.png",
        projectUrl: "",
        tags: ["Laravel", "PHP", "jQuery", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"]
    },
    {
        name: "Recruitment Management System",
        description: "A web-based application that streamlines the recruitment process by allowing HR personnel to manage job postings, applications, and candidate evaluations.",
        imageUrl: "/images/projects/rms-003.png",
        projectUrl: "",
        tags: ["Laravel", "PHP", "jQuery", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"]
    },
    {
        name: "Website Maintenance and Management",
        description: "A service that provides regular updates, backups, and security checks for websites to ensure optimal performance and protection against cyber threats.",
        imageUrl: null,
        projectUrl: "",
        tags: ["WordPress", "HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    },
    {
        name: "Asset Tagging and Tracking System",
        description: "A web-based application that allows organizations to tag and track their assets, such as equipment and inventory, to improve asset management and reduce loss.",
        imageUrl: null,
        projectUrl: "",
        tags: ["Laravel", "PHP", "jQuery", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"]
    },
    {
        name: "Activity Attendance Monitoring System",
        description: "A web-based application that allows organizations to monitor and track attendance for events and activities, providing real-time data and reports.",
        imageUrl: null,
        projectUrl: "",
        tags: ["Laravel", "PHP", "jQuery", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"]
    },
    {
        name: "Static Website Development",
        description: "Development of static websites using HTML, CSS, and JavaScript to create visually appealing and responsive web pages for businesses and individuals.",
        imageUrl: null,
        projectUrl: "",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap"]
    }
]

export default function SectionProjects(){
    return( 
        <div className="bg-gradient-to-b  from-[#150027] to-[#000000] text-white py-20">
            <div className="container flex flex-col items-center justify-center gap-10">
                <h3 className="text-white md:text-3xl sm:text-2xl text-2xl font-bold ">Projects</h3> 
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                    {PortfolioProjects.map((project) => (
                        <div className="max-w-sm bg-white border rounded-lg shadow-sm border-neutral-600 hover:border-neutral-50 transition-border duration-300" key={project.name}>
                            <Link to={project.projectUrl}>
                                <img className="rounded-t-lg object-contain md:object-cover aspect-video" src={project.imageUrl ?? '/images/banner-placeholder.jpg'} alt="" />
                            </Link>
                            <div className="p-5">
                                <Link to={project.projectUrl}>
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-neutral-800 ">{project.name}</h5>
                                </Link>
                                <p className="mb-3 poppins-regular text-sm text-gray-700 ">{project.description}</p>
                                <Link to={'/'} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Know more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </Link>
                            </div>
                        </div> 
                    ))}
                </div>
            </div>
        </div>
    );
}
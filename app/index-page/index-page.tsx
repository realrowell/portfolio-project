import HeroBanner from "./section-hero-banner";
import SectionAbout from "./section-about";
import SectionTech from "./section-technologies";
import SectionTools from "./section-tools";
import SectionProjects from "./section-projects";
import SectionContact from "./section-contact"

export function IndexPage() {
    return (
        <>
        <style>
            {`
                .poppins-bold{
                    font-family: 'Poppins', sans-serif;
                    font-weight: 700;
                    font-style: normal; 
                }
                .poppins-regular{
                    font-family: 'Poppins', sans-serif;
                    font-weight: 400;
                    font-style: normal;
                }
                .white-chick{
                    font-family: 'White Chick Font', sans-serif;
                    font-weight: normal;
                    font-style: normal;
                    }
                .slick-prev:before,
                .slick-next:before {
                    color: #c3cee3 !important;   /* <-- change this to your preferred color */
                    font-size: 28px;           /* optional: make them bigger/smaller */
                    opacity: 1;                /* optional: make them fully visible */
                }
            `} 
        </style>
        <section>
            <HeroBanner />
        </section>
        <section id="about">
            <SectionAbout />
        </section>
        <section>
            <SectionTech />
        </section>
        <section id="projects">
            <SectionProjects />
        </section>
        <section>
            <SectionTools />
        </section> 
        <section id="contact">
            <SectionContact />
        </section>
        <footer className="w-full flex items-center justify-center mt-20 py-10 bg-gradient-to-b from-[#000000] to-[#004363]">
            <div className="container">
                <div className="flex flex-col text-center align-center justify-center md:gap-30 sm:gap-20 gap-20">
                    <h3 className="poppins-bold md:text-3xl sm:text-xl text-xl ">
                        Portfolio{' '}
                        <span className="white-chick md:text-5xl sm:text-3xl text-3xl tracking-wider">Project</span>
                    </h3> 
                    <div className="flex flex-col text-center md:gap-3 sm:gap-1 gap-1">
                        <h3 className="poppins-bold md:text-7xl sm:text-3xl text-3xl "> 
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-emerald-300 ">Rowell Jay Real</span>
                        </h3>
                        <h4 className="text-white md:text-2xl sm:text-sm text-sm ">
                            Web Developer | Graphic Designer | Visual Storyteller
                        </h4>
                    </div>
                    <div className="flex flex-col text-center gap-0">
                        <p className="text-gray-300 poppins-regular">© 2025 All rights reserved.</p>
                        <p className="text-gray-300 poppins-regular">Powered by SyncPro - IT Solutions</p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
}
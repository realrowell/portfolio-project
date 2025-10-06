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
        <section>
            <SectionTools />
        </section> 
        <section id="projects">
            <SectionProjects />
        </section>
        <section id="contact">
            <SectionContact />
        </section>
        <footer className="w-full h-24 flex items-center justify-center border-t mt-8">
            <p className="text-sm text-gray-500 poppins-regular">© 2025 Your Name. All rights reserved.</p>
        </footer>
        </>
    );
}
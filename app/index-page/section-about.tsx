import Button from "~/components/Button";

export default function SectionAbout() {
    return (
        <div className="container items-center bg-[#000000] ">
            <div className=" flex flex-col lg:flex-row md:flex-row sm:flex-col justify-between items-center gap-20"> 
                <div className="flex-1 flex-col">
                    <img src="/images/banner-001.png" alt="Profile Photo" className="object-contain md:object-cover aspect-square" />
                </div>
                <div className="flex flex-1 flex-col items-start justify-center gap-5">
                    <h3 className="text-white md:text-3xl sm:text-2xl text-2xl font-bold ">Hi, I'm Rowell Jay</h3>
                    <p className="text-white md:text-lg sm:text-md text-md  max-w-md">
                        I'm a passionate web developer and graphic designer with a knack for creating visually stunning and user-friendly digital experiences. With a background in both design and development, I bridge the gap between aesthetics and functionality.
                    </p>
                    <p className="text-white md:text-lg sm:text-md text-md max-w-md">
                        Whether it's crafting responsive websites, designing logos, or developing interactive applications, I thrive on turning ideas into reality. Let's collaborate to bring your vision to life!
                    </p> 
                    <Button variant="primary">Download CV</Button>
                </div>
            </div>
        </div>
    );
}
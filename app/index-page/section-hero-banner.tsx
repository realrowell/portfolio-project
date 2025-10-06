import Button from "../components/Button";

// var sectionStyle = { 
//     poppinsBold: {
//         // fontFamily: "'Poppins', sans-serif",
//         fontWeight: "700",
//         fontStyle: "normal"
//     },
//     poppinsRegular: {
//         // fontFamily: "'Poppins', sans-serif",
//         fontWeight: "400",
//         fontStyle: "normal"
//     }
// }

export default function HeroBanner(){
    return (
        // <div className="flex justify-center items-center min-h-screen bg-brand-gradient-animated">
        <div className="min-h-screen bg-gradient-to-b from-[#004363] to-[#000000] flex items-center justify-center">
            <div className="container text-center flex flex-col gap-10"> 
                <h1 className="text-white lg:text-7xl md:text-7xl sm:text-6xl text-4xl md:leading-[90px] sm:leading-[70px] leading-[45px] poppins-bold" >
                    Designing & Developing with Creativity and Purpose
                </h1>
                <div className="text-white md:text-3xl sm:text-1xl text-1xl">
                    Web Developer | Graphic Designer | Visual Storyteller
                </div>
                <div className="flex justify-center">
                    <Button variant="primary">View My Work</Button> 
                </div>
                <div className="flex justify-center">
                    <p className="md:text-xl sm:text-md text-md">I build user-centric web applications that blend technical precision with creative flair.</p>
                </div>
            </div>
        </div>

    );
}
export default function SectionContact() {
    return (
        <div className="container items-center bg-[#000000] py-20">
            <div className="flex flex-col items-center justify-center">
                <h3 className="text-white md:text-3xl sm:text-2xl text-2xl font-bold text-center">Let’s create something amazing together.</h3> 
                <p className="text-lg">Contact me at</p>
            </div>
            <div className="flex md:flex-row sm:flex-col flex-col items-center justify-between gap-5 mt-10">
                <div className="flex flex-col md:w-2/4 sm:w-full w-full">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScnLplazmnAHTsbcrgWJDIT5YkWZ3vtJs54Hw1vtLCJgXQDog/viewform?embedded=true" width="auto" height="900" >Loading…</iframe>
                </div> 
                <div className="flex flex-col gap-5 md:text-start sm:text-center text-center md:w-2/4 sm:w-full w-full">
                    <h3 className="text-white md:text-3xl sm:text-2xl text-2xl font-bold ">Get in touch</h3>
                </div>
            </div>
        </div>
    );
}
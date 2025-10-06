import { NavLink } from "react-router";
import { Outlet } from "react-router";
import { Link } from "react-router";

export default function IndexNavbar(){
    return (
        <>
        <div className="flex flex-row shadow-xl/15 shadow-black bg-[#004363] relative"> 
            <div className="container flex flex-row items-center justify-between py-4 text-white text-lg">
                <div className="brand">
                    <Link to='/'>
                        <h3 className="poppins-bold md:text-lg sm:text-base text-base">Portfolio <span className="white-chick md:text-3xl sm:text-2xl text-2xl tracking-wider">Project</span></h3>
                    </Link>
                </div>
                <nav className="flex flex-row md:gap-10 sm:gap-3 gap-3 align-center ">
                    <NavLink to="/#projects" className='poppins-bold md:text-base sm:text-sm text-sm hover:text-blue-500 transition-all duration-300'>Projects</NavLink>
                    <NavLink to="/#about" className='poppins-bold md:text-base sm:text-sm text-sm hover:text-blue-500 transition-all duration-300'>About</NavLink>
                    <NavLink to="/#contact" className='poppins-bold md:text-base sm:text-sm text-sm hover:text-blue-500 transition-all duration-300'>Contact</NavLink> 
                </nav>
            </div>
        </div>
        <Outlet />
        </>
    );
}
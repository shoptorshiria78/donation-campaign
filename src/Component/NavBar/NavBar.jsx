import image from "../../../public/Resources/Logo.png"
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="flex flex-col md:flex-row  lg:flex-row  h-[72px] items-center mt-5 w-[400px] md:w-[600px] lg:w-[1100px] mx-auto justify-between">
                <div>
                    <img className="h-[50px]" src={image} alt="" />
                </div>
                <ul className="text-base flex space-x-10 mt-5">
                    <li> <NavLink to="./" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#FF444A]  font-bold underline" : ""}> Home </NavLink> </li>
                    <li> <NavLink to="./donation" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#FF444A]  font-bold underline" : ""}> Donation </NavLink> </li>
                    <li> <NavLink to="./statistics" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""}> Statistics </NavLink> </li>
                    
                </ul>

            </nav>
    );
};

export default NavBar;
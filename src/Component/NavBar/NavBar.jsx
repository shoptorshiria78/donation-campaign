import image from "../../../public/Resources/Logo.png"
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="flex justify-between h-[72px] items-center mt-5 max-w-[1100px] mx-auto">
                <div>
                    <img className="h-[50px]" src={image} alt="" />
                </div>
                <ul className="text-base flex space-x-10">
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
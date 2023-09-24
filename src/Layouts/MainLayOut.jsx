import { Outlet } from "react-router-dom";
import NavBar from "../Component/NavBar/NavBar";


const MainLayOut = () => {
    return (
        <div className="max-w-[1100px] mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>

        </div>
    );
};

export default MainLayOut;
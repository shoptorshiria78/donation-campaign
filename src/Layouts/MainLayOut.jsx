import { Outlet } from "react-router-dom";
import NavBar from "../Component/NavBar/NavBar";


const MainLayOut = () => {
    return (
        <div >
            <NavBar></NavBar>
            <Outlet className="max-w-[1100px] mx-auto "></Outlet>

        </div>
    );
};

export default MainLayOut;
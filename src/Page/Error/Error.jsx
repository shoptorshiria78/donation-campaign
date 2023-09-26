import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className=" flex flex-col space-y-3 justify-center items-center h-[80vh]">
            <p className="text-4xl font-bold">404 Not Found</p>
            <p className="text-2xl font-semibold">Go To Home</p>
            <Link to='/'><button className="h-12 px-4 rounded bg-purple-900 text-white">Home</button></Link>
        </div>
    );
};

export default Error;
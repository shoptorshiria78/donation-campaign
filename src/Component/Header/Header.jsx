


const Header = () => {
    return (
        <div className="h-[80vh] flex flex-col justify-center items-center">
            <h1 className="text-[40px] font-bold">I Grow By Helping People In Need</h1>
            <div className="mt-10">
                <input className="border h-10 w-[300px] rounded-l-lg" type="text"></input>
                <button className="text-white bg-[#FF444A] w-[100px] h-10 rounded-r-lg">Search</button>
            </div>


        </div>
    );
};

export default Header;
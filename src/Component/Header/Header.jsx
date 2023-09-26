import { useEffect, useState } from "react";
import image from '../../../public/Resources/background-donation.jpg'
import NavBar from '../NavBar/NavBar'
import PropTypes from 'prop-types'



const Header = ({handleChange,handleSearchText}) => {
    
    const [loadData, setLoadData] = useState([]);
    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setLoadData(data))
    }, [handleSearchText])

    return (


        <div className="h-[70vh] flex flex-col  justify-center items-center ">
            <img className='relative w-full h-[100vh] ' src={image} alt="" />
            <div className='absolute w-full h-[100vh] bg-gradient-to-r from-white to-white opacity-95 '></div>

            <div className='absolute w-[1100px] mx-auto top-2'>
                <NavBar className='w-full'></NavBar>
                <div className='mt-40 flex flex-col  justify-center items-center'>
                    <h1 className="text-[40px] font-bold">I Grow By Helping People In Need</h1>
                    <div className="mt-10">
                        <input onChange={handleChange} placeholder='Search Here...' className="border h-10 w-[300px] p-3 rounded-l-lg" type="text"></input>
                        <button onClick={()=>handleSearchText(loadData)} className="text-white bg-[#FF444A] w-[100px] h-10 rounded-r-lg">Search</button>
                    </div>
                </div>
            </div>



        </div>


    );
};

Header.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSearchText: PropTypes.func.isRequired,
}

export default Header;
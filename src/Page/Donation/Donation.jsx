import { useEffect, useState } from "react";
import swal from 'sweetalert';
import DonatedCard from "../../Component/DonatedCard/DonatedCard";


const Donation = () => {

    const [donatedCard, setDonatedCard] = useState([]);
    const [seeAllButton, setSeeAllButton] = useState(false);
   


    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem('donate'));
        if (donatedItems) {
            const length = donatedItems.length;
            length < 4 ? setDonatedCard(donatedItems) : setDonatedCard(donatedItems.slice(0,4));

            length > 4 ? setSeeAllButton(true) : setSeeAllButton(false);
        }

        else {

            swal("Oops", "No data found!", "error");
        }
    }, [])

    const handleSeeAllButton = () =>{
        const donatedItems = JSON.parse(localStorage.getItem('donate'));
        setDonatedCard(donatedItems);
        setSeeAllButton(false);
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-[1100px] mx-auto mt-8 gap-4">
                {
                    donatedCard.map((card, idx) => <DonatedCard card={card} key={idx}></DonatedCard>)
                }
            </div>

            <div className="flex justify-center items-center my-10">
                
                    {
                        seeAllButton &&  <button onClick={handleSeeAllButton} className={"text-lg bg-[#009444] text-white text-center h-10 rounded px-6 "}>See All</button>  
                    }
          
                 
            </div>
        </div>
    )
};

export default Donation;
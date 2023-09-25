import { useNavigate } from "react-router-dom";


const Card = (card) => {
    
    const navigate = useNavigate()
    const handleDonationDetails = () =>{
            navigate(`/donationDetails/${card.card.id}`)
    }

    const bgCardStyle = { backgroundColor:card.card.color_card_bg, color:card.card.color_text_btn_bg};
    const bgCategory = {backgroundColor:card.card.color_category_bg}

    return (
        <div onClick={handleDonationDetails}>
            <div style={bgCardStyle} className="rounded w-[260px] mt-3">
                <figure><img className="" src={card.card.img} /></figure>
                <div className="space-y-2 mt-2 p-3">

                    <button style={bgCategory} className={`text-sm  text-left h-6 rounded px-2 `}>{card.card.category}</button>
                    <h2 className={`text-lg font-bold `}>{card.card.title}</h2>
                </div>


            </div>
        </div>
    );
};

export default Card;
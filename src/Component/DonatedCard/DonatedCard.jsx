


import PropTypes from 'prop-types'

const DonatedCard = ({ card }) => {

    const bgStyle = { backgroundColor: card.color_category_bg, color: card.color_text_btn_bg }

    return (
        <div>
            <div className="card card-side bg-base-100" style={{ backgroundColor: card.color_card_bg }}>
                <figure><img className='w-[180px] h-full rounded' src={card.img} alt="" /></figure>
                <div className='ml-4 flex flex-col  space-y-2 mt-4 mb-4'>

                    <button style={bgStyle} className={`text-sm  text-center h-6 rounded w-20`}>{card.category}</button>
                    <h1 className='text-xl font-semibold'>{card.title}</h1>
                    <h1 style={{ color: card.color_text_btn_bg }} className='text-base font-semibold'> ${card.price} </h1>

                    <button style={{ backgroundColor: card.color_text_btn_bg }} className={` h-10 w-32  rounded  text-white `}>View Details</button>



                </div>

            </div>
        </div>


    );
};

DonatedCard.propTypes = {
    card: PropTypes.object.isRequired
}

export default DonatedCard;